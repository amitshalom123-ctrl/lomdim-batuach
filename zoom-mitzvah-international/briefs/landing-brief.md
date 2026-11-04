# Brief — Landing site (Zoom Mitzvah International, EN/FR)

> **בעברית בקצרה:** שכפול אתר הנחיתה "זום מצווה" לאתר נפרד באנגלית ובצרפתית ליהודים בחו"ל. השיווק במרכז: "ללמוד תורה מירושלים בלי לצאת מהבית". עיצוב מודרני לא תבניתי, אנימציות קלות, תמונות ירושלים ורבנים ישראלים. מחיר 750 € באירוזון / 850$ בשאר העולם לפי זיהוי מדינה אוטומטי. להציג את כל היתרונות: נציג AI אישי, 120+ מדריכים מתורגמים (מאות מאמרים בשתי השפות), מתאים ללקויות למידה. כל תוצר עובר בקרה ובמאי — ציון מתחת ל-8 חוזר לעיבוד.

## Lovable
- Project: **Zoom Mitzvah International (EN-FR)** — `47fcacc3-969c-4fb5-b0e8-89f0a87cf1aa` (remix of `זום מצווה`, `d50d6d7d-…`).
- Editor: https://lovable.dev/projects/47fcacc3-969c-4fb5-b0e8-89f0a87cf1aa
- GitHub: connect from the Lovable editor (GitHub → Connect) to a new repo, e.g. `zoom-mitzvah-international`. This is a one-click owner action; Lovable's API cannot do it.

## Objective
Families abroad book a free consultation or buy the full course. Primary KPI: consultation_booked; secondary: checkout_started, purchase, article → CTA click-through.

## Avatar
Jewish family abroad (US/Canada/UK/Australia/South Africa — English; France/Belgium/Switzerland/Luxembourg/Monaco/Quebec/Morocco/Tunisia — French) who wants Bar Mitzvah (boys) preparation or to read from the Torah, with an Israeli rabbi who lives in Israel/Jerusalem and speaks their language. Also adults (adult Bar Mitzvah, learning to leyn).

## Must-haves
1. EN + FR only, LTR, `/en` `/fr` routes, auto-detect + switcher, hreflang/canonical/sitemap.
2. Geo pricing: Eurozone → €750 · rest → $850 · Israel → banner to the Hebrew site.
3. Benefits always visible: personal AI assistant 24/7 · 120+ guides translated EN & FR · Israeli rabbi in Jerusalem who speaks your language · suitable for learning difficulties (ADHD, dyslexia) · local-time scheduling · recorded lessons · parent portal.
4. Articles hub: featured guides, "Find your Parasha", category chips, in-article CTA; translations cached in DB; never show Hebrew articles on EN/FR pages.
5. Design: Jerusalem stone palette (limestone #F3EBDD, night blue #0F1E3A, gold #C9A24A), serif display + clean sans, real-feeling Jerusalem photography, light quality motion, prefers-reduced-motion.
6. Safety: no pushes to the Hebrew production CRM / payments from the clone; leads saved locally with a flag to wire to the CRM later; Stripe (EUR/USD) checkout added once the owner connects keys.

## Teams & gate
GM → research / marketing / script / development / production → EN & FR language leads → QA → Director (score ≥ 8 to ship; < 8 back to the owning team, max 4 rounds).


## AUDIENCE RULE (owner decision, 2026-11-04 — overrides anything else)
- We teach ONLY: (1) Bar Mitzvah preparation for BOYS, and (2) Torah learning for adult MEN (adult Bar Mitzvah, learning to read from the Torah, weekly parasha, general Torah study).
- We do NOT offer Bat Mitzvah, and we do not teach girls or women to read from the Torah. Never write "Bat Mitzvah" / « Bat Mitsva », "B'nai Mitzvah", "your child or daughter", or gender-neutral wording that implies girls are included.
- Write "your son" / « votre fils » for the child; "men" / « hommes » or "adult learners" for adults. Never market to girls; never say we refuse them either — simply describe what we offer.
