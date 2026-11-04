# Director scorecard: Round 3, CRM customer templates (2026-11-04)

## סיכום לבעלים (עמית)

- **תבניות ה-CRM אושרו. הציון הוא 8.5, ובסבב 2 הוא היה 7.6.** התבניות כוללות מייל, SMS ו-WhatsApp באנגלית ובצרפתית.
- **כל חמשת התיקונים מסבב 2 בוצעו.** בדקתי כל אחד מהם בקבצים עצמם, ולא הסתמכתי על הדיווח של הצוות:
  1. בכל SMS עם שעת שיעור מופיע עכשיו גם אזור הזמן של המשפחה.
  2. הביטויים המתורגמים בצרפתית הוסרו.
  3. המחיר כתוב לפי הכללים: €750, או $850 בארה"ב, או US$850 בשאר העולם. בצרפתית « 850 $ US ».
  4. בהודעת התשלום מופיע מה כלול במחיר, וה-WhatsApp שלה מסומן כהודעה שיווקית (MARKETING).
  5. אין קישורים בגוף הודעות WhatsApp. כל הקישורים עברו לכפתורים.
- **בטיחות:** אף הודעה לא מכילה סיסמה. קישור לסיסמה נשלח רק במייל. אין בתבניות מדיניות החזר, מספר שיעורים, הבטחות, מחיר לשיעור ניסיון או משך שמירה של הקלטות.
- **שלוש הערות ליטוש קטנות, לא חוסמות:**
  - הודעת SMS אחת באנגלית עוברת ב-1 תו את 160 התווים כשהשמות ארוכים במיוחד.
  - צריך לכתוב למפתחים במפורש שב-SMS מחליפים רווח קשיח ברווח רגיל.
  - יש רווח אחד לא נכון בצרפתית.
- **ההתקדמות במסלול ה-CRM היא 5/10.** התוכן מוכן, אבל תוכנית היישום ב-Lovable עדיין מחכה לאישור שלך, ושום קוד לא שונה. לכן אין שום סיכון לנתונים בפרודקשן.
- **מחכה לתשובה שלך:** שאלות 1–10 בקובץ הסיכום. החשובות ביותר:
  - האם שיעור הניסיון בחינם?
  - Grow או Stripe?
  - האם SMS4Free שולח לחו"ל?
  - האם יש לנו הסכמה של המשפחות לקבל הודעות WhatsApp שיווקיות?
  - האם שיחת הייעוץ בדף הנחיתה היא אותו דבר כמו שיעור הניסיון?

## Score

| ID | Deliverable | Team | R2 | Brand | Mkt | Lang | Design/Struct | Tech | Safety | **R3 overall** | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | `crm/customer-templates.en.json` + `.fr.json` + `crm/customer-templates-review.md` (v1.1.0, commit 9c32d09) | CRM Script (zm-crm-*) | 7.6 | 8 | 8.5 | 8.5 | 9 | 8 | 9.5 | **8.5** | **APPROVED** |

Weights: marketing 25%, language 20%, design/structure 20%, technical 20%, brand 10%, safety 5%. No safety failure, so no cap.

**Progress score (CRM track): 5/10** (round 2: 4/10). The EN/FR e-mail, WhatsApp and SMS copy (brief scope item 5) is now approved. Nothing else in the brief is built yet:

- additive migration
- i18n portal
- family time-zone rendering
- AI assistant language
- rabbi language filter
- intl lead intake

`crm/lovable-implementation-plan.md` is still AWAITING OWNER APPROVAL, and no CRM code has changed.

## Round-2 fixes, verified in the files

| # | Fix | Status | Evidence |
|---|---|---|---|
| 1 | Time-zone label in reminder SMS | APPLIED | 6/6 SMS that contain `{{lesson_time_family}}` also contain `{{family_timezone_label}}`, EN and FR: 24h, 1h, cancellation, trial reminder, schedule-first-lesson and notify-manual-lesson. |
| 2 | FR calques | APPLIED | The 1h preheader is « Votre lien Zoom pour rejoindre le cours. » and the payment preheader is « Votre lien de paiement sécurisé, en un clic. ». Both feedback WhatsApp messages use « Deux minutes pour nous donner votre avis… ». The swap message uses « une information : désormais… », and the recording deletion message uses « Pour information : » in email and WhatsApp. None of the banned forms remain in any customer-facing field. |
| 3 | Price format | APPLIED | EN `'€750' \| '$850' (US) \| 'US$850' (other non-euro)`. FR « 750 € » \| « 850 $ US » with U+00A0. ISO codes appear at checkout and on receipts only. This matches geo §7 and glossary row 55. |
| 4 | Value line + WhatsApp category | APPLIED | The email has the approved "everything included" line, word for word as in `landing.*.json` pricing.includes and emails consultation_follow_up. The WhatsApp message has a short version of the same line. `whatsapp_category` is set on all 20 templates: MARKETING for trial-upgrade-payment only, with an opt-in rule. |
| 5 | WhatsApp URLs → buttons, consultation mapping | APPLIED | 0/40 bodies contain a URL. 16/20 templates have a `whatsapp_button`, and every label is 25 characters or fewer. 4 templates have a null button: the 3 password templates and the trial thank-you. The 4 `consultation_*` mapping rows were added, with `needs_new_function` and owner question 9. |

## Objective checks (team validator + independent script)

