# Director scorecard: Round 2, Lovable builds (2026-11-04)

## סיכום לבעלים (עמית)

- **אתר הנחיתה (EN/FR): 4.7/10, חוזר לעיבוד.** בלי תקרת הבטיחות הציון היה 4.7 בכל מקרה. יש בסיס טוב: נתיבים `/en` ו-`/fr`, קבצי שפה עם מפתחות זהים (146/146), עיצוב "אבן ירושלמית", אנימציות שמכבדות reduced-motion, טופס לידים ששומר מקומית, ותרגום מאמרים שרק מנהל יכול להפעיל.
- **בעיות חוסמות באתר:**
  1. **הכותרת והפוטר העבריים של האתר הישן עוטפים את האתר החדש.** המקור: `src/App.jsx` עוטף את כל הנתיבים, כולל `/en` ו-`/fr`, ב-`Layout` מתוך `src/Layout.jsx` (עם `dir="rtl"`, תפריט עברי, פוטר עם הכתובת ברעננה, כפתור וואטסאפ צף, באנר עוגיות ווידג'ט נגישות בעברית).
  2. **בטיחות:** בתפריט העברי יש קישור "חבילות" שמוביל ל-`/MainPackage`, ושם יש **קישורי תשלום חיים של Grow בשקלים** (`pay.grow.link/...`). מבקר מחו"ל יכול לשלם דרך המשכן לחשבון של האתר העברי. בנוסף נטענים ה-Google Analytics וה-Facebook Pixel של האתר העברי, בלי הסכמה לעוגיות (בעיה ב-GDPR באירופה).
  3. **אל תזין בשכפול את 14 הסודות** שהסוכן של Lovable מבקש ב-`roadmap.md` (Google Sheet, SMS4Free, Resend ועוד). הזנה שלהם תחזיר לפעולה את שליחת הלידים לגיליון של האתר העברי, הודעות SMS ומיילים. כרגע כל אלה כבויים, כי אין סודות.
  4. **טענות שלא אומתו:** "Trusted by families across the USA, Canada, the UK, France and beyond" לא מופיע באף מסמך. זו טענה מומצאת. גם ההבטחה ללמד "לפי ההגייה/הנוסח של הקהילה שלכם" חזרה, וזו אותה הבטחה שהורידה את הציון בסבב 1 (שאלה פתוחה Q2 במחקר).
  5. **מחיר:** רשימת גוש האירו חסרה את בולגריה (הצטרפה ב-1.1.2026) ועוד 11 קודים. פונקציית הזיהוי `geo-detect` בודקת את המיקום של השרת ולא של המבקר. בעמוד האנגלי המחיר מוצג "750 €" במקום "€750". מבקר מישראל רואה מחיר בדולרים ולא את כרטיס ההפניה לאתר העברי.
  6. **מותג:** בתמונת ה-hero, כיפת הסלע היא המוקד. למותג יהודי של לימוד תורה צריך את הכותל, אבן העיר העתיקה או גגות ירושלים.
  7. **צרפתית:** אין רווחים בלתי שבירים לפני `: ? !` (17 מקרים), והאפוסטרופים ישרים. יש סטיות מהמילון: "le trop" (טעות, צריך té’amim), "aliya", "nussah", "consultation" במקום "appel découverte", "portail" במקום "espace parents".
  8. **מאמרים:** תווית הקטגוריה נשמרת בעברית ומוצגת כצ'יפ בעמודי האנגלית והצרפתית. קישורים פנימיים במאמרים מובילים למאמרים העבריים. סרטוני YouTube בעברית נשארים בגוף המאמר.
- **CRM שלב 1: 7.8/10, חוזר לתיקון קטן.** המיגרציה מוסיפה בלבד ובטוחה לרשומות הקיימות (ברירות מחדל he / Asia/Jerusalem / ILS). טריגר אזור הזמן לא חוסם הוספה בלי timezone. טריגר ההגנה זהה לגרסת הייצור (בדקתי מול העותק המילולי שבמאגר) ונוספו לו רק country ו-currency. אף עמודה לא נמחקה משתי הפונקציות "safe". **מה חסר:** הוכחה שהפונקציות שנבנו מחדש זהות לייצור (SECURITY DEFINER, תנאי הרשאה, הרשאות). הבדיקות משתמשות ב"פונקציות דמה" ולכן לא יכולות לתפוס שינוי כזה. חסרים גם עטיפה ב-BEGIN/COMMIT וקובץ rollback.
- **ציון התקדמות:** אתר 5/10. CRM 2/10 (שלב 1 מתוך 9).
- **מחכה לתשובה שלך:** (1) האם יש משפחות מחו"ל (ארה"ב, קנדה, בריטניה, צרפת) שכבר למדו אצלכם? אם כן, אפשר לכתוב שורת אמון אמיתית. (2) אילו מסורות קריאה הרבנים מלמדים (Q2). (3) האם בנות קוראות בתורה (Q1). (4) כמה שיעורים כולל הקורס, והאם "תשובה תוך יום עסקים" היא הבטחה שאתה מאשר. (5) האם הרבנים גרים בירושלים או "בישראל". (6) מזהי Google Analytics ו-Pixel חדשים לאתר הבינלאומי.

