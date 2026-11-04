# Director scorecard: Landing track, Round 1 (2026-11-04)

## סיכום לבעלים (עמית)

- **אושרו (≥ 8):** מחקר קהל ושוק (8.5), מדריך מותג (8.4), כללי גאו, מחיר ושפה (8.5). רשימת גוש האירו נכונה: 21 מדינות כולל בולגריה מ-1.1.2026.
- **חוזרים לעיבוד:** אסטרטגיה שיווקית (7.6), דף נחיתה באנגלית (5.0), דף נחיתה בצרפתית (5.0), מיילים וווטסאפ (7.4), מילון מונחים (7.7).
- **למה דפי הנחיתה קיבלו 5:** בשאלות הנפוצות כתוב "כן, נתאים לכם רב שילמד את המסורת שלכם", ובצרפתית אפילו "מרוקאית, תוניסאית". זו הבטחה שעדיין לא אושרה על ידך (שאלה פתוחה במחקר), ולכן חלה תקרת בטיחות של 5. בלי התקרה הציון היה 7.2.
- **עוד בעיות מרכזיות:** הסלוגן שונה מ"ללמוד תורה מירושלים" ל"ללמוד תורה בישראל, בלי לצאת מהבית", משפט שסותר את עצמו. ה-CTA הראשי באסטרטגיה ("Get started") לא תואם את ה-KPI בבריף (שיחת ייעוץ חינם). תצוגת הדולר לא אחידה בין המסמכים (US$850 מול 850 $). 11 מתוך 15 תבניות הווטסאפ ייפסלו אצל Meta כי הן מסתיימות במשתנה.
- **הצרפתית:** הטיפוגרפיה מושלמת (רווחים בלתי שבירים בכל המקומות) והפנייה בגוף שני רבים עקבית. נשארו כמה ביטויים שנשמעים מתורגמים, ו-drasha צריך להיכתב dracha.
- **ציון התקדמות המסלול:** 5/10. התכנון טוב, אבל שום דבר עוד לא נבדק באתר עצמו ב-Lovable.
- **מחכה לתשובה שלך:** אילו מסורות קריאה הרבנים מלמדים, האם בנות קוראות בתורה, כמה שיעורים כולל הקורס, ומה מדיניות ההחזרים.

## Scores

| ID | Deliverable | Team | Brand | Mkt | Lang | Design/Struct | Tech | Safety | Weighted | Overall | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A | `research/audience-and-market.md` | Research | 8 | 9 | 8 | 9 | 8 | 9 | 8.5 | **8.5** | **APPROVED** |
| B | `marketing/strategy.md` | Marketing | 8 | 7 | 8 | 8 | 7 | 9 | 7.6 | **7.6** | **REWORK** |
| C | `marketing/brand-guide.md` | Marketing | 9 | 8 | 9 | 8 | 8 | 10 | 8.4 | **8.4** | **APPROVED** |
| D | `marketing/geo-pricing-and-language.md` | Marketing | 8 | 8 | 8 | 9 | 9 | 9 | 8.5 | **8.5** | **APPROVED** |
| E | `content/landing.en.json` | Script (English) | 6 | 7 | 8 | 7 | 8 | 4 | 7.2 | **5.0** (safety cap) | **REWORK** |
| F | `content/landing.fr.json` | Script (French) | 6 | 7 | 8 | 7 | 8 | 4 | 7.2 | **5.0** (safety cap) | **REWORK** |
| G | `content/emails-and-messages.en.json + .fr.json` | Script (CRM) | 8 | 7 | 8 | 8 | 6 | 9 | 7.4 | **7.4** | **REWORK** |
| H | `content/glossary.md` | Script | 8 | 7 | 7 | 9 | 7 | 10 | 7.7 | **7.7** | **REWORK** |

Weights: marketing 25%, language 20%, design/structure 20%, technical 20%, brand 10%, safety 5%. Any safety failure caps the overall score at 5.

