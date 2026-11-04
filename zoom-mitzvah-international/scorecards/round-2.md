# Director scorecard: Round 2 (2026-11-04)

## סיכום לבעלים (עמית)

- **אושרו (ציון 8 ומעלה):** כל שמונת תוצרי אתר הנחיתה. מחקר 8.7, אסטרטגיה 8.7 (בסבב 1: 7.6), מדריך מותג 8.8, כללי גאו 8.7, דף נחיתה באנגלית 8.4 (בסבב 1: 5.0), דף נחיתה בצרפתית 8.5 (בסבב 1: 5.0), מיילים וווטסאפ 8.5 (בסבב 1: 7.4), מילון מונחים 8.6 (בסבב 1: 7.7).
- **כל התיקונים מסבב 1 בוצעו בפועל.** בדקתי כל אחד בקבצים עצמם (git diff), לא רק לפי הדיווח של הצוותים. אין נסיגה בתוצרים שאושרו בסבב 1 (מחקר, מותג, גאו).
- **ההבטחה שהוסרה:** בשאלות הנפוצות כבר לא מבטיחים ללמד את המסורת של המשפחה. התשובה עכשיו: "ספרו לנו בשיחה ונגיד לכם ביושר". לכן תקרת הבטיחות הוסרה מדפי הנחיתה.
- **הסלוגן חזר:** "Learn Torah from Jerusalem — without leaving home" ובצרפתית "Apprenez la Torah depuis Jérusalem, sans quitter la maison".
- **חוזר לעיבוד:** תבניות ה-CRM (20 תבניות, ציון 7.6). הן בטוחות, ואף סיסמה לא נשלחת. אבל:
  - ב-SMS של התזכורות אין אזור זמן, כך שהמשפחה לא יודעת לפי איזה שעון השעה.
  - בצרפתית חזרו ביטויים מתורגמים שכבר נאסרו.
  - המחיר כתוב 850 $ במקום 850 $ US.
  - הודעת התשלום מציגה מחיר בלי לפרט מה כלול בו.
  - קישורי WhatsApp נמצאים בגוף ההודעה, בניגוד לכלל במילון.
