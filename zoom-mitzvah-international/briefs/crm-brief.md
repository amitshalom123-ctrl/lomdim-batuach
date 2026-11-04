# Brief — CRM customer-facing EN/FR (זום מצווה crm)

> **בעברית בקצרה:** לא משכפלים את ה-CRM (כדי לא לפצל נתונים של רבנים, תלמידים ותשלומים). מוסיפים שפות אנגלית וצרפתית רק לחלק הגלוי ללקוחות: פורטל תלמיד/הורה, הנציג האישי (AI), מיילים, ווטסאפ והודעות, ודפי תשלום. אזור הניהול והרבנים נשארים בעברית. אזורי זמן: כל משפחה רואה את שעת השיעור לפי השעון המקומי שלה. כל שינוי תוספתי בלבד — משתמשים בעברית לא מושפעים. צוותים נפרדים מאתר הנחיתה, עם בקרה ובמאי (ציון ≥ 8).

## Lovable
- Project: **זום מצווה crm** — `82b65911-b20c-4cb1-b23b-f42f0c395772` (production, published). We adapt in place; no remix (a remix would create a second database and split rabbis/students/payments).

## Scope (customer-visible only)
1. `preferred_language` (`he` | `en` | `fr`, default `he`), `country`, `timezone`, `currency` on the family/student record — nullable/defaulted, additive migration.
2. Student & parent portal UI in EN/FR (LTR when not Hebrew): schedule, Zoom links, recordings, rabbi messages, progress, payments.
3. Lesson times rendered in the family's timezone (store UTC; show "17:00 Jerusalem · 10:00 New York").
4. AI assistant (StudentAssistant) answers in the family's language.
5. All e-mails / WhatsApp / SMS templates sent to families in EN/FR by `preferred_language` (Hebrew unchanged).
6. Rabbi matching: show/filter rabbis by `languages` (data already exists: English/French speakers are registered).
7. Lead intake from the international landing: accept `language`, `country`, `timezone`, `currency`, `source=intl` when the owner enables the link.

## Out of scope
Admin dashboard and rabbi area translation; any destructive migration; changing Hebrew copy.

## Teams & gate
Separate CRM teams (`zm-crm-*`) with the same loop: GM → teams → EN/FR language leads → QA → Director (≥ 8).