**Progress score: 5/10.** Planning is strong. Research (8.5), brand guide (8.4) and geo rules (8.5) are approved and grounded in honest sources. The customer-facing copy is fluent, the FR typography is impeccable, and keys and placeholders are identical. The track is not ready to ship. (1) EN and FR landing copy carry an unconfirmed promise about teaching each family's tradition (safety cap). (2) The core promise drifted from 'from Jerusalem' to the contradictory 'in Israel … without leaving home'. (3) Strategy, copy, glossary and geo rules disagree on the primary CTA, the USD display and FR 'drasha/dracha'. (4) WhatsApp templates would be rejected by Meta. (5) Nothing is verified in the Lovable build yet: /en /fr routes, hreflang, geo pricing, articles hub and reduced-motion are untested against brief must-haves 1, 2, 4 and 5. Owner blockers: research §8 Q1–Q7, above all the traditions taught, the Bat Mitzvah scope, the number of lessons and the refund policy.

## Objective checks (python3)

| Check | Result |
|---|---|
| json_valid | PASS (4/4 files) |
| key_sets_identical | PASS (landing 271/271 leaf keys; emails 150/150) |
| placeholders_identical_per_key | PASS (same placeholder set per key; emails rabbi_matched body uses {{RABBI_NAME}} 3× EN vs 2× FR, same set, acceptable) |
| meta_lengths | PASS. EN title 55, desc 149; FR title 59, desc 148. FAIL in strategy §6.3 proposals (67 / 70) |
| hebrew_in_ui | PASS. Only language_switcher.options.he = 'עברית' (deliberate) |
| fr_typography | PASS. landing.fr 51 NBSP-correct / 0 regular spaces / 0 missing; emails.fr 111 / 0 / 0; curly apostrophes in all FR customer strings; '24 h/24', '22 h' |
| whatsapp_template_rules | FAIL. 11/15 WA bodies end with a variable (EN and FR); {{HOMEWORK}} multi-line parameter |
| price_display_consistency | FAIL. Geo doc §7 says US$850 / « 850 $ US »; landing _meta, emails {{AMOUNT}} and glossary row 55 say $850 / « 850 $ » |
| contrast_numbers_brand_guide | PASS (independently recomputed; all 11 ratios match) |
| eurozone_list | PASS (21 members incl. BG from 2026-01-01; euro users and CFP exceptions correct) |

## A. research/audience-and-market.md (Research): 8.5 APPROVED

**Polish suggestions (optional):**

1. **Where:** §0 line 16 / §3 'Is $850 worth it?' / §5.3 item 3 ('free intro call ... not in the facts given')  
   **Problem:** The landing brief's Objective says families 'book a free consultation'. The research treats the free consultation as unconfirmed, and that error carried into the strategy's CTA design.  
   **Fix:** State in §0 that the free consultation is a brief fact. In §5.3 item 3, replace the sentence with: 'The brief confirms a free consultation. Make it the primary CTA; a free trial *lesson* is still unconfirmed.'

2. **Where:** §1 market table row 'Israeli expats abroad ("yordim" families)'  
   **Problem:** 'Yordim' is a pejorative term. The table also lacks Luxembourg and Monaco, although the brief lists both as French-speaking markets.  
   **Fix:** Rename the row to 'Israeli expats abroad'. Add a row: 'Luxembourg / Monaco | FR | Small, francophone, euro | FR language, €750 price.'

3. **Where:** §2 P3: 'after-school in Sydney is mid-morning in Jerusalem'  
   **Problem:** Factually off. 16:00 in Sydney is 07:00–09:00 in Jerusalem, depending on DST.  
   **Fix:** Replace with: 'after-school in Sydney (16:00) is early morning in Jerusalem (about 07:00–09:00, depending on DST), so rabbis must offer early slots.'

## B. marketing/strategy.md (Marketing): 7.6 REWORK

**Required fixes:**