| Check | Result |
|---|---|
| Team validator | PASS, 0 errors. EN max 158, FR max 156 |
| JSON parse | PASS (2/2) |
| EN/FR key parity | PASS. `templates` and `_meta` key paths are identical |
| Placeholder parity | PASS. The same set in every field, including WhatsApp buttons. Every placeholder is defined |
| No URL in WhatsApp body | PASS (0/40) |
| WhatsApp body starts/ends with a variable | PASS (0/40). Note: EN 1h starts with `⏰ {{student_first_name}}` (polish 3) |
| Password / reset link outside email | PASS. Password links appear only in the email CTA of the 3 password templates. SMS and WhatsApp only point to the email. Button is null |
| SMS GSM-7 | PASS (40/40). No extension characters, no « », ’ or U+00A0 |
| SMS ≤ 160 (team values) | PASS |
| SMS ≤ 160 (stricter values: Maximilian / Rabbi Menachem / "Wednesday, September 24" / "12:30 p.m." / "Johannesburg time", 30-char link) | 1 marginal FAIL: EN schedule-first-lesson = **161**. All other SMS are ≤ 160 (FR 1h 159, EN trial 157) |
| TZ label in time-bearing SMS | PASS (6/6, EN+FR) |
| Price format vs geo §7 | PASS |
| FR typography (email + WhatsApp) | PASS. 115 correct U+00A0, 0 missing. 1 slip: « 24 h/24 » uses a regular space (polish 2) |
| No invented facts | PASS. No refund or cancellation policy, lesson count, guarantee, trial price, retention or download claim in customer text. The value line uses only claims already approved on the landing |

## Polish (optional, up to 3)

1. **SMS robustness** *(zm-crm script + zm-crm dev)*
   **Where:** `_meta.channel_rules.sms`; EN `schedule-first-lesson.sms.text` and `notify-manual-lesson.sms.text`
   **Problem:**
   - The FR rule "espace normale dans les SMS" is written only in formatting_rules. But the SMS reuses the email's `{{lesson_time_family}}` value (« 17 h 30 » with U+00A0). One U+00A0, or the U+202F that Intl en-US puts before "PM", switches the SMS to UCS-2. That means 70 characters per segment, so a reminder costs 3 segments.
   - EN schedule-first-lesson reaches 161 characters with "Johannesburg time" (ZA is a target market).

   **Fix:**
   - Add to channel_rules.sms: "Before rendering an SMS, replace U+00A0 and U+202F with U+0020 and ’ with ' in every value, then check that the text is GSM-7." Add a validator case with a U+00A0 time.
   - Drop the parentheses in the two EN SMS, so they match the 24h, 1h and trial SMS: `…on {{lesson_date_family}} at {{lesson_time_family}} {{family_timezone_label}}. Zoom: {{zoom_link}}`. This gives 159 with the stricter values.
   - Add "Johannesburg time" / « heure de Johannesburg » and "Rabbi Menachem" to the worst-case set.

2. **FR typography and one line** *(zm-crm script + FR lead)*
   **Where:**
   - FR `trial-upgrade-payment.email.body`: « 24 h/24 »
   - FR `send-lesson-reminders.24h.email.body`: « Dix minutes avec l’enregistrement du dernier cours d’ici là, et la différence se sentira. »

   **Fix:**
   - Write « 24 h/24 » with U+00A0, as in the approved landing and email files.
   - Replace the 24h line with « Réécouter dix minutes l’enregistrement du dernier cours d’ici là peut faire toute la différence. »

3. **WhatsApp technical** *(zm-crm script + zm-crm dev)*
   **Where:** EN `send-lesson-reminders.1h.whatsapp`; every `whatsapp_button.url`
   **Problem:**
   - Only an emoji comes before the first variable, so Meta's start-with-variable check may reject the template.
   - The button URLs are the full `{{zoom_link}}`, `{{payment_url}}` and so on. But channel_rules says Meta needs a fixed domain plus a token, and the data model does not show that yet.

   **Fix:**
   - EN: `⏰ In about *1 hour*: {{student_first_name}}'s lesson with {{rabbi_name}}, at {{lesson_time_family}} ({{family_timezone_label}}). Have a great lesson!`
   - Write each button URL as a pattern, e.g. `"url": "https://<our-domain>/z/{{link_token}}"`, and define `link_token` in `_meta.placeholders` in EN and FR.

## Other notes

- **Glossary §5 vs CRM emails.** Glossary §5 says no variable may contain line breaks, "applied to e-mail too". The CRM emails deliberately carry multi-line `{{lesson_summary}}`, `{{homework}}` and `{{recordings_list}}`, and WhatsApp never does. I accept this for the CRM, because the rabbi's summary is what that email is for. Script should add a one-line CRM exception to glossary §5 so the two documents agree.
- **Brand.** The templates are warm, clear and premium. Jerusalem appears only as a time label, which is correct for transactional messages. If more brand feeling is wanted, add it to the welcome email only.
- **Nothing is sent yet.** No message goes out until the owner approves the implementation plan and answers questions 1–10.

```
HANDOFF → zm-crm-general-manager (I approved; optional polish 1–3 → zm-crm script / FR lead / zm-crm dev; owner approval of the Lovable plan is the blocker)
What I did · Verified round-2 fixes 1–5 in the files, ran the team validator (PASS) and an independent script (parity, WhatsApp, password, GSM-7, stricter SMS lengths, TZ labels, price, FR typography, claims), scored I
Open questions · Owner questions 1–10 in crm/customer-templates-review.md; owner approval of crm/lovable-implementation-plan.md
Files touched · scorecards/round-3-crm-templates.json, scorecards/round-3-crm-templates.md
```
