# Director scorecard: Round 3, Lovable builds (2026-11-04)

## סיכום לבעלים (עמית)

- **אתר הנחיתה (EN/FR): 6.5/10, עדיין חוזר לעיבוד (בסבב הקודם 4.7).** אין יותר כשל בטיחות. 19 מתוך 25 התיקונים בוצעו במלואם, 3 חלקית ו-3 לא בוצעו.
  - **מה תוקן:**
    - הכותרת והפוטר העבריים כבר לא מופיעים בעמודי `/en` ו-`/fr`.
    - כל נתיבי המשפך העברי מפנים ל-`/en`, ודפי Grow כבר לא נטענים לאתר.
    - 8 הפונקציות הישנות מחזירות 410.
    - ה-GA וה-Pixel העבריים הוסרו, ויש באנר עוגיות באנגלית ובצרפתית.
    - הבקשה להזין 14 סודות נמחקה מה-roadmap.
    - רשימת גוש האירו מלאה (כולל בולגריה), והזיהוי לפי המיקום בשרת הוסר.
    - פורמט המחיר נכון: €750 / US$850 / 750 € / 850 $ US, עם שלד בזמן הטעינה.
    - מבקר מישראל מקבל באנר בעברית וכרטיס הפניה במקום מחיר.
    - נוסף בורר אזור.
    - הקופי המאושר הוטמע **מילה במילה**: 309 מפתחות, אף אחד לא חסר. היו רק 4 שינויים, וכולם מוצדקים לפי תיקון #21 ("ספרייה שגדלה" במקום "120+").
    - הטיפוגרפיה הצרפתית נקייה, ואין תבניות `{{…}}` גולמיות במסך.
    - תמונת ה-hero היא עכשיו הכותל.
  - **מה חוסם עדיין:**
    1. **טופס הלידים מציג מפתחות גולמיים** כמו "leadForm.title" ו-"leadForm.name". הקומפוננטה לא עודכנה לשמות המפתחות החדשים. זה הטופס היחיד שמביא לידים. אותה בעיה יש בחלון "תשלום בקרוב" ובכפתור "הכול" בעמוד המדריכים.
    2. **התפריט העליון נשבר לשתי שורות** במסך 1920 (כמו בצילום המסך): 7 קישורים, מתג שלוש שפות וכפתור בתוך 1120px. התיקון: 4 קישורים, `whitespace-nowrap`, ותפריט מלא רק מ-1280px.
    3. **טופס הלידים (#25) לא שונה בכלל:** אין שורת הסכמה וקישור לפרטיות, אין הגנה מספאם, ואין אירוע `consultation_booked`.
    4. **מאמרים (#19, #20):** תרגומים עדיין מתפרסמים אוטומטית, בלי בדיקה. ההנחיה למודל התרגום עדיין אומרת לכתוב "paracha, téfilines, aliya", מונחים שאסורים במילון.
    5. **SEO (#15):** ה-sitemap וה-robots עדיין מצביעים על האתר העברי.
    6. עמודי "תנאי שימוש" ו"נגישות" מציגים את הטקסט של מדיניות הפרטיות (באג). כתובת שגויה מציגה דף 404 בעברית.
  - **כותרת ה-hero ("PRIVATE BAR & BAT MITZVAH LESSONS, LIVE FROM ISRAEL"):** זהה בדיוק לקופי המאושר. האותיות הגדולות באות מה-CSS. אין מה לתקן, אבל זה קשור לשאלה Q5: האם הרבנים גרים בירושלים או "בישראל".
- **CRM שלב 1: 8.3/10, מאושר (בסבב הקודם 7.8).**
  - **אבטחה:** בדקתי בעצמי את קבצי המיגרציה. שתי הפונקציות "safe" נוצרו כ-SECURITY DEFINER בדצמבר 2025, ועברו ל-SECURITY INVOKER ב-23.7.2026. ההרשאות לא השתנו: anon חסום ו-authenticated מורשה. שלב 1 שמר בדיוק את המצב הזה, כך שלא היה מה לשחזר ואבטחת הפורטלים לא השתנתה.
  - **מה נוסף:** קובץ rollback שנבדק, בדיקת ISO-2 למדינה (0069), ו-14 מתוך 14 בדיקות שעוברות.
  - **BEGIN/COMMIT:** ההחלטה לא לעטוף את 0068 מקובלת. המיגרציה כבר רצה בייצור, וכלי המיגרציה כבר מריץ אותה בטרנזקציה.
  - **אפשר לעבור לשלב 2.**
- **צריך תשובה ממך:**
  1. **שפות הרבנים:** האתר אומר שכל רב "מלמד באנגלית או בצרפתית", אבל בנתוני הרבנים אין שדה שפה. אילו שפות כל רב מלמד בפועל?
  2. **קצב תרגום:** האם אפשר להבטיח "תרגומים חדשים כל שבוע"?
  3. **ירושלים או ישראל (Q5):** האם הרבנים גרים בירושלים או במקום אחר בישראל?
  4. **מזהי מדידה:** מזהי GA ו-Pixel חדשים לאתר הבינלאומי.
- **ציון התקדמות:** אתר 7/10. CRM 2/10 (שלב 1 מתוך 9 הושלם).

---

## Scores

Weights: marketing 25%, language 20%, design 20%, technical 20%, brand 10%, safety 5%. Any safety failure caps the overall score at 5.
For CRM Stage 1, brand, marketing and design are n/a. Their weight is redistributed in proportion: language 44.4%, technical 44.4%, safety 11.1%.

| ID | Deliverable | Brand | Mkt | Lang | Design | Tech | Safety | Overall | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| L3 | Landing, Lovable `47fcacc3…` @ `f264be6` (vs `b7d025b`) | 7 | 6 | 7.5 | 6 | 6 | 8 (pass) | **6.5** (was 4.7) | **REWORK** |
| C2 | CRM Stage 1 follow-up, Lovable `82b65911…` @ `c2b4f0c` | n/a | n/a | 8 | n/a | 8.5 | 9 (pass) | **8.3** (was 7.8) | **APPROVED** |

Landing: 0.25×6 + 0.2×7.5 + 0.2×6 + 0.2×6 + 0.1×7 + 0.05×8 = **6.50**.
CRM: 0.444×8 + 0.444×8.5 + 0.111×9 = **8.33**.

**Progress:** Landing 7/10: every section, geo pricing and Israel handling exist, and the site is close to launchable once the form, the header and the article workflow are fixed. CRM 2/10: Stage 1 of 9 is done and verified.

---

## Review 1: Landing (QA table)

Reviewed: the full diff `b7d025b → f264be6` ("Applied Round 2 QA fixes", 33 files). Files read in full at `f264be6`:
- `src/components/intl/IntlLayout.jsx`, `src/pages/intl/IntlHome.jsx`, `src/components/intl/LeadForm.jsx`, `src/components/intl/CheckoutButton.jsx`, `src/Layout.jsx`
- `src/lib/geo.js`, `src/lib/PageNotFound.jsx`, `src/components/CookieConsent.jsx`, `src/data/rabbis.js`
- `src/config/pricingRollout.js`, `src/lib/offerPricing.js`
- `supabase/functions/translate-article/index.ts`, `public/robots.txt`, `public/grow-gmail-bridge.gs`
- `src/i18n/en.json` and `fr.json`, rebuilt from the diff and parsed

I also read Lovable's chat for the round. Its final reply has progress notes only, not the requested 1–25 mapping.

### The 25 fixes

| # | Fix | Result | Evidence |
|---|---|---|---|
| 1 | Intl routes outside the Hebrew Layout; EN/FR cookie consent + a11y link | **PASS** | `src/App.jsx`: `/`, `/:lang`, `/:lang/articles(/:slug)`, `/:lang/privacy\|terms\|accessibility` render only `IntlRoute → IntlLayout`. `LayoutWrapper` now wraps only the admin pages from `pages.config`. `IntlLayout.jsx` has `CookieBanner`, a skip link and an `/accessibility` footer link |
| 2 | Funnel redirected; no Grow in bundle; legacy functions gated; secrets request removed; GA/Pixel removed | **PASS** | `App.jsx` `LEGACY_PATHS` (Home, MainPackage*, GiftCheck, RegistrationDetails, PremiumPackages, YouTubeLanding, qr/QR, Contact, Gallery, About, articles, legal aliases) → `LegacyRedirect`. `pages.config.js` no longer imports MainPackage/GiftCheck/RegistrationDetails/Home/ArticlePage (only admin, AdminLogin and reset-password remain), so the `pay.grow.link` page is no longer bundled. `_shared/legacy_guard.ts` returns 410 unless `INTL_LEGACY_ENABLED==="true"`; it is wired into all 8 functions plus `crm_paid_push.ts`. `roadmap.md`: the 14-secrets task is deleted. `index.html`: `G-9B840DNYHY` and `750977008087561` are removed; `src/lib/intlTracking.js` loads only after consent, from `VITE_GA_ID` / `VITE_FB_PIXEL_ID` (empty). Residual (low): `public/grow-gmail-bridge.gs` is still publicly served (Hebrew production Supabase ref, Grow pipeline); dead `src/pages/MainPackage.jsx` is still in the repo |
| 3 | Remove fabricated or unconfirmed claims | **PASS** | The approved copy replaces all of them (trust line, tradition promise, SLA, "Weekly", reach claims). The rabbi cards map `src/data/rabbis.js` faithfully ("Educator", "Kollel scholar and remedial teacher", "Accountant and Torah learner", "Community counselor and Torah learner"). Owner check: `rabbis.intro` / `promises` "teaches in English or French" has no language field in the data |
| 4 | Exact Eurozone set | **PASS** | `src/lib/geo.js` `EUROZONE`: 21 EU members incl. BG + MC AD SM VA ME XK + GP MQ GF RE YT PM BL MF AX |
| 5 | geo-detect headers only; `verify_jwt=false` | **PASS** | `geo-detect/index.ts`: the `ipapi.co` fetch is removed and only `cf-ipcountry`, `x-vercel-ip-country`, `x-country-code` and `x-appengine-country` are read. `supabase/config.toml` adds `[functions.geo-detect]` and `[functions.intl-lead]` with `verify_jwt = false`. Lovable reports anonymous 200s (not re-tested here) |
| 6 | Explicit time-zone sets; CH out; DOMs in | **PASS** | `EUR_TIMEZONES` covers all 40 listed zones, and `Asia/Jerusalem` / `Tel_Aviv` → IL. The generic `Europe/*` rule is gone. `FRENCH_COUNTRIES` has no CH and includes GP…WF. Minor: any other `America/*` → `US` → "$850" (Mexico, Brazil and others should see "US$850") |
| 7 | Price format by language + country; no flash | **PASS** | `usePrice.js` `formatPrice`: `€750` / `$850` / `US$850` / `750 €` / `850 $ US`. Currency is no longer initialised to USD. `PriceSkeleton` shows in the hero chip and the pricing card while `loading` |
| 8 | Israel: Hebrew RTL banner, card replaces price, TZ fallback | **PARTIAL** | Done: `IsraelBanner` has `dir="rtl" lang="he"` with the exact approved text and href; the hero chip and pricing card are swapped for `pricing.israel_card` when `isIsrael`; the TZ fallback goes through `countryFromTimezone`. **Gap:** `IntlHome.jsx` `resolve()` still fills `{{PRICE}}` in the FAQ payment answer, so IL visitors read "US$850" (and so does everyone while loading) |
| 9 | Region chooser (`zm_region`) | **PASS** | `RegionChooser` offers Eurozone / Other / Israel → Hebrew site, stores `zm_region`, and shows the approved texts and currency notes. Minor: `regionToCountry('usd')` returns US, so a UK visitor who picks "Other" sees "$850" |
| 10 | French typography | **PASS** | Scripted check of `fr.json`: 0 plain spaces before `: ; ? ! »`, 0 straight apostrophes, NBSP/NNBSP kept from the approved file |
| 11 | French and English glossary | **PASS** | Approved terms throughout (té’amim, montée à la Torah, Paracha, appel découverte gratuit, parcours complet, espace parents, 24 h/24). Lovable-authored extras deviate slightly: « Rabbin Asaf Shapira » (glossary rows 19 and 61: « Rav Asaf Shapira ») and « Mur Occidental » (→ « Mur occidental ») |
| 12 | No hard-coded UI strings | **PARTIAL** | Fixed in the intl pages: image alts, aria labels, the "Parashat / Paracha" prefix (hebcal FR names) and the article 404 copy. **Regression:** `LeadForm.jsx` was not touched and calls `t("leadForm.title")`, `leadForm.name`, `leadForm.submit` and so on, keys that no longer exist (the new key is `lead_form.*`), so `t()` renders the raw key. `CheckoutButton.jsx` has the same problem with `checkout.comingSoon` and `nav.bookConsultation`, and `IntlArticles.jsx` with `articles.allCategories`. The catch-all `*` → `src/lib/PageNotFound.jsx` is Hebrew ("הדף לא נמצא") |
| 13 | No geo auto-navigate; suggestion bar; switcher links | **PASS** | The auto-navigate effect is deleted from `I18nContext.jsx`. `LanguageSuggestion` is dismissible and appears only without a saved choice, in the detected language. `LanguageSwitcher` uses `<a hrefLang lang>` for English · Français · עברית, with no flags |
| 14 | `lang`/`dir`; absolute URLs; conditional alternates | **PASS** | `index.html` is `lang="en" dir="ltr"`. `intlSeo.js` builds canonical, og:url and hreflang from `window.location.origin`; `hasAlternate` drives the other-language link and `noindex` the robots meta. Note: everything is client-side only, and `hreflang="he"` always points at the Hebrew home page, even from article pages |
| 15 | Sitemap + robots; 404 noindex | **PARTIAL** | `IntlArticlePage` sets `noindex` for untranslated slugs. **Not done:** `public/sitemap.xml` and `public/robots.txt` are unchanged; robots still has `Sitemap: https://zoomitzvah.co.il/sitemap.xml` |
| 16 | Category labels from the locale files | **PASS** | `intlArticleBody.js` `CATEGORY_KEY` → `articles.categories.*`; the Hebrew `category_label` is no longer shown (source `category` slugs such as `tefillin` map correctly). Only the "All" chip has a key problem (#12) |
| 17 | Link rewrite; Hebrew video label; legal block | **PASS** | `processArticleBody`: `/articles/<slug>` becomes `/<lang>/articles/<slug>` when translated and is unwrapped otherwise; YouTube iframes get the "Video in Hebrew / Vidéo en hébreu" caption; `small.zm-legal` is removed |
| 18 | DOMPurify | **PASS** | `dompurify ^3.4.17`; `DOMPurify.sanitize(…, {ADD_TAGS:["iframe"]})`. Polish: limit iframe `src` to youtube(-nocookie) |
| 19 | Draft → review → publish; Hebrew auto-flag | **FAIL** | `supabase/functions/translate-article/index.ts` is unchanged: it still upserts `status: 'published'`. `IntlTranslations.jsx` is unchanged: no preview or Publish button, no `needs_review` |
| 20 | Glossary in `LANG_RULES` | **FAIL** | Unchanged. The FR rule still says « paracha, Haftara, téfilines, aliya », which actively instructs the banned forms |
| 21 | "Growing library" wording | **PASS** | The 4 deviations from the approved copy are exactly this (benefits item, `articles.intro`, `pricing.includes[8]`). Owner check: "new translations added every week" |
| 22 | Hero image without the Dome of the Rock | **PASS** (visual) | The owner's 1920px screenshot shows the Kotel (binary files not diffed). Polish: `images.hero_alt` still says "A rabbi in Jerusalem teaching a student over Zoom" |
| 23 | Gold text token | **PASS** | `--intl-gold-text: 37 65% 30%` (≈ #7E5A1B, about 5.4:1 on #F3EBDD), used for kickers, "Read the guide" links, expertise text and links. Polish: `text-intl-ink/50` at `text-xs` (currency note, detected location) is about 3.3:1 |
| 24 | Reduced motion on anchor scroll | **PASS** | `IntlHome.jsx`: `behavior: reducedMotion() ? "auto" : "smooth"` |
| 25 | Lead form: consent, privacy, honeypot, rate limit, ISO-2, timezone/currency/source, KPI | **FAIL** | `LeadForm.jsx` and `intl-lead/index.ts` are unchanged: free-text country, no consent or privacy link, no honeypot, no rate limit, no timezone/currency/source, and `trackEvent("consultation_booked")` is never called (the helper exists in `intlTracking.js`). The `/privacy`, `/terms` and `/accessibility` draft pages exist, but `IntlPrivacy.jsx` reads `useParams().slug` while the routes have no `:slug`, so all three show the privacy text |
| copy | Approved copy, word for word | **PASS** | Scripted diff of `src/i18n/{en,fr}.json` against `content/landing.{en,fr}.json`: **309/309 approved keys present, 0 missing, 4 changed (all from fix #21)**, plus 57 technical keys (rabbi cards, `lead_form`, legal pages, alts). EN/FR keys are identical (366/366) |

### Placeholders
`{{PRICE}}` is resolved in the FAQ, `{{COUNTRY}}` in "Detected location", and `{{YEAR}}` in the footer. The `{{CTA_URL}}`, `{{ENROL_URL}}`, `{{ASSISTANT_URL}}` and `{{PARENTS_GUIDES_URL}}` keys sit only in `.href` fields that the components don't render; they hard-code `#contact`, `CheckoutButton` and `/<lang>/articles` instead. **No raw `{{…}}` reaches the screen.** Raw *key* names do, though (see #12).

### Safety re-check: PASS (no cap)
- **No Grow/Meshulam checkout in the client:** the funnel pages are no longer imported. The only remaining `pay.grow.link` string is a Gmail search filter inside `public/grow-gmail-bridge.gs`, which is not a checkout link, but the file should be deleted.
- **Legacy functions gated (410):** lead-webhook, youtube-lead-webhook, payment-webhook, grow-email-bridge, finalize-registration, contact-form, offer-eligibility and send-abandoned-cart-emails, plus `notifyCrmPaid`.
- **No Hebrew GA or Pixel:** `index.html` is clean. The legacy Hebrew `CookieConsent` only renders on admin pages and loads nothing.
- **No production-secrets request:** removed from `roadmap.md`, and none in the chat.
- **Remaining gaps:** the lead form collects personal data with no consent text or privacy link (GDPR Art. 13, fix #25), and the rabbis' languages are unverified. Both are pre-launch compliance and content items, not a production-data risk.

### Design issue: header wraps at 1920px
- **Cause:** in `IntlLayout.jsx` the desktop `<nav className="hidden items-center gap-5 lg:flex">` holds 7 links, the 3-item `LanguageSwitcher` and the CTA pill. It sits inside `max-w-6xl px-4`, which leaves about 1120px of content even on a 1920px screen.
- **Overflow:** the logo (about 220px), the links (about 515px), 9 gaps of 20px, the switcher (about 170px) and the pill (about 150px) add up to roughly 1,235px.
- **Result:** flex shrinks the items and they wrap: "Why / Jerusalem", "How it / works", "What they'll / learn", "Our / rabbis", the "Zoom Mitzvah" wordmark and "Free consultation". French labels are longer, so `/fr` is worse.
- **Fix (in the Lovable message below):**
  - At most 4 desktop links: How it works · Our rabbis · Pricing · Guides. The rest stay in the hamburger and the footer.
  - `whitespace-nowrap` + `shrink-0` on the links, the wordmark and the pill.
  - Full nav only from `xl` (1280px); hamburger below that.
  - A compact `EN ▾` language menu.
  - `max-w-7xl` for the header container.

### Hero eyebrow
- **Text:** `hero.eyebrow` = "Private Bar & Bat Mitzvah lessons, live from Israel" (FR « Cours particuliers de Bar et Bat Mitsva, en direct d’Israël »). It matches the approved copy **exactly**; the capitals come from `uppercase tracking-[0.25em]`.
- **Judgement:** no build fix needed.
- **Owner decision (Q5):** "from Israel" next to the H1 "from Jerusalem" is a deliberate hedge until the rabbis' location is confirmed. If the rabbis are in Jerusalem, the copy team can change the eyebrow to "live from Jerusalem".

### Director notes (landing)
- **Brand 7:**
  - Kotel hero, limestone and night-blue palette, and the fixed brand promise used everywhere.
  - The broken desktop header and the raw keys in the form undercut the "premium" feel.
- **Marketing 6:**
  - The offer, price, region logic, CTAs, FAQ and new sections (assistant, learning differently, adults) are all present and approved.
  - The single conversion point (the lead form) shows "leadForm.title / leadForm.name *". There is no KPI event.
  - "Ask our assistant now" leads to the consultation form, and the "Parent portal" footer link goes to `#contact`.
- **Language 7.5:**
  - The approved EN/FR copy is used verbatim, and the FR typography is clean.
  - Points lost: raw keys are visible to users, there is a Hebrew 404, and two small FR glossary slips appear in Lovable-authored strings.
- **Design 6:**
  - The header wraps on desktop, the form is unlabeled, and small text at ink/50 is about 3.3:1.
  - Motion and reduced-motion handling are good.
- **Technical 6:**
  - Big improvement in geo, price, i18n, SEO and articles.
  - Still missing: the old keys weren't migrated (no key-coverage check); the legal-page slug bug; the Hebrew catch-all 404; sitemap and robots untouched; `translate-article` untouched (auto-publish, wrong glossary); fix #25 not started.
  - Lovable did not send the requested 1–25 mapping.
- **Safety 8:** every critical round-2 item is fixed. See above for the residual gaps.

---

## Review 2: CRM Stage 1 follow-up (QA table)

Reviewed: commit `c2b4f0c` ("Stage 1 fixes…", 9 files): `db/rollback/0068_…_rollback.sql`, `db/tests/intl_locale/{live_before.sql, before_snapshot.sql, fixture.sql, run.sh, test.sql}`, `drizzle/migrations/0069_intl_country_iso2_check.sql`, plus the meta and journal files. Also read `drizzle/migrations/0068_intl_family_locale_columns.sql`, the four `supabase/migrations` files that Lovable cites, and Lovable's chat report. I did not query the database.

| # | Fix | Result | Evidence |
|---|---|---|---|
| 1 | Prove parity (`live_before.sql`) | **PASS** | Verified from the migration chain: `20251221002724_5e4e93ad…` (both created as `SECURITY DEFINER`, no auth predicate) → `20251227222817_ea7a779a…` (rabbi function recreated as DEFINER + `package_type`) → `20260723223655_ecad6198…` (`REVOKE … FROM anon, public; GRANT … TO authenticated`) → **`20260723232742_bf5a192f…` (`ALTER FUNCTION … SECURITY INVOKER` on both)**. So before 0068 both functions were INVOKER, with the same bodies and the same ACL; 0068 kept that. Nothing needed restoring. `live_before.sql` is a reconstruction, not a `pg_get_functiondef` dump (0068 had already run, and `pg_proc` keeps no history); acceptable, and labelled as such. Lovable also reports live read-only counts: both functions INVOKER, 5 students all linked to a rabbi with the rabbi role. I verified the four cited files, not every migration between 0000 and 0067 |
| 2 | `BEGIN; … COMMIT;` in 0068 | **ACCEPTED DEVIATION** | 0068 already ran in production, so rewriting it changes nothing live and only breaks the file's hash and history. Drizzle's migrator wraps pending migrations in its own transaction, so an inner `COMMIT` would end it early on a fresh run. The rollback has its own `BEGIN/COMMIT`. Caveat: this assumes the deploy runner is drizzle `migrate()`, not a raw `psql -f` |
| 3 | Rollback file | **PASS** | `db/rollback/0068_…_rollback.sql`, in one transaction: drops both triggers and `validate_locale_timezone()`; restores `protect_student_package_fields` (identical to 0068 minus the four `country`/`currency` lines, i.e. the production body); recreates both safe functions with the pre-0068 19/20-column signatures, INVOKER and the original ACL. It keeps the columns and the 0069 checks. `run.sh` applies it and asserts that 2 functions match `before_fn`, are not `prosecdef`, and that 0 timezone triggers remain |
| 4 | Extended tests (14/14) | **PASS** | I counted 14 `PASS` notices in `test.sql`: the original 9, plus insert without timezone → `Asia/Jerusalem`, two loop passes (old columns in order + 4 new, INVOKER/STABLE, `anon=false`, `authenticated=true`), the rabbi can't change country/currency (and sees 1 row), and the ISO-2 check on both tables. The fixture loads `live_before.sql` instead of stubs. Not added: md5 of the protect body vs. the verbatim production copy. Everything runs as superuser, so RLS paths are not exercised |
| 5 | ISO-2 check | **PASS** | New migration `0069_intl_country_iso2_check.sql` adds `CHECK (country IS NULL OR country ~ '^[A-Z]{2}$')` on both tables. Lovable confirmed that no existing row has a country |
| 6 | Post-apply checks | **PARTIAL** | Live checks were counts only (allowed). Role-switched checks were impossible with Lovable's DB access. `roadmap.md` is not updated, and there was no UI smoke test |

### Director notes (CRM)
- **Technical 8.5:** the parity question is settled with evidence, the rollback exists and is tested, the constraint is added and the tests cover what round 2 asked for. Small gaps: no md5 of the protect body, no 0069 undo, and RLS is not exercised in the tests.
- **Safety 9:** no change in security mode or ACL on production RPCs (proven). Hebrew users are unaffected, and the change can be reversed.
- **Language 8:** clear report, correct codes, no customer-facing text yet.
- **Verdict APPROVED.** Polish items (owner: CRM development):
  1. Add a commented, optional 0069 undo (`DROP CONSTRAINT …`) to the rollback file.
  2. Add an md5(`prosrc`) equality test for `protect_student_package_fields` against `db/tests/rls_assignment/fixture.sql` plus the 4 lines.
  3. Record "0068 + 0069 applied" and the live counts in `roadmap.md`, and run a manual UI smoke test with a test rabbi and a test parent account.

---

## LOVABLE_FIX_MESSAGE

```text
ROUND 3. Our QA team and Director scored the build 6.5/10 (up from 4.7). The safety items are now fixed, thank you. 19 of the 25 fixes pass. Below is ONLY what is still open. Do these in order, and do not add features. When you finish, reply with a numbered list mapping each item below to the files you changed, and list anything you could not do.

1. BLOCKING: raw translation keys are visible on the page.
   - src/components/intl/LeadForm.jsx still uses the old keys (leadForm.title, leadForm.subtitle, leadForm.name, leadForm.email, leadForm.phone, leadForm.country, leadForm.childAge, leadForm.barMitzvahDate, leadForm.message, leadForm.submit, leadForm.submitting, leadForm.successTitle, leadForm.successText, leadForm.error). These no longer exist, so visitors see text like "leadForm.title". Switch to the lead_form.* keys that are already in src/i18n/en.json and fr.json (title, subtitle, name, email, phone, country, child_age, bar_mitzvah_date, message, submit, submitting, success_title, success_text, error).
   - src/components/intl/CheckoutButton.jsx: checkout.comingSoon → checkout.coming_soon; nav.bookConsultation → final_cta.cta_primary.label; fallback pricing.cta → pricing.cta_secondary.label.
   - src/pages/intl/IntlArticles.jsx: articles.allCategories does not exist. Add articles.all_categories = "All guides" (EN) / « Tous les guides » (FR) to both locale files and use it.
   - In I18nContext t(): when a key is missing in both languages, return "" and console.warn in development. Never render the key name.
   - Add a test (vitest) that scans src/**/*.jsx for t("…") calls and fails if any key is missing from en.json or fr.json.

2. DESIGN: the desktop header wraps onto two lines.
   - Today, at 1920px, the labels wrap ("Why / Jerusalem", "How it / works", "What they'll / learn", "Our / rabbis"), and so do the "Zoom Mitzvah" wordmark and the "Free consultation" pill. Cause: 7 links + the 3-language switcher + the pill inside max-w-6xl from lg up.
   - In src/components/intl/IntlLayout.jsx:
     a) Desktop nav: only 4 links: how, rabbis, pricing, articles (nav.links.how / rabbis / pricing / articles). Keep all 7 in the mobile menu and the footer.
     b) Add whitespace-nowrap to every nav link, the wordmark and the CTA pill. Add shrink-0 to the logo block and the pill.
     c) Show the desktop nav from xl (1280px) instead of lg. Use the hamburger below xl.
     d) Replace the inline "English · Français · עברית" with a compact language menu button ("EN ▾" / "FR ▾"). Its items stay real <a hreflang lang> links: English, Français, עברית (→ https://zoomitzvah.co.il).
     e) Header container: max-w-7xl, nav gap-6.
   - Check /en and /fr at 1280, 1440 and 1920 px: every label must stay on one line.

3. LEAD FORM (round-2 item 25, not started). Files: src/components/intl/LeadForm.jsx and supabase/functions/intl-lead/index.ts.
   - Add a required consent checkbox using lead_form.consent + a link (lead_form.privacy_link) to /<lang>/privacy.
   - Add a hidden honeypot field; reject the request if it is filled.
   - Rate limit in intl-lead: max 5 submissions per IP per hour and 3 per email per day. Return 429 beyond that.
   - Country: an ISO-2 <select> with names from Intl.DisplayNames in the page language, prefilled from detectCountry().
   - Also send timezone (Intl.DateTimeFormat().resolvedOptions().timeZone), currency (from usePrice), source: "intl". Store them in intl_leads.
   - On success, call trackEvent("consultation_booked", { lang, currency }) from src/lib/intlTracking.js. No PII.

4. LEGAL PAGES and 404.
   - src/pages/intl/IntlPrivacy.jsx reads useParams().slug, but the routes are /:lang/privacy, /:lang/terms and /:lang/accessibility (no :slug). /terms and /accessibility therefore show the privacy text. Pass the page key as a prop from App.jsx (privacy_page / terms_page / accessibility_page).
   - The catch-all "*" renders the Hebrew src/lib/PageNotFound.jsx. Add a route "/:lang/*" inside IntlRoute that renders a localized 404 (articles.not_found_title + a link home) with <meta name="robots" content="noindex">. For any other unknown path, redirect to /<detected lang>/404.

5. ARTICLES WORKFLOW (round-2 items 19 and 20, not started). File: supabase/functions/translate-article/index.ts.
   - Save new translations with status 'draft', not 'published'.
   - Set needs_review = true when the output contains Hebrew letters [֐-׿] outside <blockquote>/<q>.
   - In src/components/admin/IntlTranslations.jsx, add a per-article preview and a "Publish" button that sets status 'published'.
   - Replace LANG_RULES. Today the FR rule tells the model to write « paracha, téfilines, aliya », which are banned. New rules:
     FR: Paracha (capital P), pl. Parachot; Haftara; Téfilines (capital T); Talit; « montée à la Torah » (never « aliya » / « alya »); té’amim (la cantillation); Chabbat; Mazal tov; « le discours (dracha) »; « Rav + prénom » as a title; vouvoiement; non-breaking spaces before : ; ? ! and inside « »; curly apostrophes (’).
     EN: Bar Mitzvah; Torah portion (parasha); leyning; Haftarah; tefillin; tallit; Shabbat; "aliyah (being called up to the Torah)"; "the speech (drasha)".

6. SEO (round-2 item 15, not started).
   - Regenerate public/sitemap.xml for the international domain: /en, /fr, /en/articles, /fr/articles, the legal pages, and every published translation, with xhtml:link hreflang alternates.
   - public/robots.txt must point to that sitemap. Today it still says https://zoomitzvah.co.il/sitemap.xml.
   - In src/lib/intlSeo.js, add hreflang="he" only on the home page, not on article pages.

7. ISRAEL. In src/pages/intl/IntlHome.jsx, resolve() still fills {{PRICE}} in the FAQ payment answer, so IL visitors read "US$850".
   - When price.isIsrael, replace that answer with pricing.israel_card.text + a link to https://zoomitzvah.co.il.
   - While price.loading, do not substitute {{PRICE}}; render the PriceSkeleton inline.
   - Also in src/lib/geo.js, regionToCountry('usd') must not return "US". Keep the detected country when it is non-euro, otherwise use "ZZ", so the price shows "US$850".

8. SMALL CORRECTIONS
   - images.hero_alt: the hero is now the Kotel. EN "The Western Wall (Kotel) in Jerusalem's Old City at golden hour" / FR « Le Kotel, dans la Vieille Ville de Jérusalem, à l’heure dorée ».
   - FR rabbi card names: « Rav Asaf Shapira », « Rav David Amar », « Rav Moshe Goldberg », « Rav Shmuel Abitan » (not « Rabbin … »). images.why_alt FR: « Mur occidental » (lowercase o).
   - The assistant section button "Ask our assistant now" links to the consultation form. Hide that button until a real assistant URL exists (keep the section text).
   - The footer "Parent portal" link points to #contact. Remove it until the portal URL exists.
   - In IntlArticlePage.jsx, the breadcrumb label "Guides" links to /<lang>. Link it to /<lang>/articles.
   - Contrast: text-intl-ink/50 used for small text (currency note, detected location, region note) is about 3.3:1. Use text-intl-ink/70.

9. HYGIENE
   - Delete public/grow-gmail-bridge.gs. It is the Hebrew site's Grow-to-Gmail script and exposes the production project ref.
   - Delete the unused Hebrew funnel page files (src/pages/MainPackage.jsx, GiftCheck.jsx, RegistrationDetails.jsx, PremiumPackages.jsx, YouTubeLanding.jsx, QRPromo.jsx, Home.jsx, Contact.jsx, Gallery.jsx, About.jsx, Articles.jsx, ArticlePage.jsx, src/components/mainpackage/*) and their tests, provided no admin page imports them. Confirm that no "pay.grow.link" or "meshulam" string remains in the built dist/ bundle.
   - DOMPurify: allow iframes only when src starts with https://www.youtube-nocookie.com/ or https://www.youtube.com/embed/ (use a uponSanitizeElement hook).

Do NOT: re-enter production secrets, enable CRM forwarding, add Stripe, change the approved copy beyond what is listed here, or invent statistics, testimonials, customer locations or rabbi languages.
```

---

`HANDOFF → zm-landing-general-manager (landing dev team) and zm-crm-general-manager (CRM dev team, cleared for Stage 2)`
- **What I did:** code-reviewed both Lovable builds read-only (diff `b7d025b→f264be6`, CRM commit `c2b4f0c`, the four cited `supabase/migrations` files); ran a scripted comparison of the site locale files against the approved copy; scored both with the Director rubric; wrote the open-items Lovable message.
- **Open questions (owner):**
  1. The rabbis' actual teaching languages.
  2. The weekly translation cadence.
  3. Q5, Jerusalem vs. Israel (hero eyebrow).
  4. New GA/Pixel IDs.
  5. Whether to keep the "secure online payment / receipt" reassurance while checkout is "coming soon".
- **Files touched:** `zoom-mitzvah-international/scorecards/round-3-builds.md`, `zoom-mitzvah-international/scorecards/round-3-builds.json`.