1. **Where:** §4 Conversion model: 'Primary: "Get started" / « Commencer »' + §1.4 '🔶 Pending … free intro call' + Measurement events list  
   **Problem:** This contradicts the brief, where the primary KPI is consultation_booked and the free consultation is a stated fact. The content files already use 'Book a free consultation', so strategy and copy disagree on the main CTA, and the KPI event is not tracked.  
   **Fix:** Set Primary = 'Book a free consultation' / « Réserver un appel découverte gratuit » (short form « Appel gratuit »). Keep 'Ask our assistant' as the secondary CTA. Move 'free consultation' from 🔶 to ✅ in §1.4. Add `consultation_booked` as the first event in Measurement and name it the primary KPI.

2. **Where:** §6.3 Titles: 'Bar Mitzvah Lessons Online with a Rabbi in Jerusalem | Zoom Mitzvah' (67 chars) / « Préparation Bar Mitsva en ligne avec un rav à Jérusalem | Zoom Mitzvah » (70 chars)  
   **Problem:** Both exceed the 60-character title limit. The FR title also uses 'rav' where research §6.2 says SEO copy should use 'rabbin'.  
   **Fix:** EN: 'Online Bar Mitzvah Lessons from Jerusalem | Zoom Mitzvah' (56). FR: « Cours de Bar Mitsva en ligne depuis Jérusalem | Zoom Mitzvah » (60).

3. **Where:** §2 Messaging hierarchy FR column: « rabbanim israéliens francophones », « Bénédictions de la montée », « La dracha »; §1.1 FR « que leur enfant (ou eux-mêmes) soit vraiment prêt »  
   **Problem:** 'Rabbanim' is an insider Hebrew plural, not public FR copy (the glossary says 'rabbin'). « Bénédictions de la montée » is cut off. The §1.1 agreement is broken. 'dracha' differs from the glossary's 'drasha', and one of the two must win.  
   **Fix:** Use « des rabbins israéliens francophones », « Les bénédictions de la montée à la Torah », and §1.1: « …qui veulent que leur enfant soit vraiment prêt pour sa Bar ou Bat Mitsva (ou s’y préparer eux-mêmes)… ». Keep « dracha » and tell Script to update the glossary (see H).

4. **Where:** §2 level 7 'One complete course: $850 / €750' and §7.1 angle 7 '…One course, $850.'; §6.1 'Online tutoring' cluster vs glossary ban on 'tutor'  
   **Problem:** (a) The USD display contradicts geo doc §7: outside the US it should read 'US$850', and in FR « 850 $ US ». (b) The #1 money keyword is 'bar mitzvah tutor online', but the glossary bans 'tutor', so the landing meta never targets it.  
   **Fix:** (a) Write '$850 (US) / US$850 elsewhere' and point to geo §7. (b) Add a rule to §6: "'tutor' is allowed in meta descriptions, ad keywords and one comparison guide; never in brand headlines". Ask Script to add the same exception to the glossary.

5. **Where:** §4 section table (16 sections) vs content/landing.*.json (11 sections)  
   **Problem:** Strategy sections 3 (empathy), 7 (Jerusalem emotion), 8 (AI assistant spotlight + 'Try it now'), 12 (learning differently) and 13 (Adults + 'Learning for myself' CTA) have no keys in the copy files. The plan never reached implementation.  
   **Fix:** Add a 'Section → JSON key' mapping column to the §4 table, mark which sections are MVP (at least 8 AI assistant, 12 learning differently and 13 Adults), and hand the list to Script.

## C. marketing/brand-guide.md (Marketing): 8.4 APPROVED

**Polish suggestions (optional):**

1. **Where:** §2 colour tokens --limestone #F3ECE0, --night #14223A, --gold #C29A4B  
   **Problem:** The brief (must-have 5) fixes limestone #F3EBDD, night blue #0F1E3A and gold #C9A24A. The guide silently uses different hex values.  
   **Fix:** Use the brief's hex values, or add a line 'Deviation from brief: … because …' and get the owner's sign-off. With the brief values, gold on night is 6.91:1 (AA) and gold on limestone is 2.03:1 (decoration only). Update the contrast table either way.

