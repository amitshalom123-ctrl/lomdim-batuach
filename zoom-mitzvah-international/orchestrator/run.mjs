#!/usr/bin/env node
// Zoom Mitzvah International — multi-agent teams orchestrator.
//
// The "conversations" that talk to each other:
//   Program GM → Track GM (plan) → owning team (deliverable)
//     → English lead + French lead (language polish)
//     → QA & Control (checklist)
//     → Director (score 1–10). Score < 8 → back to the owning team with the
//       Director's fixes, up to MAX_ROUNDS. Score ≥ 8 → approved.
// Every message is written to runs/<timestamp>-<track>.md (transcript) and
// runs/<timestamp>-<track>.scores.json (scorecard).
//
// Usage:
//   ANTHROPIC_API_KEY=... node run.mjs --track landing [--task "..."] [--max-rounds 4] [--dry-run]
//   node run.mjs --track crm --task "Write the EN/FR lesson-reminder e-mails"

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PROJECT = path.resolve(HERE, "..");            // zoom-mitzvah-international/
const REPO = path.resolve(PROJECT, "..");             // repo root
const AGENTS_DIR = path.join(REPO, ".claude", "agents");
const MODEL = process.env.ZM_MODEL || "claude-opus-5-5";
const PASS_SCORE = 8;

// ---------- CLI ----------
const args = process.argv.slice(2);
const arg = (name, dflt) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? dflt : args[i + 1];
};
const TRACK = arg("track", "landing");
const MAX_ROUNDS = Number(arg("max-rounds", 4));
const DRY = args.includes("--dry-run");
const TASK_OVERRIDE = arg("task", null);
if (!["landing", "crm"].includes(TRACK)) throw new Error("--track must be landing|crm");

// ---------- agents ----------
function loadAgent(name) {
  const file = path.join(AGENTS_DIR, `${name}.md`);
  const raw = fs.readFileSync(file, "utf8");
  return raw.replace(/^---[\s\S]*?---\s*/, ""); // strip frontmatter → system prompt
}
const agent = (role) => loadAgent(role === "program-manager" ? "zm-program-manager" : `zm-${TRACK}-${role}`);

// Shared context every agent sees (kept stable at the top for prompt caching).
function sharedContext() {
  const files = [
    "README.md",
    `briefs/${TRACK}-brief.md`,
    "content/glossary.md",
    "marketing/strategy.md",
    "marketing/geo-pricing-and-language.md",
  ];
  return files
    .map((f) => path.join(PROJECT, f))
    .filter((p) => fs.existsSync(p))
    .map((p) => `<file path="${path.relative(REPO, p)}">\n${fs.readFileSync(p, "utf8")}\n</file>`)
    .join("\n\n");
}

// ---------- transcript ----------
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const RUNS = path.join(PROJECT, "runs");
fs.mkdirSync(RUNS, { recursive: true });
const transcriptPath = path.join(RUNS, `${stamp}-${TRACK}.md`);
const scoresPath = path.join(RUNS, `${stamp}-${TRACK}.scores.json`);
const log = (from, to, text) => {
  const block = `\n### ${from} → ${to}\n\n${text}\n`;
  fs.appendFileSync(transcriptPath, block);
  console.log(`\n=== ${from} → ${to} ===\n${text.slice(0, 600)}${text.length > 600 ? " …" : ""}`);
};
fs.writeFileSync(transcriptPath, `# Teams run — ${TRACK} — ${stamp}\n`);

// ---------- model calls ----------
const client = DRY ? null : new Anthropic();

async function talk(role, userText) {
  if (DRY) return `[dry-run] ${role} would answer: ${userText.slice(0, 120)}`;
  const response = await client.beta.messages.create({
    model: MODEL,
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "high" },
    system: [
      { type: "text", text: sharedContext(), cache_control: { type: "ephemeral" } },
      { type: "text", text: agent(role) },
    ],
    messages: [{ role: "user", content: userText }],
  });
  if (response.stop_reason === "refusal") return `[${role} declined: ${response.stop_details?.explanation ?? "refusal"}]`;
  return response.content.filter((b) => b.type === "text").map((b) => b.text).join("\n");
}

const PlanSchema = z.object({
  tasks: z.array(
    z.object({
      id: z.string(),
      team: z.enum(["research", "development", "script", "production", "marketing"]),
      task: z.string(),
      acceptance: z.string(),
      has_customer_text: z.boolean(),
    })
  ),
  notes_he: z.string(),
});

const ScoreSchema = z.object({
  score: z.number(),
  verdict: z.enum(["APPROVED", "REWORK"]),
  per_criterion: z.object({
    brand: z.number(),
    marketing: z.number(),
    language: z.number(),
    design: z.number(),
    technical: z.number(),
    safety: z.number(),
  }),
  fixes: z.array(z.object({ team: z.string(), fix: z.string() })),
  progress_score: z.number(),
  notes_he: z.string(),
});

