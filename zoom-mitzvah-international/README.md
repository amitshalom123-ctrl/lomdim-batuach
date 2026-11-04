# Zoom Mitzvah International — צוותי סוכנים (EN / FR)

> **Learn Torah from Jerusalem — without leaving home.**
> **Apprenez la Torah depuis Jérusalem, sans quitter la maison.**

## בעברית — מה יש כאן

פרויקט שבו **שיחות (סוכנים) מדברות זו עם זו ועובדות יחד** כצוות אמיתי, בשני מסלולים נפרדים:

| מסלול | מה בונים | איפה |
|---|---|---|
| **אתר נחיתה** | שכפול "זום מצווה" לאתר באנגלית ובצרפתית ליהודים בחו"ל, 750 € / 850$ לפי מדינה | Lovable: `Zoom Mitzvah International (EN-FR)` |
| **CRM** | התאמת החלק הגלוי ללקוחות (פורטל, נציג AI, מיילים, ווטסאפ) לאנגלית ולצרפתית, ללא פיצול הנתונים | Lovable: `זום מצווה crm` |

**מבנה הצוותים (לכל מסלול צוותים נפרדים):**

```
                    מנהל כללי של הפרויקט (zm-program-manager)
                   ┌───────────────┴────────────────┐
     מנהל מסלול אתר הנחיתה                      מנהל מסלול CRM
  (zm-landing-general-manager)              (zm-crm-general-manager)
  מחקר · פיתוח · תסריט · הפקה · שיווק        מחקר · פיתוח · תסריט · הפקה · שיווק
          ↓                                          ↓
  עורך אנגלית + עורך צרפתית                 עורך אנגלית + עורך צרפתית
          ↓                                          ↓
      בקרה (QA)                                   בקרה (QA)
          ↓                                          ↓
  במאי — ציון 1–10                            במאי — ציון 1–10
  ציון < 8 → חוזר לעיבוד לצוות האחראי (עד 4 סבבים, אחר כך הסלמה למנהל הכללי)
```

- הגדרות כל הצוותים: `.claude/agents/zm-*.md` (21 תפקידים). אפשר להפעיל אותם ישירות ב-Claude Code ("use the zm-landing-director agent to score…").
- מנוע השיחות האוטומטי: `zoom-mitzvah-international/orchestrator/run.mjs`. שער הציון 8 נאכף בקוד, וכל שיחה נשמרת בתמליל.
- השיווק במרכז: מיצוב, מיתוג, מיקום המאמרים, מחיר לפי מדינה ויתרונות (נציג AI אישי, 120+ מדריכים מתורגמים לשתי השפות, מתאים גם ללקויות למידה).

## English — how it works

### Folder map
| Path | Owner team | What |
|---|---|---|
| `briefs/landing-brief.md`, `briefs/crm-brief.md` | GMs | Objectives, scope, must-haves |
| `research/` | Research | Audience, market, competitors |
| `marketing/` | Marketing | Strategy, brand guide, geo pricing & language rules |
| `content/` | Script | Landing copy EN/FR, e-mail & WhatsApp templates EN/FR, glossary |
| `scorecards/` | Director | Scores per deliverable and round |
| `status.md` | Program GM | Live status log |
| `orchestrator/` | — | The engine that runs the team conversations |

### Run the teams
```bash
cd zoom-mitzvah-international/orchestrator
npm install
export ANTHROPIC_API_KEY=...            # or `ant auth login`
node run.mjs --track landing --task "Write 30s and 60s hero video scripts in EN and FR"
node run.mjs --track crm --task "Write the EN/FR 24h lesson reminder e-mail + WhatsApp"
node run.mjs --track landing --dry-run  # wiring test, no API calls
```
Each run writes `runs/<timestamp>-<track>.md` (the full conversation: who said what to whom), `*.scores.json` (Director scorecard), and `*.approved.md` for every deliverable that scored ≥ 8.

The model calls use `claude-opus-5-5` with server-side refusal fallbacks enabled (`fallbacks: "default"`). Override the model with `ZM_MODEL=...`.

### Quality gate
Director scores each deliverable on brand, marketing, language, design, technical and safety. The weighted overall score must be **≥ 8**. Anything lower goes back to the owning team with specific fixes. A safety failure caps the score at 5.

### Where Lovable is used (only when necessary)
- Cloning the landing site (remix). Done.
- Changes that must live inside a Lovable project (its code, its Lovable Cloud backend, publishing).
- GitHub ↔ Lovable connection is a one-click owner action in the Lovable editor: **GitHub → Connect project**. Lovable's API can't do it.

Everything else — plans, copy, templates, research, scoring, team definitions — lives here in GitHub.


## AUDIENCE RULE (owner decision, 2026-11-04 — overrides anything else)
- We teach ONLY: (1) Bar Mitzvah preparation for BOYS, and (2) Torah learning for adult MEN (adult Bar Mitzvah, learning to read from the Torah, weekly parasha, general Torah study).
- We do NOT offer Bat Mitzvah, and we do not teach girls or women to read from the Torah. Never write "Bat Mitzvah" / « Bat Mitsva », "B'nai Mitzvah", "your child or daughter", or gender-neutral wording that implies girls are included.
- Write "your son" / « votre fils » for the child; "men" / « hommes » or "adult learners" for adults. Never market to girls; never say we refuse them either — simply describe what we offer.