2. **Where:** §6 reduced-motion CSS block vs rule 'Only instant or ≤150ms opacity fades remain'  
   **Problem:** The CSS forces every transition to 0.01ms, which contradicts the stated rule. Developers will implement the CSS.  
   **Fix:** Remove the conflict: either keep the CSS and change the rule to 'all motion becomes instant', or exempt `.fade` with `transition: opacity 150ms`.

3. **Where:** §1.3 Wordmark  
   **Problem:** No minimum size, clear-space or favicon/social-avatar guidance.  
   **Fix:** Add minimum width (e.g. 120px), clear space (= cap height) and a square monogram for favicon/WhatsApp/social avatars.

## D. marketing/geo-pricing-and-language.md (Marketing): 8.5 APPROVED

> Eurozone list verified correct: 21 members as of 1 Jan 2026 including BG; MC/AD/SM/VA/ME/XK, the euro-using DOM, PM, BL, MF and AX are correctly EUR; CH/LI/GB/CA/MA/TN and the CFP-franc territories NC/PF/WF are correctly USD; Israel → Hebrew-site card. This doc is the canonical source. The content files do NOT match it: they use '$850' / « 850 $ » everywhere (landing _meta {{PRICE}}, emails {{AMOUNT}}, glossary row 55), while §7 requires 'US$850' outside the US, « 850 $ US » in FR, and ISO codes on receipts. None of the §7.1 currency notes, the 'Change region' chooser, the §8 Israel card or the §9 language-suggestion banner exist as keys in landing.*.json. These are owned by Script (see E, F, G, H).

**Polish suggestions (optional):**

1. **Where:** §7.1 'Not in [Country]? Change region' / « Vous n'êtes pas en [Pays] ? »  
   **Problem:** The FR preposition is wrong for most countries (au Canada, aux États-Unis, au Maroc). EN needs an article ('the United States', 'the UK').  
   **Fix:** EN: 'Detected location: [Country] · Change region'. FR: « Pays détecté : [Pays] · Changer de région » (no preposition needed). Also « Prix en dollars américains (US). » → « Prix en dollars américains. »

2. **Where:** §5/§6 decide(): `} else lang = FR_TZ.has(timeZone) ? 'fr' : 'en';`  
   **Problem:** When geo fails, a Dutch-speaking visitor in Europe/Brussels (or a German speaker in Europe/Luxembourg) gets FR. That breaks the BE+nl and LU+de/lb → EN rule in §4.  
   **Fix:** Before the FR_TZ line, add `else if (/^(nl|de|lb)/.test(primary)) lang = 'en';`, and add QA row 21: geo fails · nl-BE · Europe/Brussels → EN · €750.

3. **Where:** §3.1 'EU territories reported separately: … PM … BL …'  
   **Problem:** Saint-Pierre-et-Miquelon and Saint-Barthélemy use the euro but are OCTs, not EU territory. The price result is correct; only the label is wrong.  
   **Fix:** Split the list: 'EU outermost regions: GP, MQ, GF, RE, YT, MF; Åland AX' and 'French collectivities using the euro (not EU): PM, BL'.

## E. content/landing.en.json (Script (English)): 5.0 REWORK

**Required fixes:**

1. **Where:** faq.items[id=nusach].question/answer: 'Yes. … we'll match you with a rabbi who can teach it the way your family and community do it.'  
   **Problem:** SAFETY: this is an unconfirmed promise. Which traditions the rabbis teach is still an open owner question (research §8 Q2), and strategy §1.4 marks it 'pending'. A Moroccan or Yemenite family could pay on the strength of this line. It triggers the safety cap.  
   **Fix:** question: 'Can you teach our family's tradition (Sephardi, Ashkenazi or other)?' answer: 'The melodies of the Torah reading and the Haftarah, the pronunciation and the wording of the blessings vary between communities. Tell us your family's tradition during the free consultation, and we'll tell you honestly which of our rabbis can teach it.'