async function structured(role, userText, schema, dryValue) {
  if (DRY) return dryValue;
  const response = await client.messages.parse({
    model: MODEL,
    max_tokens: 16000,
    output_config: { effort: "high", format: zodOutputFormat(schema) },
    system: [
      { type: "text", text: sharedContext(), cache_control: { type: "ephemeral" } },
      { type: "text", text: agent(role) },
    ],
    messages: [{ role: "user", content: userText }],
  });
  if (!response.parsed_output) throw new Error(`${role}: could not parse structured output`);
  return response.parsed_output;
}

// ---------- the loop ----------
async function main() {
  const objective =
    TASK_OVERRIDE ||
    `Execute the next milestone of the ${TRACK} brief. Focus on what moves conversions for Jewish families abroad.`;

  const kickoff = await talk("program-manager", `Owner request:\n${objective}\n\nBrief the ${TRACK} general manager in 5–10 lines.`);
  log("Program GM", `${TRACK} GM`, kickoff);

  const plan = await structured(
    "general-manager",
    `Program GM says:\n${kickoff}\n\nTurn this into 2–6 concrete tasks with owner team and acceptance criterion.`,
    PlanSchema,
    { tasks: [{ id: "T1", team: "script", task: objective, acceptance: "Director ≥ 8", has_customer_text: true }], notes_he: "dry-run" }
  );
  log(`${TRACK} GM`, "teams", "```json\n" + JSON.stringify(plan, null, 2) + "\n```");

  const scorecard = [];
  for (const t of plan.tasks) {
    let feedback = "";
    let result = null;
    for (let round = 1; round <= MAX_ROUNDS; round++) {
      const deliverable = await talk(
        t.team,
        `Task ${t.id} (round ${round}): ${t.task}\nAcceptance: ${t.acceptance}\n` +
          (feedback ? `\nDirector feedback from the previous round — fix exactly this:\n${feedback}\n` : "") +
          `\nProduce the complete deliverable.`
      );
      log(t.team, "language leads / QA", deliverable);

      let polished = deliverable;
      if (t.has_customer_text) {
        const en = await talk("lang-en", `Proof the English in this deliverable. Return a list of fixes.\n\n${polished}`);
        log("English lead", t.team, en);
        const fr = await talk("lang-fr", `Proof the French in this deliverable. Return a list of fixes.\n\n${polished}`);
        log("French lead", t.team, fr);
        polished = await talk(
          t.team,
          `Apply these language fixes and return the full corrected deliverable.\n\nEN:\n${en}\n\nFR:\n${fr}\n\nDELIVERABLE:\n${polished}`
        );
        log(t.team, "QA", polished);
      }

      const qa = await talk("qa", `Run your checklist on task ${t.id} (${t.task}).\n\n${polished}`);
      log("QA", "Director", qa);

      result = await structured(
        "director",
        `Score task ${t.id} — round ${round}.\nTask: ${t.task}\nAcceptance: ${t.acceptance}\n\nDELIVERABLE:\n${polished}\n\nQA REPORT:\n${qa}`,
        ScoreSchema,
        { score: 8, verdict: "APPROVED", per_criterion: { brand: 8, marketing: 8, language: 8, design: 8, technical: 8, safety: 10 }, fixes: [], progress_score: 5, notes_he: "dry-run" }
      );
      // The gate is enforced in code, not only by the Director's own verdict.
      const passed = result.score >= PASS_SCORE && !result.fixes.some((f) => /safety/i.test(f.team));
      log("Director", t.team, "```json\n" + JSON.stringify(result, null, 2) + "\n```");
      scorecard.push({ task: t.id, team: t.team, round, score: result.score, passed });
      fs.writeFileSync(scoresPath, JSON.stringify({ track: TRACK, model: MODEL, scorecard }, null, 2));

      if (passed) {
        const out = path.join(RUNS, `${stamp}-${TRACK}-${t.id}.approved.md`);
        fs.writeFileSync(out, polished);
        break;
      }
      feedback = result.fixes.map((f) => `- [${f.team}] ${f.fix}`).join("\n");
      if (round === MAX_ROUNDS) {
        const esc = await talk("program-manager", `Task ${t.id} failed ${MAX_ROUNDS} rounds (last score ${result.score}). Decide: re-scope, reassign or escalate to Amit. Fixes:\n${feedback}`);
        log("Program GM", "Amit", esc);
      }
    }
  }

  const summary = await talk("program-manager", `Write a short Hebrew status report for Amit from this scorecard:\n${JSON.stringify(scorecard)}`);
  log("Program GM", "Amit", summary);
  console.log(`\nTranscript: ${transcriptPath}\nScores: ${scoresPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