- **ליטוש קטן בכל הקבצים באנגלית:** לכתוב Enroll (איות אמריקאי) במקום Enrol.
- **ציון התקדמות:** אתר הנחיתה 6/10. התוכן מוכן, אבל שום דבר עוד לא נבדק באתר עצמו ב-Lovable. מסלול ה-CRM 4/10: התוכנית ממתינה לאישור שלך, ועדיין לא שונה קוד.
- **עדיין מחכה לתשובה שלך:** שאלות 1–7 בסעיף 8 במחקר, ושאלות ה-CRM (האם שיעור הניסיון בחינם, Grow או Stripe, האם SMS4Free שולח לחו"ל).

## Scores

| ID | Deliverable | Team | R1 | Brand | Mkt | Lang | Design/Struct | Tech | Safety | **R2 overall** | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A | `research/audience-and-market.md` | Research | 8.5 | 8 | 9 | 8.5 | 9 | 8.5 | 9 | **8.7** | **APPROVED** |
| B | `marketing/strategy.md` | Marketing | 7.6 | 8.5 | 9 | 8 | 9 | 8.5 | 9 | **8.7** | **APPROVED** |
| C | `marketing/brand-guide.md` | Marketing | 8.4 | 9 | 8 | 9 | 9 | 9 | 10 | **8.8** | **APPROVED** |
| D | `marketing/geo-pricing-and-language.md` | Marketing | 8.5 | 8 | 8 | 9 | 9 | 9 | 9 | **8.7** | **APPROVED** |
| E | `content/landing.en.json` | Script (English) | 5.0 | 8.5 | 8.5 | 8 | 8.5 | 8.5 | 9 | **8.4** | **APPROVED** |
| F | `content/landing.fr.json` | Script (French) | 5.0 | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 | 9 | **8.5** | **APPROVED** |
| G | `content/emails-and-messages.en.json + .fr.json` | Script (CRM) | 7.4 | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 | 9 | **8.5** | **APPROVED** |
| H | `content/glossary.md` | Script | 7.7 | 8.5 | 8.5 | 8 | 9 | 8.5 | 10 | **8.6** | **APPROVED** |
| I | `crm/customer-templates.en.json + .fr.json + crm/customer-templates-review.md` | CRM Script (zm-crm-*) | new | 8 | 7 | 7.5 | 8.5 | 7 | 9 | **7.6** | **REWORK** |

Weights: marketing 25%, language 20%, design/structure 20%, technical 20%, brand 10%, safety 5%. Any safety failure caps the overall score at 5 (no cap applied this round).

**Progress score: 6/10.** Landing track: all eight planning and content deliverables now score ≥ 8. The plan, copy, glossary and geo rules agree on the promise, the primary CTA (free consultation), price display and claims policy. Owner questions are handled neutrally. Not yet done against the brief: nothing is verified in the Lovable build (/en /fr routes, hreflang, geo pricing matrix, articles hub with Hebrew exclusion, reduced motion, leads saved locally with no push to the Hebrew CRM). Real rabbi data, photography and the owner answers (research §8 Q1–Q7) are still missing. CRM track (deliverable I, progress 4/10): templates drafted and largely safe, but REWORK; the implementation plan still awaits owner approval and no CRM code has changed.

**Regressions:** No regression in A, C or D. One cross-file regression: the CRM templates (I) re-introduce FR calques and the '$850' / « 850 $ » format that round 1 removed from the landing/email files.

## Objective checks (python3, re-run)

| Check | Result |
|---|---|
| json_valid | PASS (6/6 files) |
| key_sets_identical | PASS. landing 322/322, emails 223/223, CRM templates identical (_meta.formatting_rules: FR has 2 extra rules, internal) |
| placeholders_identical_per_key | PASS for all three pairs (sets identical; emails rabbi_matched body {{RABBI_NAME}} 3× EN vs 2× FR, acceptable); every used placeholder is defined in _meta |
| meta_lengths | PASS. EN title 56 / desc 150; FR title 60 / desc 148; strategy §6.3: all titles ≤ 60, descriptions 146 / 152 |
| hebrew_in_ui | PASS. Only banners.hebrew_site.text (deliberate, lang=he, dir=rtl) and language_switcher.options.he |
| fr_typography | PASS. landing.fr 57 / 0 / 0; emails.fr 120 / 0 / 0; CRM FR customer-facing fields 0 issues (internal notes/trigger fields are excluded; SMS intentionally uses GSM-7 with regular spaces) |
| em_dash | PASS. EN landing has exactly 4, all in the fixed promise (allowed by glossary §0) |
| us_spelling | FAIL (minor). 'Enrol' appears 7× in landing.en (incl. {{ENROL_URL}}), 4× in emails.en, plus glossary 38b and strategy §4 |
| whatsapp_rules | PASS. emails: 0/38 start or end with a variable, URLs in buttons. CRM: 0/40 start or end with a variable, no multi-line parameters, but 28/40 put URLs in the body (convention conflict with glossary §5) |
| sms_gsm7_and_length | PASS. CRM 40/40 pure GSM-7; samples reproduce; worst-case ≤ 160 |
| password_safety | PASS. No password and no password link in any SMS or WhatsApp |
| price_display_consistency | PASS for strategy, landing, emails, glossary. FAIL for CRM templates ('$850' / « 850 $ ») |
| contrast_numbers_brand_guide | PASS (recomputed with the brief's palette: all 11 match) |
| eurozone_list | PASS (unchanged, correct) |

## A. research/audience-and-market.md (Research): 8.7 APPROVED

> All 3 polish items applied (git diff 08f80c9..HEAD). No regressions. Still APPROVED.

**Round-1 fixes, verified in the file:**

- §0 + §3 + §5.3 item 3 + §8 Q4: free consultation stated as a brief fact. APPLIED
- §1: 'yordim' removed; Luxembourg/Monaco row added. APPLIED
- §2 P3: Sydney 16:00 = 07:00–09:00 Jerusalem. APPLIED

## B. marketing/strategy.md (Marketing): 8.7 APPROVED

**Round-1 fixes, verified in the file:**

- §4: primary CTA = 'Book a free consultation' / « Réserver un appel découverte gratuit »; free consultation moved to ✅; consultation_booked is the primary KPI in §4.2. APPLIED
- §6.3 titles: 56 / 60 chars (recounted: all 9 titles ≤ 60; parasha template 43+name / 45+nom). APPLIED
- §2 FR: 'rabbins', « Les bénédictions de la montée à la Torah », « dracha »; §1.1 agreement fixed. APPLIED
- §2 L7 + §7.1 angle 7 follow geo §7; §6.4 'tutor'/'shul' rule. APPLIED
- §4.1 section → JSON key map with MVP flags. APPLIED

**Polish (optional, up to 3):**

1. **Where:** §4 CTA table 'Enrol in the full course' (also glossary row 38b and the landing/email files)  
   **Problem:** 'Enrol' is the British spelling; the brief and glossary §5 require US-neutral English.  
   **Fix:** 'Enroll in the full course'; rename {{ENROL_URL}} to {{ENROLL_URL}} in the same pass (Script).

2. **Where:** §6.3 meta description EN (146) vs content/landing.en.json meta.description (150, 'Bar & Bat Mitzvah tutoring online…')  
   **Problem:** There are two different 'official' EN meta descriptions.  
   **Fix:** Record the landing file's version in §6.3 (it uses the §6.4 'tutoring' exception on purpose), or have Script adopt the §6.3 text. Keep one.

3. **Where:** §1.1 FR « …veulent que leur enfant soit vraiment prêt pour sa Bar ou Bat Mitsva et sache lire la Torah (ou s’y préparer eux-mêmes) »  
   **Problem:** The parenthesis still attaches awkwardly.  
   **Fix:** « Pour les familles juives vivant hors d’Israël qui veulent préparer leur enfant (ou se préparer eux-mêmes) à la Bar ou Bat Mitsva et à la lecture de la Torah, … »

## C. marketing/brand-guide.md (Marketing): 8.8 APPROVED

> No regressions. Still APPROVED.

**Round-1 fixes, verified in the file:**

- Brief hex values adopted (#F3EBDD / #0F1E3A / #C9A24A), deep gold changed to #7D5A1E; all 11 contrast ratios independently recomputed and they match (e.g. gold/night 6.91, deep gold/limestone 5.29, deep gold/stone 4.37 marked large-text only). APPLIED
- Reduced-motion CSS now matches the rule (.fade exception, 150ms opacity only). APPLIED
- Wordmark minimum size, clear space and ZM monogram sizes added. APPLIED

## D. marketing/geo-pricing-and-language.md (Marketing): 8.7 APPROVED

> Eurozone list re-verified: 21 members incl. BG. No regressions. The content files now match §7. The CRM templates (I) do NOT: they still use '$850' / « 850 $ ». Still APPROVED.

**Round-1 fixes, verified in the file:**

- §7.1 'Detected location: [Country] · Change region' / « Pays détecté : [Pays] · Changer de région »; « (US) » redundancy removed. APPLIED
- decide(): geo-failed nl/de/lb → EN before the FR time-zone hint; precedence list and QA rows 21–22 added. APPLIED
- §3.1 PM/BL relabelled as non-EU euro users; QA row 23. APPLIED

## E. content/landing.en.json (Script (English)): 8.4 APPROVED

> Safety cap lifted: no unconfirmed claims remain. Each owner question (tradition, Bat Mitzvah scope, number of lessons, AI scope) is handled neutrally. Title 56, description 150, Hebrew only in banners.hebrew_site (deliberate, rtl) and the switcher.

**Round-1 fixes, verified in the file:**

- faq nusach: honest, no promise. APPLIED
- Promise 'Learn Torah from Jerusalem — without leaving home.' in hero, closing_line, footer, og:title; eyebrow fixed. APPLIED
- includes[2] / reassurance[2] / featured_guides. APPLIED
- {{PRICE}} spec per geo §7; currency_note, change_region, region_chooser, israel_card, banners.*. APPLIED
- assistant, learning_differently, adults sections; ICU plural. APPLIED

**Polish (optional, up to 3):**

1. **Where:** how_it_works.cta_secondary.label, pricing.cta_secondary.label, final_cta.cta_secondary.label 'Enrol in the full course'; _meta {{ENROL_URL}}  
   **Problem:** British spelling on a visible button in a US-neutral file (glossary §5: US spelling).  
   **Fix:** 'Enroll in the full course'; {{ENROLL_URL}}.

2. **Where:** hero.alternatives[2] 'Learn Torah in Israel. Without leaving home.'  
   **Problem:** A variant that contradicts itself, kept 'for A/B only'. Variants in a production file get shipped sooner or later.  
   **Fix:** Delete the object (also in FR), or replace it with 'Your child's Bar Mitzvah, taught from Jerusalem, in English.' (strategy §1.3).

3. **Where:** why_jerusalem.paragraphs[1] 'The Hebrew your child chants from the Torah is the Hebrew their rabbi hears at the market…'  
   **Problem:** Biblical and modern Hebrew are not the same language register; a knowledgeable parent will notice.  
   **Fix:** 'The words your child chants from the Torah live on in their rabbi's everyday Hebrew: at the market, on the bus, around the Shabbat table.'

## F. content/landing.fr.json (Script (French)): 8.5 APPROVED

> Typography re-check: 57 correct non-breaking spaces, 0 regular spaces, 0 missing. The only flagged item is the Hebrew banner text (Hebrew punctuation, correctly without U+00A0). The French reads natively; the safety cap is lifted.

**Round-1 fixes, verified in the file:**

- faq nusach neutral (no promise, marocaine/tunisienne only as examples to ask about). APPLIED
- « Apprenez la Torah depuis Jérusalem, sans quitter la maison. » in all 4 places. APPLIED
- dracha ×3, « compatibles avec l’emploi du temps », « corvée », « par ex. ». APPLIED
- includes[2], reassurance « votre prix définitif est confirmé avant le paiement », « Guides à la une ». APPLIED
- {{PRICE}} « 850 $ US »; geo keys with U+00A0. APPLIED

**Polish (optional, up to 3):**

1. **Where:** faq.items[synagogue_customs].answer « …comment votre rabbin peut préparer votre enfant à exactement cela. »  
   **Problem:** « à exactement cela » is a calque of 'for exactly that'.  
   **Fix:** « Nous vous dirons franchement comment le rabbin peut préparer votre enfant à ce programme précis. »

2. **Where:** why_jerusalem.paragraphs[1] « …celui que son rabbin entend au marché… font partie du quotidien de son rabbin. »  
   **Problem:** « son rabbin » is repeated in two consecutive sentences, which reads heavy.  
   **Fix:** « Nos rabbins vivent et enseignent en Israël : bien des lieux cités dans la Torah font partie de leur quotidien. L’hébreu que votre enfant lira dans le Sefer Torah, c’est celui que son rabbin entend au marché, dans le bus, autour de la table du Chabbat. »

3. **Where:** hero.alternatives[2] « Étudier la Torah en Israël. Sans quitter la maison. »  
   **Problem:** Same as EN: a known-bad variant kept in the file.  
   **Fix:** Remove it, or use « La Bar Mitsva de votre enfant, préparée depuis Jérusalem, en français. » (strategy §1.3).

## G. content/emails-and-messages.en.json + .fr.json (Script (CRM)): 8.5 APPROVED

> Keys 223/223 and placeholder sets identical; every placeholder used is defined; FR typography 120/0/0.

**Round-1 fixes, verified in the file:**

- 0/19 WhatsApp bodies start or end with a variable; URLs in whatsapp_button (EN+FR). APPLIED
- {{HOMEWORK}} → one-line {{HOMEWORK_SUMMARY}} / {{LESSON_SUMMARY_LINE}}; {{PLAN_SUMMARY}} one-line. APPLIED
- consultation_booked, consultation_reminder_24h, consultation_no_show, consultation_follow_up (EN+FR). APPLIED
- {{AMOUNT}} with ISO code; « 850 $ US (USD) ». APPLIED
- FR calques fixed (« pour rejoindre le cours », « très fiers de… », « Deux minutes pour nous donner votre avis… », « d’un travail régulier, sur … cours », « Merci, … ! »). APPLIED

**Polish (optional, up to 3):**

1. **Where:** templates.consultation_follow_up (cta_label, body 'you can enrol', whatsapp 'enrol', whatsapp_button.label 'Enrol')  
   **Problem:** British spelling.  
   **Fix:** 'Enroll in the full course' / 'you can enroll' / 'Enroll'.

2. **Where:** templates.consultation_follow_up.whatsapp + button → {{CHECKOUT_URL}}  
   **Problem:** Under Meta's rules a message that pushes a purchase is MARKETING category, not UTILITY. A wrong category can get the template rejected or re-categorized and billed differently, and it needs marketing opt-in.  
   **Fix:** Add `"whatsapp_category": "MARKETING"` on this template (UTILITY on the others) and send only with marketing opt-in. Otherwise drop the button and end with 'Your plan and the enrollment link are in your email.'

3. **Where:** templates.lesson_scheduled.whatsapp 'Need another time? You can change it in your parent portal.'  
   **Problem:** Rescheduling in the portal is not confirmed; the CRM team dropped reschedule_url for exactly that reason.  
   **Fix:** 'Need another time? Just reply here.' / « Besoin d’un autre horaire ? Répondez simplement ici. »

## H. content/glossary.md (Script): 8.6 APPROVED

> New §0 (fixed promise) and §4 (claims blocked by owner questions) are strong additions. With them the glossary is a real control document, not just a word list.

**Round-1 fixes, verified in the file:**

- Row 17 « discours (dracha) »; « drasha » in FR avoid list. APPLIED
- Row 55 aligned with geo §7 incl. ISO codes on receipts. APPLIED
- tutor/shul/professeur de Bar Mitsva exceptions. APPLIED
- Rows 56–61 (d'var Torah, B'nai Mitzvah, Kotel, Talmud Torah, adult Bar/Bat Mitzvah, rabbin/Rav/votre rav). APPLIED
- '5:30 p.m.' kept and Marketing aligned (strategy §3.1/§7.1, brand guide §8, geo §10 all now 'p.m.'). APPLIED

**Polish (optional, up to 3):**

1. **Where:** Row 38b 'Enrol in the full course (secondary CTA)'  
   **Problem:** This contradicts the glossary's own rule in §5 ('US spelling').  
   **Fix:** 'Enroll in the full course'. Add 'enrol, enrolment' to the EN avoid list → 'enroll, enrollment'.

2. **Where:** §5 Messaging templates: 'No variable may contain line breaks … (WhatsApp rule; applied to e-mail too for consistency)'  
   **Problem:** This is over-broad. The CRM templates (I) correctly send the rabbi's multi-line summary by email, which the glossary now forbids, so the two files contradict each other.  
   **Fix:** 'No WhatsApp or SMS variable may contain line breaks. Email may carry multi-line, rabbi-written blocks inside optional sections (CRM {{#homework}} etc.).'

3. **Where:** Row 55 price  
   **Problem:** The rule doesn't say it binds the CRM templates, which still use '$850' / « 850 $ ».  
   **Fix:** Append 'Applies to crm/customer-templates.* as well ({{price}})'.

## I. crm/customer-templates.en.json + .fr.json + crm/customer-templates-review.md (CRM Script (zm-crm-*)): 7.6 REWORK

> Scored with the CRM director role. PASS: 20 templates, one per edge-function key; JSON valid; template keys and per-key placeholder sets identical EN/FR (the only key differences are 2 extra FR formatting_rules in _meta); every placeholder defined. PASSWORD SAFETY: no password in any channel; setup/reset links are email-only; SMS/WA only point to the email; reset-user-password guards against sending a temporary password. DUAL TIME: emails show family time and label, plus 'Jerusalem time' via {{#abroad}} with a next-day weekday; the 1-hour email intentionally shows family time only (fine). SMS lacks labels (fix 1). WHATSAPP: 0/40 bodies start or end with a variable; no multi-line parameters; no sections. SMS: all 40 texts are pure GSM-7 (checked char by char); all chars_sample values reproduce within ±3; worst-case realistic values stay ≤ 160. Honest about open questions (trial price, retention, Grow/Stripe). Nothing invented.

**Required fixes (exact replacements):**

1. **Where:** sms.text in send-lesson-reminders.24h, send-lesson-reminders.1h, send-lesson-cancellation, send-trial-reminder (EN+FR) *(owner: zm-crm script)*  
   **Problem:** DUAL-TIME: these SMS give a date and time with no time-zone label. For a family abroad whose CRM history is in Jerusalem time, '5:30 p.m.' is ambiguous. Only schedule-first-lesson and notify-manual-lesson carry the label.  
   **Fix:** Add the label. Worst-case lengths measured (Alexandra / Rabbi Shmuel / 'Wednesday, September 24' / 'Los Angeles time' / 30-char link): EN 24h "Zoom Mitzvah: {{student_first_name}}'s lesson with {{rabbi_name}} is on {{lesson_date_family}}, {{lesson_time_family}} {{family_timezone_label}}. Zoom: {{zoom_link}}" (147). EN 1h "…starts in about 1 hour, at {{lesson_time_family}} {{family_timezone_label}}. Join: {{zoom_link}}" (143). EN trial (153). EN cancellation (139). FR 24h « Rappel Zoom Mitzvah : cours de {{student_first_name}} avec {{rabbi_name}} le {{lesson_date_family}} à {{lesson_time_family}} ({{family_timezone_label}}). Zoom : {{zoom_link}} » (150). FR 1h (144), FR essai (151), FR annulation (139). All fit in 1 GSM-7 segment.

2. **Where:** FR: send-lesson-reminders.1h.email.preheader « Votre lien Zoom est à l’intérieur. »; trial-upgrade-payment.email.preheader « Votre lien de paiement sécurisé est à l’intérieur. »; trial-feedback.whatsapp + send-parent-feedback-emails.whatsapp « Deux minutes de votre avis nous aideraient beaucoup »; swap-rabbi-same-schedule.whatsapp « petite nouvelle : »; check-recording-deletion « Petite information : » *(owner: zm-crm script + FR lead)*  
   **Problem:** These are the exact calques the glossary (§3 FR, last row) and round 1 banned, re-introduced in the CRM file.  
   **Fix:** « Votre lien Zoom pour rejoindre le cours. » ; « Votre lien de paiement sécurisé, en un clic. » ; « Deux minutes pour nous donner votre avis nous aideraient beaucoup : … » ; « Bonjour …, une information : désormais… » ; « Pour information : certains enregistrements… »

3. **Where:** _meta.placeholders.{{price}}.example ('€750 / $850' / FR '750 € / 850 $') and _meta.formatting_rules 'Prices: '€750' / '$850'' / « Prix : 750 € / 850 $ » *(owner: zm-crm script)*  
   **Problem:** This contradicts the canonical geo §7 and glossary row 55: US$850 outside the US, « 850 $ US » in FR. A Quebec or Swiss family reading « 850 $ » in a payment message sees Canadian dollars or an ambiguous currency.  
   **Fix:** EN: "'€750' | '$850' (US) | 'US$850' (other non-euro countries)". FR: « 750 € » | « 850 $ US ». Same wording in formatting_rules.

4. **Where:** templates.trial-upgrade-payment (email.body 'The complete course: {{price}}'; whatsapp) *(owner: zm-crm script + marketing)*  
   **Problem:** MARKETING: this is the CRM's single conversion message, yet it shows a bare price with no value. It is also an upsell, which Meta classes as MARKETING, while _meta declares every WhatsApp template UTILITY.  
   **Fix:** Body after the price line, EN: 'Everything is included: private, live one-on-one lessons with your Israeli rabbi, every lesson recorded, the parent portal, your personal AI assistant 24/7 and our 120+ guides in English and French. Your final price is confirmed before you pay.' FR: « Tout est compris : des cours particuliers en direct avec votre rabbin israélien, chaque cours enregistré, l’espace parents, votre assistant IA personnel 24 h/24 et nos plus de 120 guides en français et en anglais. Votre prix définitif est confirmé avant le paiement. » Add "whatsapp_category": "MARKETING" to this template (marketing opt-in required) and UTILITY to the others.

5. **Where:** templates.*.whatsapp with {{zoom_link}} / {{portal_url}} / {{payment_url}} / {{feedback_url}} / {{recordings_url}} in the body (14 of 20, EN+FR); _meta.generic_template_mapping *(owner: zm-crm script)*  
   **Problem:** CONSISTENCY: glossary §5 (source of truth) and the generic templates (G) put every WhatsApp URL in a CTA-URL button. The CRM file puts URLs in the body, so the project now has two WhatsApp conventions. The mapping also still lists the round-1 set and omits G's four consultation_* templates, which are the primary-KPI flow.  
   **Fix:** Add `whatsapp_button: {label, url}` per template, as in content/emails-and-messages.*.json, and move the URL there (body ends with text). Add mapping rows for consultation_booked, consultation_reminder_24h, consultation_no_show and consultation_follow_up. Either map them to send-trial-reminder / check-trial-completion / trial-upgrade-payment, or flag 'needs a new function' and add that to the owner questions.

## Routing

- **zm-crm script (+ FR lead, marketing for fix 4):** rework I, fixes 1–5. Resubmit for round 3.
- **Script (landing):** optional polish on E, F, G and H. Do the 'Enroll' spelling in one pass across the landing, email and glossary files (strategy §4 is Marketing's).
- **Development / QA (next):** verify the Lovable build against the brief's must-haves 1, 2, 4, 5 and 6: the 23-row geo QA matrix, hreflang, Hebrew-article exclusion, reduced motion, and no pushes to the Hebrew CRM.
- **Owner (Amit):** research §8 Q1–Q7; CRM open questions (trial price, portal access for trials, recording retention, rabbi summary language, SMS4Free abroad, Grow vs Stripe).

```
HANDOFF → zm-landing-general-manager (landing: 8/8 approved, to build + QA) · zm-crm-general-manager (I → zm-crm script, 5 fixes)
What I did · Verified every round-1 fix in the files (git diff 08f80c9..HEAD), re-ran JSON/key/placeholder/length/Hebrew/FR-typography/WhatsApp/SMS-GSM-7/password/price/contrast checks, scored B, E, F, G, H and the new I, and re-checked A, C, D for regressions
Open questions · research §8 Q1–Q7; CRM: trial price, Grow vs Stripe, SMS4Free abroad, recording retention, rabbi summary language, mapping of the landing's free consultation to CRM trial functions
Files touched · scorecards/round-2.json, scorecards/round-2.md
```