2. **Where:** hero.headline 'Learn Torah in Israel. Without leaving home.' (also hero.headline_emphasis, why_jerusalem.closing_line, footer.tagline, meta.og.title)  
   **Problem:** BRAND: the brief, README and strategy promise 'Learn Torah from Jerusalem, without leaving home'. 'Learn Torah in Israel … without leaving home' contradicts itself and drops Jerusalem, the main emotional pillar. The nav also says 'Why Jerusalem' while that section says 'Israel'.  
   **Fix:** hero.headline: 'Learn Torah from Jerusalem, without leaving home.'; headline_emphasis: 'from Jerusalem'; why_jerusalem.closing_line, footer.tagline and meta.og.title use the same line; why_jerusalem.eyebrow: 'Why learn with a rabbi from Jerusalem'.

3. **Where:** pricing.includes[2] 'Torah reading with trope, aliyah blessings, Haftarah and maftir'; pricing.reassurance[2] 'No hidden fees: the price you see is the price you pay'; articles.popular_guides.label 'Popular guides'  
   **Problem:** Three soft claims are unsupported. (1) The 'Bar & Bat' course promises Torah reading and maftir to every girl, although glossary §4 says not to state this and research §8 Q1 is open. (2) Geo doc §3.4 says checkout may re-price by billing country and VAT is unresolved. (3) 'Popular' implies usage data we don't have.  
   **Fix:** (1) 'Torah reading with trope, the blessings, Haftarah and maftir, matched to what your child will do on the day'. (2) 'No hidden fees. Your final price is confirmed before you pay.' (3) 'Featured guides'.

4. **Where:** _meta.placeholders.{{PRICE}} '€750 (Eurozone) or $850 (everyone else)' + missing keys  
   **Problem:** Inconsistent with geo doc §7, which requires US$850 outside the US. The geo UI strings (§7.1, §8, §9) are also missing, so developers will hard-code them.  
   **Fix:** Update the {{PRICE}} description to '€750 | $850 (US) | US$850 (other non-euro countries)'. Add keys to both files: pricing.currency_note.{eur,usd_us,usd_other}, pricing.change_region, pricing.region_chooser.{eurozone,other,israel}, pricing.israel_card, banners.language_suggestion, banners.hebrew_site (Hebrew text allowed, rtl), using the exact strings in geo §7.1–§9.

5. **Where:** Missing sections vs strategy §4 (8 AI assistant, 12 learning differently, 13 Adults); articles.find_parasha.results_count '{{COUNT}} results'  
   **Problem:** The AI assistant and adults appear only as one card or one FAQ. There is no secondary 'Ask our assistant' CTA and no 'Learning for myself' path for adults (avatar P4). Also '1 results' is a plural bug.  
   **Fix:** Add `assistant` {eyebrow, headline 'Questions at 10 p.m.? Ask your assistant.', text, cta 'Ask our assistant now'}, `adults` {headline 'Adults: it's never too late.', text, cta 'Learning for myself'} and `learning_differently` {headline, text, link 'Read the parents' guide'}. Change results_count to ICU: '{COUNT, plural, one {# result} other {# results}}'.

## F. content/landing.fr.json (Script (French)): 5.0 REWORK

> Typography check passed: 51 non-breaking spaces before : ; ? ! » and inside « », 0 regular spaces, curly apostrophes throughout, « 24 h/24 », « 22 h ». Vouvoiement is consistent and the terms are correct (Bar Mitsva, Paracha, Haftara, Téfilines, Talit, Chabbat, Béréchit, hazan). The language is close to native; the score is capped by the nusach promise, not by the French.

**Required fixes:**