---

## Scores

Weights: marketing 25%, language 20%, design 20%, technical 20%, brand 10%, safety 5%. Any safety failure caps the overall score at 5.
CRM Stage 1: brand, marketing and design are n/a. Their 55% is redistributed in proportion to the remaining weights: language 44.4%, technical 44.4%, safety 11.1%.

| ID | Deliverable | Brand | Mkt | Lang | Design | Tech | Safety | Weighted | Overall | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|
| L2 | Landing build, Lovable `47fcacc3…` @ `b7d025b` | 5 | 5 | 5 | 5 | 4 | 3 (FAIL) | 4.70 | **4.7** (cap 5 applies; already below it) | **REWORK** |
| C1 | CRM Stage 1, Lovable `82b65911…` @ `e986a6d` (migration 0068 + tests) | n/a | n/a | 8 | n/a | 7.5 | 8 | 7.78 | **7.8** | **REWORK** (small) |

**Progress:** Landing track 5/10 (a real build now exists; it can't ship yet). CRM track 2/10 (Stage 1 of 9, still to be verified against the live functions).

---

## Review 1: Landing build (QA table)

Reviewed: edit `b7d025b0f844757ab78429a70b3f555b1fb43d60` ("הוסף מנהל תרגומים לניהול", 28 files), read in full through `get_diff`. Also read: `src/App.jsx`, `src/Layout.jsx`, `src/pages.config.js`, `src/pages/MainPackage.jsx`, `src/data/rabbis.js`, `index.html`, `public/sitemap.xml`, `public/robots.txt`, `supabase/config.toml`, `.env`, `supabase/functions/_shared/crm_paid_push.ts`, `lead-webhook`, `payment-webhook`, and one source article JSON. Not reviewed: the running preview (it needs a login) and the binary image files. The image findings come from the project screenshot.

| # | Check | Result | Evidence | Severity |
|---|---|---|---|---|
| 1 | `/en` `/fr` routes, `/` redirect | PASS | `src/App.jsx` routes `/:lang`, `/:lang/articles`, `/:lang/articles/:slug`; `RootRedirect` | — |
| 2 | LTR on EN/FR | **FAIL** | `IntlLayout` sets `dir="ltr"`, but it renders inside `Layout` (`src/Layout.jsx`: `<div dir="rtl">`). `index.html` is `<html lang="he" dir="rtl">` | High |
| 3 | Old Hebrew header must not render | **FAIL** | `src/App.jsx` wraps **all** routes in `<LayoutWrapper>` → `Layout` from `src/pages.config.js` → `src/Layout.jsx` (Hebrew nav "דף הבית, חבילות, אודות, מאמרים וכתבות", Hebrew footer with the Ra'anana address, Hebrew WhatsApp float, Hebrew CookieConsent + AccessibilityWidget). Confirmed in the screenshot | **Critical** |
| 4 | Keys identical EN/FR | PASS | `src/i18n/en.json` / `fr.json`: 146/146 leaf keys, none missing | — |
| 5 | Every string from locale files | **FAIL** | Hard-coded: `RABBI_INTL` roles/expertise (IntlHome.jsx), all `<img alt>` in English (shown on FR too), `aria-label="Menu"` (IntlLayout.jsx), `"Parashat "` (FindParasha.jsx), `"404"`, footer "Zoom Mitzvah International" (brand, acceptable) | Medium |
| 6 | No Hebrew leaking into EN/FR UI | **FAIL** | Hebrew Layout (#3). Article `category_label` is stored untranslated (e.g. "תפילין — מה, איך, קנייה ושמירה") and shown as chips and headings in `IntlArticles.jsx`. Article bodies keep `/articles/<slug>` links to Hebrew pages, Hebrew YouTube embeds and the Hebrew legal footer | High |
| 7 | hreflang / canonical | PARTIAL | `src/lib/intlSeo.js` sets them client-side only, with **relative** URLs (Google needs absolute). No `hreflang="he"`. Alternates are emitted even when the other-language translation doesn't exist | Medium |
| 8 | Sitemap | **FAIL** | `public/sitemap.xml` unchanged: only `https://zoomitzvah.co.il/...` Hebrew URLs, no `/en` `/fr` | Medium |
| 9 | Eurozone list = geo doc §3.1 | **FAIL** | `src/lib/geo.js` `EUROZONE` has 24 codes. Missing **BG** (euro since 2026-01-01), ME, XK, GP, MQ, GF, RE, YT, PM, BL, MF, AX | High |
| 10 | Geo detection | **FAIL** | `supabase/functions/geo-detect/index.ts` falls back to `fetch('https://ipapi.co/json/')` **from the server**, which returns the edge server's country, not the visitor's. Also a third-party IP lookup, which the geo doc §6 says to avoid. The TZ fallback maps every other `Europe/*` (Warsaw, Prague, Stockholm, Zurich-adjacent…) to `FR` → €. `CH` is in `FRENCH_COUNTRIES` (Zurich gets French) | High |
| 11 | Price display format | **FAIL** | `src/hooks/usePrice.js`: EUR is always `750 €` (EN must be `€750`; the screenshot shows "Full course: 750 €" on `/en`). USD is always `$850` (outside the US it should be `US$850`; FR should be `850 $ US`) | Medium |
| 12 | No price flash | **FAIL** | `usePrice` starts at `USD` and swaps after detection. `loading` is returned but never used | Medium |
| 13 | Israel banner + pricing card | **FAIL** | `IsraelBanner` exists, but in EN/FR text (spec: Hebrew, `dir="rtl"`). IL gets the **USD** price; the pricing card and hero chip are not replaced with the Hebrew-site card. No `Asia/Jerusalem` fallback | High |
| 14 | Benefits grid: all 7 items | PASS | `benefits.items`: AI 24/7 · 120+ guides EN&FR · Israeli rabbi in Jerusalem/your language · ADHD/dyslexia · time zone · recorded · parent portal | — |
| 15 | Articles pipeline admin-only | PASS | `translate-article` checks the JWT + `has_role(admin)`. The UI is in the admin tab only | — |
| 16 | Never show Hebrew articles | PARTIAL | Untranslated slugs → 404 ✓. But Hebrew category labels, links, videos and legal text leak (#6). Translations auto-publish (`status: 'published'`) with no human review. `body_html` is injected without sanitizing | High |
| 17 | Lead form saves locally | PASS* | `intl-lead` inserts into the project's own `intl_leads`. Forwarding only runs if `INTL_CRM_FORWARD_URL` is set. *Risk: `supabase/config.toml` has no `verify_jwt = false` for `intl-lead` / `geo-detect`, while the client strips the Bearer header for `sb_publishable_` keys. Anonymous calls may get a 401. **Verify with a live submit.** No consent text, privacy link, honeypot or rate limit. Doesn't send timezone/currency/source | Medium |
| 18 | No CRM pushes / payments from the clone | **FAIL** | `crm_paid_push.ts` is a no-op without `PAID_PUSH_SECRET` ✓. `lead-webhook` is a no-op without `GOOGLE_SHEET_WEBHOOK_URL` ✓. **But** the Hebrew funnel is still routed: `src/pages/MainPackage.jsx` hard-codes live `https://pay.grow.link/...` ILS links, reachable from the Hebrew header "חבילות" on every EN/FR page. `roadmap.md` asks the owner to re-enter 14 production secrets, which would re-enable sheet/SMS/email side effects. `index.html` fires the production GA `G-9B840DNYHY` and FB Pixel `750977008087561` before any consent | **Critical** |
| 19 | prefers-reduced-motion | PASS (intl) / FAIL (legacy) | `src/index.css` disables Ken Burns, reveal and lift; `Reveal.jsx` checks the media query ✓. The legacy WhatsApp `float-animation` (Layout.jsx) and `scrollIntoView({behavior:"smooth"})` ignore it | Low |
| 20 | Contrast AA | **FAIL** | Gold text `hsl(39 54% 54%)` ≈ #C99D4A on limestone = **2.1:1**, on white 2.5:1 (kickers, "Read the guide", rabbi expertise, article links) | Medium |
| 21 | No fabricated claims | **FAIL** | `hero.trustLine` "Trusted by families across the USA, Canada, the UK, France and beyond": not in the brief, research or approved copy → fabricated. `faq[1].a` promises teaching "with your community's pronunciation (Ashkenazi, Sephardi or other traditions)" and `learn.subtitle` "adapted to your community's nusach": open question Q2 (the round-1 safety cap). `faq[3].a` "We teach families across North America, Europe and beyond": unverified. "within one business day": unconfirmed SLA. "Weekly" lessons: lesson count unconfirmed. Rabbi roles "Torah scholar / érudit en Torah" overstate `לומד תורה` | High |
| 22 | Hero image brand fit | **FAIL** | `src/assets/intl/hero-jerusalem.jpg`: the Dome of the Rock is the dominant focal point (screenshot). The brand needs the Kotel, Old City stone or rooftops | High (brand) |
| 23 | French typography | **FAIL** | `fr.json`: 17 regular spaces before `: ? ! »`, 0 NBSP, 25 straight apostrophes | Medium |
| 24 | Glossary compliance | **FAIL** | FR: "le trop" (wrong; té’amim/cantillation), "l'aliya" (banned), "nussah" (→ rite), "paracha" lowercase, "consultation gratuite" (→ appel découverte gratuit), "Cours complet" (→ parcours complet), "Portail parents" (→ espace parents), "24/7" (→ 24 h/24), "120+" (→ plus de 120), "téfilines" lowercase. EN: "nusach" in parent copy (→ tradition) | Medium |
| 25 | KPI tracking | **FAIL** | No `consultation_booked` event on lead success | Medium |
| 26 | No secrets in code | PASS | Only the publishable key in `.env` | — |

### Copy compared with the approved content files (being reworked; gaps only)
Lovable wrote its own copy and key schema (`src/i18n/*.json`, 146 keys). It did not use `content/landing.en.json` / `landing.fr.json` (271 keys). Missing compared with the content files: `a11y.*` (skip link, menu labels), `cookie_notice.*`, `footer.legal.*` (privacy, terms, cookies and accessibility links are absent from the EN/FR footer, although `footer.privacy`/`footer.terms` keys exist), `language_switcher.options.he`, `nav.login` (parent portal), `rabbis.card_labels.*` / `matching_note` / `empty_state`, `pricing.reassurance`, `pricing.plan_name`/`price_suffix`/`price_note`, FAQ (6 items vs 10), pricing includes (6 vs 10), `articles.categories.*` (localized category names: this would also fix the Hebrew chips), `articles.also_in_language`. The approved hero trust line ("Israeli rabbis who speak your language · Every lesson recorded · Times shown in your local time zone") is factual and should replace the fabricated one. Note: the approved files still say "Learn Torah **in Israel**" (flagged in round 1). The build correctly uses "**from Jerusalem**", which matches the brief.

### Director notes (landing)
- **Brand 5:** The palette (#F3EBDD / #0F1E3A / gold), Fraunces + Manrope and the editorial layout feel premium and "Jerusalem". The Dome of the Rock hero, the Hebrew header/footer stacked on top and the fabricated trust line undercut trust.
- **Marketing 5:** One price, a clear primary CTA ("Book a free consultation"), all 7 benefits, a FAQ and a pricing card are present. But the page makes unverified promises (traditions, reach, SLA, weekly lessons), advertises "120+ guides in English & French" while 0 are translated, has no KPI event, and the Hebrew header leads to an ILS checkout.
- **Language 5:** EN reads naturally. FR fails typography and the glossary in about a dozen places. One French error is real ("le trop"). EN pages show a French-style price.
- **Design 5:** The intl components, motion and reduced-motion handling are good work. The rendered page is broken by double headers and footers, an RTL wrapper, Hebrew floating widgets, and gold text that fails AA.
- **Technical 4:** The routing and i18n skeleton are solid. Geo detection is wrong (server IP, incomplete Eurozone, bad TZ fallback), there is a price flash, Israel handling is missing, the language geo-refinement is dead code (the provider writes `zm_intl_lang` before checking it), SEO is relative and client-only, the sitemap is untouched, Hebrew leaks through article metadata and links, there is no HTML sanitizing, and JWT verification for the public functions may cause 401s.
- **Safety 3 (FAIL → cap 5):** Live ILS Grow payment links are reachable from EN/FR pages. Production analytics IDs fire without consent. The agent asks for the production secrets. Fabricated claims are on the page.

---

## LOVABLE_FIX_MESSAGE

```text
Round-2 QA found blocking issues. Please fix ALL of the following, in this order. Do not add new sections or features until these pass. After you finish, reply with a short list mapping each numbered item to the files you changed.

SAFETY FIRST (blocking)
1. Remove the Hebrew site chrome from the international pages.
   - In src/App.jsx, the routes "/", "/:lang", "/:lang/articles" and "/:lang/articles/:slug" are rendered inside <LayoutWrapper>, which renders src/Layout.jsx (Hebrew header "דף הבית / חבילות / אודות / מאמרים וכתבות", Hebrew footer with the Ra'anana address, dir="rtl" wrapper, Hebrew WhatsApp float, Hebrew CookieConsent and AccessibilityWidget). Render the international routes OUTSIDE LayoutWrapper (e.g. split <Routes> into an intl group without Layout and a legacy group with Layout), so that only IntlLayout renders on /en and /fr.
   - Add an EN/FR cookie-consent banner and an accessibility-statement link inside IntlLayout (texts in src/i18n/*.json).
2. Make payments and legacy side effects impossible from this clone.
   - The Hebrew funnel is still routed and src/pages/MainPackage.jsx hard-codes live ILS checkout links (https://pay.grow.link/...). Redirect these routes to /en: Home, MainPackage, MainPackageSpecial, MainPackageTrial, GiftCheck, RegistrationDetails, PremiumPackages, YouTubeLanding, qr/QR, Contact, Gallery, About, articles (Hebrew). Remove all pay.grow.link / Meshulam URLs from the client bundle. Keep only /admin, /AdminLogin, /auth/callback and /reset-password working.
   - In supabase/functions, make lead-webhook, youtube-lead-webhook, payment-webhook, grow-email-bridge, finalize-registration, contact-form, offer-eligibility and send-abandoned-cart-emails return HTTP 410 immediately unless the env var INTL_LEGACY_ENABLED === "true". Delete the call to schedulePaidPush (crm_paid_push.ts) or guard it with the same flag.
   - Remove the task in roadmap.md that asks the owner to re-enter the 14 production secrets (GOOGLE_SHEET_WEBHOOK_URL, SMS4FREE_*, RESEND_API_KEY, etc.). This project must NOT use them. Never ask for them again.
   - index.html loads the Hebrew site's Google Analytics (G-9B840DNYHY) and Facebook Pixel (750977008087561) on every page, before consent. Remove both. Add a consent-gated loader that reads new IDs from config (VITE_GA_ID / VITE_FB_PIXEL_ID, empty by default) and loads nothing until the visitor accepts cookies.
3. Remove fabricated or unconfirmed claims (EN and FR):
   - hero.trustLine → replace with the approved, factual line: EN "Israeli rabbis who speak your language · Every lesson recorded · Times shown in your local time zone"; FR « Des rabbins israéliens qui parlent votre langue · Chaque cours enregistré · Horaires affichés à votre heure locale » (both copied from content/landing.*.json hero.trust_line).
   - faq.items[1].a: delete "with your community's pronunciation (Ashkenazi, Sephardi or other traditions)" / « avec la prononciation de votre communauté (achkénaze, séfarade ou autres traditions) ». Do not promise any specific reading tradition.
   - learn.subtitle: replace "adapted to your community's nusach and customs" with "built around your child's date and Torah portion" (FR « construit autour de la date et de la Paracha de votre enfant »). pricing.includes[5]: drop "and community customs".
   - faq.items[3].a: delete "We teach families across North America, Europe and beyond." Keep only the local-time scheduling sentence.
   - leadForm.subtitle / successText: remove "within one business day" (EN) and « sous un jour ouvré » (FR).
   - howItWorks.steps[2] and pricing.includes[0]: replace "Weekly" with "Regular one-on-one" (FR « réguliers »), because the lesson count is not confirmed yet.
   - Rabbi roles in src/pages/intl/IntlHome.jsx: do not upgrade "לומד תורה" to "Torah scholar" / « érudit en Torah ». Use "Educator; teaches Torah and the weekly portion" (FR « Éducateur ; enseigne la Torah et la Paracha de la semaine »), and map each rabbi from src/data/rabbis.js (occupation + teaches) faithfully. Move these strings into src/i18n/en.json and fr.json.

GEO, PRICE, ISRAEL (src/lib/geo.js, src/hooks/usePrice.js, supabase/functions/geo-detect/index.ts, IntlLayout.jsx, IntlHome.jsx)
4. EUROZONE must be exactly: AT BE BG HR CY EE FI FR DE GR IE IT LV LT LU MT NL PT SK SI ES + MC AD SM VA ME XK + GP MQ GF RE YT PM BL MF AX. (BG joined the euro on 2026-01-01.) Everything else is USD, including GB, CH, LI, CA, MA, TN, NC, PF, WF, CZ, PL, SE, HU, RO, DK.
5. geo-detect: delete the server-side fetch to https://ipapi.co/json/ (it geolocates the server, not the visitor). Use edge headers only (cf-ipcountry, x-vercel-ip-country, x-country-code, plus region headers if present). Otherwise return {country:null}. Add "[functions.geo-detect] verify_jwt = false" and "[functions.intl-lead] verify_jwt = false" to supabase/config.toml, then confirm that an anonymous visitor gets HTTP 200 from both.
6. Client fallback: replace countryFromTimezone() with explicit sets. EUR time zones = Europe/Paris, Brussels, Luxembourg, Monaco, Berlin, Amsterdam, Vienna, Rome, Madrid, Lisbon, Dublin, Helsinki, Mariehamn, Athens, Tallinn, Riga, Vilnius, Bratislava, Ljubljana, Zagreb, Malta, Sofia, Andorra, San_Marino, Vatican, Podgorica, Asia/Nicosia, Asia/Famagusta, Atlantic/Madeira, Atlantic/Azores, Atlantic/Canary, Africa/Ceuta, Indian/Reunion, Indian/Mayotte, America/Guadeloupe, America/Martinique, America/Cayenne, America/Miquelon, America/St_Barthelemy, America/Marigot. Asia/Jerusalem and Asia/Tel_Aviv → Israel. Everything else → USD. Remove the generic "Europe/* → FR" rule. Remove CH from FRENCH_COUNTRIES (Switzerland is French only for cantons GE, VD, NE, JU). Add GP MQ GF RE YT PM BL MF NC PF WF to the French-language list.
7. Price formatting depends on page language AND country: EN + EUR → "€750"; EN + USD in US → "$850"; EN + USD elsewhere → "US$850"; FR + EUR → "750 €"; FR + USD → "850 $ US". Use U+00A0 non-breaking spaces in FR. Do not initialise the currency to USD: while loading, render a fixed-width skeleton in the hero chip and the pricing card, so the visitor never sees $850 change to €750.
8. Israel (country IL, or time zone Asia/Jerusalem when geo fails): show a top banner in Hebrew with dir="rtl" lang="he" and the exact text "נמצאים בישראל? לאתר זום מצווה בעברית ←", linking to https://zoomitzvah.co.il. REPLACE the pricing card and the hero price chip with: EN "In Israel? Lessons, pricing and registration are on our Hebrew site." / FR « Vous êtes en Israël ? Les cours, tarifs et inscriptions sont sur notre site en hébreu. », plus the same link. Never show a USD or EUR price to IL visitors. No redirect.
9. Under the price, show the currency note and a "Change region" chooser with 3 options (Eurozone € · Other countries US$ · Israel → Hebrew site). Store the choice in localStorage key zm_region. The texts are in marketing/geo-pricing-and-language.md §7.1; put them in the locale files.

LANGUAGE (src/i18n/fr.json, en.json, I18nContext.jsx, FindParasha.jsx)
10. French typography in fr.json: use a non-breaking space (U+00A0) before every : ; ? ! and » and after «, and curly apostrophes (’) everywhere. Today there are 17 plain spaces and 25 straight apostrophes.
11. French glossary fixes: "Lecture de la Torah avec le trop" → « Lecture de la Torah avec les té’amim (la cantillation) »; "Bénédictions de l'aliya" → « Bénédictions de la montée à la Torah »; "nussah" → « rite »; always « Paracha » (capital P); "Réserver une consultation gratuite" → « Réserver un appel découverte gratuit » (short button: « Appel gratuit »); "Cours complet" → « Parcours complet »; "Portail parents" → « Espace parents »; "24/7" → « 24 h/24 »; "120+ guides" → « plus de 120 guides »; « Téfilines » (capital T); « la Vieille Ville ». English: learn.subtitle "nusach" → "tradition"; "Drasha (speech)" → "The speech (drasha)".
12. Move every remaining hard-coded UI string into the locale files: all <img alt> texts in IntlHome.jsx, aria-label "Menu" in IntlLayout.jsx, "Parashat " in FindParasha.jsx (FR must be « Paracha »; use French transliterations of the portion names on /fr), and the "404" heading.
13. In I18nProvider, delete the effect that auto-navigates to another language after geo detection. It is dead code today (the first effect writes zm_intl_lang before the check), and the URL must remain the source of truth. Replace it with a dismissible suggestion bar ("Ce site existe en français. Voir en français" / "This page is available in English. View in English") that appears only when no saved choice exists. Make the language switcher use real <a> links with hreflang/lang, labelled "English · Français · עברית" (the Hebrew link goes to https://zoomitzvah.co.il). No flags.

SEO
14. index.html: change <html lang="he" dir="rtl"> to lang="en" dir="ltr". src/lib/intlSeo.js: use ABSOLUTE URLs (https://<international domain>/en/...) for canonical, og:url and hreflang. Emit the other-language alternate only when that translation exists. Add hreflang="he" to the matching zoomitzvah.co.il page where one exists. x-default stays /en.
15. Regenerate public/sitemap.xml for the international domain: /en, /fr, /en/articles, /fr/articles, and every published translated article, with xhtml:link alternates. Point robots.txt to it. Untranslated article slugs must return a real 404 page with <meta name="robots" content="noindex">.

ARTICLES (supabase/functions/translate-article/index.ts, IntlTranslations.jsx, IntlArticles.jsx, IntlArticlePage.jsx)
16. category_label is saved in Hebrew (e.g. "תפילין — מה, איך, קנייה ושמירה") and shows as chips and headings on /en/articles and /fr/articles. Translate it, or better, map `category` to locale keys (articles.categories.* in content/landing.*.json).
17. Rewrite internal links in translated bodies from /articles/<slug> to /<lang>/articles/<slug>, but only when that translation exists. Otherwise unwrap the link. Remove the Hebrew YouTube embeds, or label them "Video in Hebrew" / « Vidéo en hébreu ». Translate or remove the Hebrew <small class="zm-legal"> block.
18. Sanitize body_html with DOMPurify before dangerouslySetInnerHTML.
19. Save new translations as status 'draft'. Add a per-article preview and a "Publish" button in the admin tab. Auto-flag (needs_review) any output that contains Hebrew letters [֐-׿] outside <blockquote>/<q> verse quotes.
20. Put the project glossary into LANG_RULES. FR: Paracha (capital P), Haftara, Téfilines, Talit, « montée à la Torah » (never « aliya »/« alya »), té’amim, Chabbat, Mazal tov, vouvoiement, NBSP typography. EN: Bar Mitzvah, Torah portion (parasha), leyning, Haftarah, tefillin, tallit, Shabbat, "aliyah (being called up to the Torah)".
21. Until at least 120 guides are published in BOTH languages, change the benefit/pricing line "120+ guides in English & French" to "A growing library of guides in English & French" (FR « Une bibliothèque de guides en français et en anglais, enrichie chaque semaine »).

DESIGN & ACCESSIBILITY
22. Replace the hero image src/assets/intl/hero-jerusalem.jpg. Its dominant focal point is the Dome of the Rock, which is wrong for a Jewish Torah-learning brand. Use the Western Wall (Kotel) at golden hour, Old City Jerusalem stone alleys, or Jerusalem rooftops, with no Dome of the Rock or other non-Jewish religious landmark as the subject. Check rooftops-sunset.jpg and jerusalem-alley.jpg the same way. Update the alt texts (from locale files).
23. Contrast: gold text on limestone is 2.1:1 and on white 2.5:1, which fails WCAG AA. Add a text token --intl-gold-text ≈ #7F5F1A (about 5.0:1 on #F3EBDD) and use it for kickers, "Read the guide" links, rabbi expertise text and article links on light backgrounds. Keep #C9A24A for decorative use and on night blue.
24. Respect prefers-reduced-motion in the anchor scroll (IntlHome.jsx scrollIntoView: use behavior "auto" when reduced).

LEAD FORM (src/components/intl/LeadForm.jsx, supabase/functions/intl-lead/index.ts)
25. Add a consent line with a link to an EN/FR privacy policy page (create /en/privacy and /fr/privacy with placeholder text clearly marked "draft — pending owner/legal approval"). Add a hidden honeypot field and a simple per-IP/per-email rate limit in intl-lead. Make country an ISO-2 select prefilled from detection. Also send timezone (Intl), currency and source:"intl". Fire the analytics event "consultation_booked" on success (no PII in the event).

Do NOT: re-enter production secrets, enable any CRM forwarding, add Stripe, or invent statistics, testimonials, customer locations or rabbi languages.
```

---

## Review 2: CRM Stage 1 (QA table)

Reviewed: commit `e986a6d156b36d32fc406966bc4a5635e5fe1dad` (parent `f11c7a99…`): `drizzle/migrations/0068_intl_family_locale_columns.sql`, `db/tests/intl_locale/{fixture.sql,run.sh,test.sql}`, `src/integrations/supabase/types.ts`, `roadmap.md`. Previous definitions came from `types.ts` at the parent commit (return columns) and `db/tests/rls_assignment/fixture.sql` (the verbatim production `protect_student_package_fields`, read 2026-09-08). Also checked: `drizzle/migrations/0005`, `0009` and `.lovable/plan.md`. I did not query the production database. I did not grep every caller in `src/` and `supabase/functions` (the CRM has more than 1,000 files). Because supabase-js returns named objects and no column was removed, appended columns cannot break JS callers.

| # | Check | Result | Evidence | Severity |
|---|---|---|---|---|
| 1 | Additive only | PASS | Only `ADD COLUMN` / `ADD CONSTRAINT` / new trigger + function. `NOT NULL DEFAULT <const>` → PG11+ fast default, no table rewrite, existing rows get `he`/`Asia/Jerusalem`/`ILS`. `pending_paid_customers` columns are nullable | — |
| 2 | Hebrew behaviour unchanged | PASS | Defaults keep every existing family Hebrew/ILS/Jerusalem. No UPDATE of data | — |
| 3 | `get_rabbi_students_safe` columns | PASS | Parent `types.ts`: 20 columns (incl. `package_type`). New: the same 20 + `preferred_language, country, timezone, currency` appended at the end. Nothing dropped | — |
| 4 | `get_student_safe_data` columns | PASS | Parent: 19 columns (no `package_type`). New: the same 19 + 4 appended. Nothing dropped | — |
| 5 | Same security mode / body as live | **UNVERIFIED** | The new definitions are `LANGUAGE sql STABLE`, **not** `SECURITY DEFINER`, and have no caller check. Whether production was DEFINER (and whether it had an auth predicate) is not shown anywhere. `fixture.sql` stubs both as `RETURNS SETOF uuid … SELECT id`, so the test cannot detect a security-mode or predicate change. With the existing "Rabbis can view their students" RLS policy, rabbis still see their assigned students under INVOKER. Any caller that relied on DEFINER (e.g. a rabbi reading a formerly assigned student) would silently get 0 rows | Medium–High |
| 6 | Grants preserved | PARTIAL | New: `REVOKE ALL FROM PUBLIC, anon` + `GRANT EXECUTE TO authenticated, service_role` on both. Previous ACLs weren't captured (`DROP FUNCTION` discards them). If they used the default PUBLIC grant, this is a (good) tightening but a behaviour change. `validate_locale_timezone` revoked from PUBLIC/anon/authenticated ✓ (triggers don't need EXECUTE) | Low |
| 7 | Protect trigger logic | PASS | Identical to the verbatim production copy (rls_assignment fixture), with only `NEW.country := OLD.country; NEW.currency := OLD.currency;` added in the trial-completion branch and in the parent branch. Service role / `auth.uid() IS NULL` / admin bypass unchanged. Parents and linked portal users can change only `preferred_language` and `timezone`. Offer-version fields stay protected by the separate `protect_student_offer_version` trigger (0009) | — |
| 8 | Timezone trigger vs inserts that omit timezone | PASS | `BEFORE INSERT OR UPDATE OF timezone`. Defaults are applied before BEFORE triggers, so an omitted value becomes `'Asia/Jerusalem'`, which is in `pg_timezone_names`. NULL is skipped (pending_paid). Students reject explicit NULL via NOT NULL, but no existing code sends that column. Bulk paths do one `pg_timezone_names` scan per inserted row (acceptable) | — |
| 9 | Atomicity | **FAIL** | No `BEGIN; … COMMIT;`. Between `DROP FUNCTION` and `CREATE FUNCTION`, a failure would leave the rabbi/student portals without the RPC. Earlier repo migrations (e.g. `20260911_rls_assignment_hardening.sql`) wrap in a transaction | Medium |
| 10 | Rollback | **FAIL** | No rollback script, although the repo convention has `*_rollback.sql` for every DDL change | Medium |
| 11 | Test coverage | PARTIAL | Covers defaults, invalid language/currency/tz, pending nullability, parent vs admin. Missing: student INSERT without timezone, legacy column presence/order in both safe functions, `get_rabbi_students_safe` at all, ACL (`has_function_privilege`), security-mode equality, md5 of the protect body vs production | Medium |
| 12 | Data validation | Minor | `country` has no ISO-2 format check (the plan says ISO-2) | Low |

### Director notes (CRM)
- **Technical 7.5:** A clean additive migration, correct defaults, a correct trigger, and verified column supersets. Points lost: the two rewritten SECURITY-relevant functions aren't proven equal to production, there is no transaction, no rollback, and the tests are thin on what matters most.
- **Safety 8:** No data risk, and Hebrew users are unaffected by design. The remaining risk is a silent change in security mode or ACL on two production RPCs.
- **Language 8:** Locale codes (`he|en|fr`), ISO currencies and the Hebrew roadmap note are correct and clear.

### CRM fixes (owner: CRM development)
1. **Prove parity with production** (read-only): run `SELECT pg_get_functiondef(p.oid), p.prosecdef, p.proacl FROM pg_proc p WHERE p.proname IN ('get_student_safe_data','get_rabbi_students_safe','protect_student_package_fields')` on the live DB. Save the output verbatim to `db/tests/intl_locale/live_before.sql`. Load it in `fixture.sql` instead of the `RETURNS SETOF uuid` stubs. If production was `SECURITY DEFINER` and/or had an auth predicate, restore both exactly in `0068_intl_family_locale_columns.sql`. Restore the original ACL too.
2. Wrap `0068_intl_family_locale_columns.sql` in `BEGIN; … COMMIT;`.
3. Add `drizzle/migrations/0068_intl_family_locale_columns_rollback.sql` (or `db/pending/…_rollback.sql`). It restores the three previous function definitions and ACLs verbatim and drops the two triggers and `validate_locale_timezone()`. Leave the columns, or drop them only on explicit owner approval.
4. Extend `db/tests/intl_locale/test.sql`: student INSERT without timezone succeeds (→ `Asia/Jerusalem`); both safe functions return all legacy columns in the original order plus the 4 new ones; `has_function_privilege('anon', …) = false`, `authenticated = true`; md5 of the protect body equals production plus the two added lines; a rabbi-role user cannot change country/currency.
5. Optional: `CHECK (country IS NULL OR country ~ '^[A-Z]{2}$')` on both tables.
6. After applying (with owner approval), run read-only checks: the row count is unchanged, 100% of existing rows are he/Asia/Jerusalem/ILS, and a smoke test of the rabbi dashboard and the student portal passes. Record the "applied" status in `roadmap.md`.

---

`HANDOFF → zm-landing-general-manager (landing dev team) and zm-crm-general-manager (CRM dev team)` · **What I did:** I code-reviewed both Lovable builds (read-only MCP; no messages, deploys or DB queries), scored them with the Director rubric, and wrote the fix lists and the ready-to-send Lovable message. · **Open questions:** the owner items listed in the Hebrew summary (trust evidence, traditions Q2, Bat Mitzvah Q1, lesson count/SLA, rabbis' location, new GA/Pixel IDs). · **Files touched:** `zoom-mitzvah-international/scorecards/round-2-builds.md`, `zoom-mitzvah-international/scorecards/round-2-builds.json`.