1. **Where:** faq.items[id=nusach].answer « …y compris une tradition familiale particulière (marocaine, tunisienne ou autre) : nous vous proposerons un rabbin capable de l’enseigner telle qu’on la pratique dans votre famille et votre communauté. »  
   **Problem:** SAFETY: this is an even stronger unconfirmed promise than EN. It names Moroccan and Tunisian traditions, although research §8 Q2 is open. It triggers the safety cap.  
   **Fix:** question : « Pouvez-vous enseigner la tradition de notre famille ? » ; answer : « Les mélodies de la lecture de la Torah et de la Haftara, la prononciation et le texte des bénédictions varient d’une communauté à l’autre. Indiquez-nous la tradition de votre famille (marocaine, tunisienne, ashkénaze ou autre) lors de l’appel découverte : nous vous dirons franchement lequel de nos rabbins peut l’enseigner. »

2. **Where:** hero.headline « Étudier la Torah en Israël. Sans quitter la maison. » (+ hero.headline_emphasis, why_jerusalem.closing_line, footer.tagline, meta.og.title)  
   **Problem:** This is a calque of the flawed EN line. It contradicts itself, drops Jerusalem, and differs from the official FR promise in the README and strategy §1.3.  
   **Fix:** « Apprenez la Torah depuis Jérusalem, sans quitter la maison. » ; headline_emphasis « depuis Jérusalem » ; same line for closing_line, footer.tagline and og.title ; why_jerusalem.eyebrow « Pourquoi un rabbin de Jérusalem ».

3. **Where:** curriculum.cards[drasha].title « Le discours (drasha) », articles.categories.speech, pricing.includes[4]; hero.subheadline « à des horaires qui s’accordent avec la semaine de votre famille »; why_jerusalem.paragraphs[2] « Le cours n’est plus un devoir de plus. »; why_jerusalem.paragraphs[1] « font partie de son quotidien »; find_parasha.search_placeholder « ex. Béréchit »  
   **Problem:** Several spots read as translation. 'drasha' is English transliteration (French writes 'dracha', like Paracha and Chabbat). 'qui s’accordent avec la semaine' is a calque of 'fit your week'. 'devoir de plus' repeats 'plus' clumsily. The 'son' is ambiguous (child or rabbi?). « ex. » should be « par ex. ».  
   **Fix:** « Le discours (dracha) » everywhere ; « à des horaires compatibles avec l’emploi du temps de toute la famille » ; « Le cours n’est plus une corvée. » ; « …font partie du quotidien de son rabbin. » ; « Rechercher une Paracha, par ex. Béréchit ».

4. **Where:** pricing.includes[2]; pricing.reassurance[2] « Pas de frais cachés : le prix affiché est le prix payé »; articles.popular_guides.label « Guides les plus lus »  
   **Problem:** These are the same unsupported claims as in EN. « les plus lus » asserts readership data.  
   **Fix:** « La lecture de la Torah avec les té’amim, les bénédictions, la Haftara et le Maftir, selon ce que votre enfant fera le jour J » ; « Pas de frais cachés : votre prix définitif est confirmé avant le paiement. » ; « Guides à la une ».

5. **Where:** _meta.placeholders.{{PRICE}} « 850 $ » + missing geo keys  
   **Problem:** Geo doc §7 mandates « 850 $ US » for FR USD prices. This matters in Quebec, where '$' alone means CAD, and in Switzerland. The Israel card, currency notes, 'Changer de région' and the suggestion banner are also missing.  
   **Fix:** Change to « 750 € » / « 850 $ US ». Add the same new keys as EN (pricing.currency_note.*, change_region, region_chooser.*, israel_card, banners.*), with the FR strings from geo §7.1–§9 and U+00A0 before « ? : ! ».

## G. content/emails-and-messages.en.json + .fr.json (Script (CRM)): 7.4 REWORK

**Required fixes:**

1. **Where:** templates.*.whatsapp: 11 of 15 bodies end with a variable (welcome_after_payment, portal_access, rabbi_matched, lesson_scheduled, reminder_24h, reminder_1h, lesson_summary_homework, recording_available, missed_lesson, payment_receipt, payment_failed), in EN and FR  
   **Problem:** Meta rejects WhatsApp templates whose body starts or ends with a parameter. As written, these templates will fail approval.  
   **Fix:** Move every URL into a template CTA-URL button (add a `whatsapp_button` key: label + url var) and end each body with text. Example, recording_available EN: '🎥 The recording of today's lesson is ready. Perfect for practicing between lessons.' + button 'Watch' → {{RECORDING_URL}}. FR: « 🎥 L’enregistrement du cours d’aujourd’hui est disponible. Idéal pour réviser entre deux cours. » + bouton « Voir ».

2. **Where:** templates.lesson_summary_homework.whatsapp: '*Practice before next time:*\n{{HOMEWORK}}'  
   **Problem:** {{HOMEWORK}} is a multi-line bullet list, and WhatsApp template parameters cannot contain newlines, tabs or 4+ consecutive spaces. The send will fail at runtime.  
   **Fix:** EN: 'Today's lesson with {{RABBI_NAME}} is done ✔️ Your practice plan and the full summary are in the parent portal. Next lesson: {{NEXT_LESSON_DATE}}, {{NEXT_LESSON_TIME}} ({{TIMEZONE}}).' + button → {{PORTAL_URL}}. FR: « Le cours du jour avec {{RABBI_NAME}} est terminé ✔️ Les exercices et le compte rendu complet sont dans votre espace parents. Prochain cours : {{NEXT_LESSON_DATE}}, {{NEXT_LESSON_TIME}} ({{TIMEZONE}}). »

3. **Where:** Missing lead-stage templates (only post-payment flows exist)  
   **Problem:** The brief's primary KPI is consultation_booked, yet no message confirms, reminds about or follows up a free consultation. Leads from the landing page get nothing, so marketing loses its warmest conversion moment.  
   **Fix:** Add EN+FR (same keys) `consultation_booked` (local date/time, call link, 'what we'll ask you'), `consultation_reminder_24h`, and `consultation_follow_up` (personal plan summary + {{CHECKOUT_URL}} + {{PRICE}}, no pressure). Add {{CHECKOUT_URL}} and {{CONSULTATION_LINK}} to _meta.placeholders.

4. **Where:** _meta.placeholders.{{AMOUNT}} "('€750' / '$850'; FR: '750 €' / '850 $')"  
   **Problem:** Geo doc §7 requires ISO codes on receipts ('€750 (EUR)', 'US$850 (USD)', « 850 $ US (USD) »). Bare '850 $' is ambiguous for Quebec and Swiss families on a payment document.  
   **Fix:** EN: "'€750 (EUR)' / 'US$850 (USD)'"; FR: « '750 € (EUR)' / '850 $ US (USD)' ».

5. **Where:** FR: reminder_1h.email.preheader « Votre lien Zoom est à l’intérieur. »; course_completed « nous sommes si fiers »; feedback_request.whatsapp « Deux minutes de votre avis nous aideraient beaucoup »; progress_milestone « C’est le fruit de {{LESSONS_COMPLETED}} cours de travail régulier. »; payment_receipt.whatsapp « Merci {{PARENT_FIRST_NAME}} ! »  
   **Problem:** These are calques of English ('inside', 'so proud', 'two minutes of your feedback') plus one awkward noun chain and a missing vocative comma.  
   **Fix:** « Votre lien Zoom pour rejoindre le cours. » ; « nous sommes très fiers de {{STUDENT_FIRST_NAME}}. » ; « Deux minutes pour nous donner votre avis nous aideraient beaucoup. » ; « C’est le fruit d’un travail régulier, sur {{LESSONS_COMPLETED}} cours. » ; « Merci, {{PARENT_FIRST_NAME}} ! »

## H. content/glossary.md (Script): 7.7 REWORK

**Required fixes:**

1. **Where:** Row 17: 'speech (drasha) | discours (drasha)'  
   **Problem:** The glossary's own FR system writes ש as 'ch' (Paracha, Chabbat, Béréchit, Houmach), but here it keeps the English 'sh'. Research §6.2 and strategy §3.2 both say « dracha ». Because the glossary is the source of truth, the error spreads into every FR file.  
   **Fix:** FR column: « discours (dracha) ». Add « drasha » to the FR 'À éviter' table → « dracha ».

2. **Where:** Row 55: 'Rendered EN "€750" / "$850"; FR « 750 € » / « 850 $ »'  
   **Problem:** Contradicts geo doc §7 (canonical): 'US$850' outside the US, « 850 $ US » in FR, ISO codes on receipts.  
   **Fix:** 'EN: €750 · $850 (US visitors) · US$850 (other non-euro countries). FR: « 750 € » · « 850 $ US ». Receipts add the ISO code. Source: geo-pricing-and-language.md §7.'

3. **Where:** §3 English avoid list: 'tutor, tutoring, Hebrew school' and row 24 'Avoid "shul"'  
   **Problem:** These conflict with the strategy. 'bar mitzvah tutor online' is the #1 money keyword (strategy §6.1), and research §6.1 recommends 'shul' for UK, AU and ZA audiences. Followed literally, the ban kills SEO and regional ads.  
   **Fix:** Add an exception column: "'tutor' allowed in meta descriptions, ad keywords and one comparison guide; 'shul' allowed in UK/AU/ZA-targeted ads. Never in brand headlines."

4. **Where:** Missing entries  
   **Problem:** Terms the audience actually searches and says are absent: d'var Torah (US Reform/Conservative), B'nai Mitzvah, Kotel / Western Wall (FR Kotel / Mur occidental), Talmud Torah (FR), adult Bar/Bat Mitzvah (FR Bar Mitsva adulte), rav vs rabbin in FR body copy (strategy voice uses « votre rav »).  
   **Fix:** Add rows 56–61 with these terms, and decide the FR rule explicitly. Proposed: 'rabbin' for SEO and first mention, « Rav + prénom » as title, « votre rav » allowed in emotional lines.

5. **Where:** §4 EN 'Times: "5:30 p.m."' vs strategy §3.1 / geo §10 / brand guide §8 '5:30 pm'  
   **Problem:** There are two time formats across the deliverables, so the CRM will render inconsistently.  
   **Fix:** Keep '5:30 p.m.' (the glossary is the source of truth) and ask Marketing to align strategy §3.1, §7.1 angle 6, brand guide §8 and geo §10.

## Routing

- **Marketing:** B (rework). Optional polish on C and D. Then re-align strategy §3.1, §7.1, the brand guide and geo §10 to the '5:30 p.m.' format.
- **Script:** E, F, G and H (rework). Fix H first, because it is the source of truth for the other three. Then E and F, then G.
- **Research:** A is approved. Apply the 3 polish notes when convenient.
- **Owner (Amit):** answer research §8 Q1–Q7. The nusach FAQ and the Bat Mitzvah scope can only become positive claims after Q1 and Q2 are answered.
- **Development/QA (next round):** verify must-haves 1, 2, 4 and 5 in the Lovable build: /en and /fr routes, hreflang, the geo matrix (geo §11, 20 rows), the Hebrew-article exclusion and prefers-reduced-motion.

```
HANDOFF → zm-landing-general-manager (route B to Marketing; E/F/G/H to Script; owner questions to Amit)
What I did · Scored 8 deliverables (3 APPROVED, 5 REWORK), ran objective JSON/key/placeholder/length/Hebrew/FR-typography/WhatsApp/contrast checks
Open questions · Research §8 Q1–Q7 (traditions taught, Bat Mitzvah scope, lesson count, refund policy, rabbi bios, teaching hours, AI scope); palette deviation from brief hexes (C)
Files touched · scorecards/round-1.json, scorecards/round-1.md
```
