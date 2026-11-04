# Zoom Mitzvah International: Geo, Pricing & Language Rules

> **סיכום בעברית לבעלים**
> שפה: צרפתית לצרפת, בלגיה, שווייץ הצרפתית, לוקסמבורג, מונקו, קוויבק (כשאפשר לזהות), מרוקו, תוניסיה והטריטוריות הצרפתיות. כל השאר מקבלים אנגלית. אם שפת הדפדפן היא אנגלית או צרפתית, היא גוברת על המדינה.
> מטבע: €750 ב-21 מדינות גוש האירו (כולל בולגריה מ-2026) ובמדינות שמשתמשות באירו (מונקו, אנדורה ועוד). $850 בכל השאר, כולל בריטניה, שווייץ וקנדה.
> המטבע נקבע לפי מדינה בלבד, לעולם לא לפי שפה. מבקר מקוויבק רואה צרפתית ומחיר ב-$ US.
> תצוגה: באנגלית "€750" / "$850" (בקנדה ובאוסטרליה "US$850"), ובצרפתית "750 €" / "850 $ US" עם רווח שאינו נשבר.
> אם זיהוי המיקום נכשל, משתמשים באזור הזמן של הדפדפן ובשפה שלו. אם גם זה לא עוזר, ברירת המחדל היא אנגלית ו-$850.
> מבקרים מישראל מקבלים באנר בעברית וקישור ל-zoomitzvah.co.il, וכרטיס המחיר מוחלף בהפניה לאתר העברי. אין הפניה כפויה (חשוב ל-SEO).

---

## 1. Principles
1. **Language and currency are decided separately.** Language follows the *person* (browser language, then country); currency follows the *country* only. A francophone in Montreal sees French copy and **US$** pricing.
2. **One price per visitor.** Never show €750 and $850 together on the landing page.
3. **The URL is the source of truth for language.** `/en/...` always renders English and `/fr/...` always renders French. Detection only *suggests* or picks the default at the root `/`. Nobody gets trapped, and search engines can crawl both versions.
4. **The visitor can always override.** There is a language switcher on every page and a region link in the price note.
5. **Fail safe:** if nothing is known, show English and US$850.

---

## 2. Country → language

ISO 3166-1 alpha-2 codes. "Region" means the ISO 3166-2 subdivision, where the hosting edge provides it.

| Country / region | Code | Default language | Notes |
|---|---|---|---|
| France (metropolitan) | FR | **FR** | |
| French overseas departments & collectivities | GP, MQ, GF, RE, YT, PM, BL, MF, NC, PF, WF | **FR** | IP databases usually report these separately from FR |
| Belgium | BE | **FR** | Browser `nl`/`en` → EN (Antwerp/Flanders; see §4) |
| Switzerland, French-speaking cantons | CH + region GE, VD, NE, JU | **FR** | Geneva, Vaud, Neuchâtel, Jura |
| Switzerland, bilingual cantons | CH + region FR (Fribourg), VS (Valais), BE (Bern) | Browser language decides; if neither en/fr → **EN** | Note: the region code "FR" here is the *canton of Fribourg*, not France |
| Switzerland, other cantons / unknown region | CH | **EN** unless browser is `fr` | Zurich, Basel etc. are German-speaking |
| Luxembourg | LU | **FR** | Browser `en`/`de` → EN (see §4) |
| Monaco | MC | **FR** | |
| Canada, Quebec | CA + region QC | **FR** | Only if the edge provides the region (see §6) |
| Canada, other / unknown region | CA | **EN** unless browser is `fr` | Time zone can't separate Quebec from Ontario (both `America/Toronto`) |
| Morocco | MA | **FR** | |
| Tunisia | TN | **FR** | |
| Algeria *(optional, owner decision)* | DZ | FR | Not in the brief; low expected volume |
| Israel | IL | → **Hebrew site link** (see §8) | |
| Everyone else | * | **EN** | Including UK, US, AU, ZA, NZ, DE, NL, etc. |

### 2.1 Browser-language override (applies to every country)
Read the visitor's **primary** browser language (`Accept-Language` first tag on the server, or `navigator.languages[0]` on the client):
- If it starts with `fr` → **FR**, wherever they are (e.g., a French family living in New York or Tel Aviv).
- If it starts with `en` → **EN**, wherever they are (e.g., an English-speaking family in Paris).
- Anything else (`de`, `nl`, `ar`, `es`, `he`...) → use the **country default** from the table above.
- If it starts with `he` → keep the chosen EN/FR language, **plus** show a small non-blocking link "האתר בעברית ←" (Israeli-expat parents, persona P6). This does **not** change the price (see §8).

**Why browser language ranks above country:** It reflects the language the person actually reads. IP country reflects only where they are sitting, and IPs can be wrong (VPNs, corporate networks, travel).

### 2.2 Full precedence (language)
```
1. URL path locale (/en/ or /fr/)            → render that language. Stop.
2. Saved choice (cookie zm_lang, 1 year)     → used only at root "/" and for the banner.
3. Browser primary language is en* or fr*    → that language.
4. Country (+ region) map, §2                → default language.
5. Time-zone hint, §5 (geo failed)           → FR for French-speaking zones, else EN.
6. Default                                    → EN.
```

---

## 3. Country → currency & price

### 3.1 EUR, €750
**Eurozone members (21 as of 1 Jan 2026; Bulgaria joined on that date):**
`AT` Austria · `BE` Belgium · `BG` Bulgaria · `HR` Croatia · `CY` Cyprus · `EE` Estonia · `FI` Finland · `FR` France · `DE` Germany · `GR` Greece · `IE` Ireland · `IT` Italy · `LV` Latvia · `LT` Lithuania · `LU` Luxembourg · `MT` Malta · `NL` Netherlands · `PT` Portugal · `SK` Slovakia · `SI` Slovenia · `ES` Spain

**Also priced in EUR, because the euro is their currency:**
- Euro-using non-members: `MC` Monaco · `AD` Andorra · `SM` San Marino · `VA` Vatican City · `ME` Montenegro · `XK` Kosovo (XK is a user-assigned code, but common IP databases use it)
- EU territories reported separately by IP databases: `GP` Guadeloupe · `MQ` Martinique · `GF` French Guiana · `RE` Réunion · `YT` Mayotte · `PM` Saint-Pierre-et-Miquelon · `BL` Saint-Barthélemy · `MF` Saint-Martin · `AX` Åland Islands

> Review this list every January. The next possible joiners are among the remaining non-euro EU states (CZ, PL, SE, HU, RO, DK); none is scheduled at the time of writing `[check annually]`.

### 3.2 USD, $850
**Everyone else**, explicitly including:
- `GB` United Kingdom (GBP, not euro)
- `CH` Switzerland and `LI` Liechtenstein (CHF)
- `CA` Canada, including Quebec (CAD)
- `US`, `AU`, `NZ`, `ZA`, `AR`, `BR`, `MX`, ...
- `MA` Morocco and `TN` Tunisia (French language, USD price)
- `NC` New Caledonia, `PF` French Polynesia and `WF` Wallis & Futuna (they use the CFP franc, not the euro, so they get FR language with **USD** pricing)
- Non-euro EU states: `CZ`, `PL`, `SE`, `HU`, `RO`, `DK`
- `IL` Israel: no price shown on the international site (§8)

### 3.3 Full precedence (currency)
```
1. Israel (country IL, or time zone Asia/Jerusalem when geo failed) → Hebrew-site price card (§8).
2. Geo country known                     → EUR if in the §3.1 set, else USD.
3. Geo failed → browser time zone (§5)   → EUR if it maps to a §3.1 country, else go to 4.
4. Browser locale REGION subtag          → e.g. "fr-FR", "de-AT", "nl-BE" → EUR; "en-GB", "fr-CA", "fr-CH" → USD.
   (Use the region subtag only, never the language: "fr" alone means nothing.)
5. Default                                → USD $850.
```

### 3.4 Charging rule (authoritative)
The landing page *displays* the price. The **checkout charges** it.
- Checkout should determine currency from the **billing country** entered by the payer (or the card's issuing country, if the payment provider exposes it), using the same §3.1 list.
- If checkout's currency differs from what the page showed (VPN, travel), show the correct price **before** the payment step, with a one-line explanation. Never change the amount silently.
- Owner decisions to record: Can a visitor in the US pay in EUR with a European card? (Recommended: billing country decides, full stop.) Are prices tax-inclusive? EU consumer rules generally require consumer prices to be shown tax-inclusive. **Ask the accountant** about VAT on digital/remote educational services sold to EU consumers from Israel. Note also that the EU Geo-blocking Regulation limits *blocking* or *redirecting* EU visitors without consent; our banner-not-redirect approach is aligned, but have counsel confirm. `[legal points UNVERIFIED; professional advice required]`

---

## 4. Edge cases (decided)

| Case | Language | Currency | Why |
|---|---|---|---|
| Quebec, French browser | FR | US$ | Canada is not in the Eurozone |
| Toronto, French browser | FR | US$ | The browser language wins |
| Paris, English browser | EN | € | The browser language wins; currency follows the country |
| Antwerp, Dutch browser | EN | € | Special rule BE + `nl` → EN (note below) |
| Geneva, French browser | FR | US$ | CHF country → USD |
| Zurich, German browser | EN | US$ | |
| London | EN | US$ | |
| Casablanca, Arabic browser | FR | US$ | Country default FR |
| Nouméa (New Caledonia) | FR | US$ | CFP franc, not euro |
| Réunion | FR | € | Euro territory |
| Dublin | EN | € | |
| Tel Aviv, Hebrew browser | EN page + Hebrew banner | Hebrew-site card | §8 |
| New York, Hebrew browser | EN + "האתר בעברית" link | US$ | An expat abroad pays the international price |
| VPN exit in Germany, US person | EN (browser) | € displayed → checkout corrects to US$ by billing country | §3.4 |

**Note on Belgium + Dutch browser:** strictly by §2.1, `nl` falls to the BE country default (FR). Flemish users would rather read English than French, so **add one special rule: BE + browser `nl*` → EN.** The same applies to **LU + browser `de*`/`lb*` → EN**. Those are the only two such exceptions.

---

## 5. Fallback when geo detection fails (time zone + browser language)

Geo can fail: static hosting without edge headers, an IP lookup timing out, privacy relays, or blocked third-party calls. In that case use `Intl.DateTimeFormat().resolvedOptions().timeZone` plus the browser languages.

**Time zones → EUR**
```
Europe/Paris Europe/Brussels Europe/Luxembourg Europe/Monaco Europe/Berlin
Europe/Amsterdam Europe/Vienna Europe/Rome Europe/Madrid Europe/Lisbon
Europe/Dublin Europe/Helsinki Europe/Mariehamn Europe/Athens Europe/Tallinn
Europe/Riga Europe/Vilnius Europe/Bratislava Europe/Ljubljana Europe/Zagreb
Europe/Malta Asia/Nicosia Asia/Famagusta Europe/Sofia Europe/Andorra
Europe/San_Marino Europe/Vatican Europe/Podgorica Atlantic/Madeira
Atlantic/Azores Atlantic/Canary Africa/Ceuta Indian/Reunion Indian/Mayotte
America/Guadeloupe America/Martinique America/Cayenne America/Miquelon
America/St_Barthelemy America/Marigot
```
Kosovo has no dedicated IANA zone (it uses `Europe/Belgrade`, shared with Serbia, which is non-euro), so it gets USD in the fallback. That's acceptable, and checkout corrects it.
**Not EUR:** `Europe/Zurich`, `Europe/London`, `Europe/Busingen` (a German enclave that in practice uses CHF; treat as USD), and all others.

**Time zones → FR language hint** (used only when the browser language is neither en nor fr):
`Europe/Paris`, `Europe/Brussels`, `Europe/Luxembourg`, `Europe/Monaco`, `Africa/Casablanca`, `Africa/Tunis`, `Indian/Reunion`, `Indian/Mayotte`, `America/Guadeloupe`, `America/Martinique`, `America/Cayenne`, `America/Miquelon`, `Pacific/Noumea`, `Pacific/Tahiti`.
`Europe/Zurich` and `America/Toronto` are mixed-language zones, so they fall back to EN unless the browser is `fr`.

**Israel:** `Asia/Jerusalem` (and the legacy alias `Asia/Tel_Aviv`) → Israel handling (§8).

---

## 6. Detection: implementation notes

**Preferred: edge-provided geo headers.** No third-party call, no consent issue, and it's fast. Typical sources (check the exact names against your host's current docs `[UNVERIFIED names; verify]`):
- Cloudflare: `CF-IPCountry` header; in Workers, `request.cf.country`, `request.cf.regionCode` (e.g., `QC`, `GE`) and `request.cf.timezone`.
- Vercel: `x-vercel-ip-country`, `x-vercel-ip-country-region`, `x-vercel-ip-timezone`.
- Netlify Edge Functions: `context.geo.country.code`, `context.geo.subdivision.code`.

**If the site is static (e.g., GitHub Pages):** deploy a tiny edge endpoint `/geo` (for example a Cloudflare Worker) that returns `{country, region, timezone}` from the request metadata. The page calls it with a **1,200 ms timeout**, then falls back to §5. Avoid client-side calls to third-party IP-lookup APIs: they add latency, they're often blocked, and in the EU they may need consent.

**Avoid a flash of the wrong price:** Reserve the price element with a fixed-width skeleton until the currency is resolved. Never render "$850" first and then swap it to "€750". Pages are cached per URL (`/en/`, `/fr/`); the price fragment is resolved per visitor (client-side, or edge-rendered with `Cache-Control: private`).

**Reference logic (client-side, framework-agnostic):**
```js
const EUR = new Set(['AT','BE','BG','HR','CY','EE','FI','FR','DE','GR','IE','IT','LV','LT','LU','MT','NL','PT','SK','SI','ES',
  'MC','AD','SM','VA','ME','XK','GP','MQ','GF','RE','YT','PM','BL','MF','AX']);
const FR_COUNTRIES = new Set(['FR','BE','LU','MC','MA','TN','GP','MQ','GF','RE','YT','PM','BL','MF','NC','PF','WF']);
const FR_CH_CANTONS = new Set(['GE','VD','NE','JU']);
const EUR_TZ = new Set([/* list from §5 */]);
const FR_TZ  = new Set([/* list from §5 */]);
const IL_TZ  = new Set(['Asia/Jerusalem','Asia/Tel_Aviv']);

function decide({ country, region, timeZone, languages }) {
  const primary = (languages?.[0] || '').toLowerCase();
  const isIL = country ? country === 'IL' : IL_TZ.has(timeZone);

  // ---- currency (country only) ----
  let currency;
  if (isIL) currency = 'IL_HEBREW_SITE';
  else if (country) currency = EUR.has(country) ? 'EUR' : 'USD';
  else if (EUR_TZ.has(timeZone)) currency = 'EUR';
  else {
    const regionTag = (languages?.[0] || '').split('-')[1]?.toUpperCase();
    currency = regionTag && EUR.has(regionTag) ? 'EUR' : 'USD';
  }

  // ---- language ----
  let lang;
  const saved = readCookie('zm_lang');                 // 'en' | 'fr' | null
  if (saved) lang = saved;
  else if (country === 'BE' && primary.startsWith('nl')) lang = 'en';
  else if (country === 'LU' && /^(de|lb)/.test(primary)) lang = 'en';
  else if (primary.startsWith('fr')) lang = 'fr';
  else if (primary.startsWith('en')) lang = 'en';
  else if (country) {
    if (FR_COUNTRIES.has(country)) lang = 'fr';
    else if (country === 'CH') lang = FR_CH_CANTONS.has(region) ? 'fr' : 'en';
    else if (country === 'CA') lang = region === 'QC' ? 'fr' : 'en';
    else lang = 'en';
  } else lang = FR_TZ.has(timeZone) ? 'fr' : 'en';

  const showHebrewLink = isIL || primary.startsWith('he');
  return { lang, currency, showHebrewLink, isIL };
}
```
Log `{country, region, timeZone, lang, currency, source: 'edge'|'tz'|'locale'|'default'}` to analytics (no IP address) so the rules can be tuned with real data.

---

## 7. How prices are displayed

| Context | Display | Notes |
|---|---|---|
| EN page, EUR | **€750** | Symbol before, no space |
| EN page, USD, visitor in US | **$850** | |
| EN page, USD, visitor in CA, AU, NZ, SG, HK, or any country whose own currency is called "dollar" | **US$850** | "$" alone would read as the local dollar |
| EN page, USD, visitor in UK, CH, ZA, others | **US$850** (recommended) or $850 | Prefer "US$850" for clarity outside the US |
| FR page, EUR | **750 €** | **Non-breaking space** U+00A0 between number and symbol: `750&nbsp;€` |
| FR page, USD (Quebec, Switzerland, Morocco, Tunisia, FR browser elsewhere) | **850 $ US** | `850&nbsp;$&nbsp;US`; Quebec/Canadian usage puts the symbol after |
| Checkout / receipts | Add the ISO code: "€750 (EUR)", "US$850 (USD)" / « 750 € (EUR) » | Removes any ambiguity at payment |

- No decimals on the landing page ("€750", not "€750.00").
- If the number ever reaches thousands: EN "€1,250"; FR « 1 250 € » with a narrow no-break space (U+202F) as the thousands separator. That's what `Intl.NumberFormat('fr-FR')` produces. Make sure the chosen fonts include U+202F (Inter does; test Fraunces), or fall back to U+00A0.
- Hard-code these exact strings (or use `Intl.NumberFormat` with `maximumFractionDigits: 0` and then test the output), because `Intl` output varies by browser/ICU version (e.g., `fr-FR` USD may render "850 $US").

### 7.1 Currency note (under the price)
| Situation | EN | FR |
|---|---|---|
| EUR | "Price in euros for visitors in the Eurozone." | « Prix en euros pour les pays de la zone euro. » |
| USD (US) | "Price in US dollars." | « Prix en dollars américains. » |
| USD (outside US) | "Price in US dollars. Your bank converts at its own rate." | « Prix en dollars américains (US). Votre banque applique son propre taux de change. » |
| Always appended | "Not in [Country]? **Change region**" | « Vous n'êtes pas en [Pays] ? **Changer de région** » |

**"Change region"** opens a three-option chooser: *Eurozone (€)* · *Other countries (US$)* · *Israel → Hebrew site*. The choice is saved in the cookie `zm_region` and changes only the **displayed** price. Checkout still applies §3.4. Country names in the note are localised (`Intl.DisplayNames`).

---

## 8. Israel visitors → Hebrew site
- **Detection:** country `IL`, or (geo failed) time zone `Asia/Jerusalem`.
- **Behaviour:** No automatic redirect. Show a top banner, `dir="rtl"`, in Frank Ruhl Libre / Hebrew:
  **"נמצאים בישראל? לאתר זום מצווה בעברית ←"**, linking to **https://zoomitzvah.co.il** (the matching page if a Hebrew equivalent exists, otherwise the homepage).
- The **pricing card is replaced** with: "In Israel? Lessons, pricing and registration are on our Hebrew site." / « Vous êtes en Israël ? Les cours, tarifs et inscriptions sont sur notre site en hébreu. » plus the same link. This avoids showing a price that conflicts with the Hebrew site's pricing.
- The rest of the page stays readable in EN/FR, so English- or French-speaking families in Israel can still learn about the program.
- **Hebrew browser outside Israel:** show only a small "עברית" link in the utility bar. Prices remain international.
- Add `<link rel="alternate" hreflang="he" href="https://zoomitzvah.co.il/...">` on pages that have Hebrew equivalents, and reciprocal `hreflang="en"`/`"fr"` links on the Hebrew site.

---

## 9. Manual language switcher
- Placement: the utility bar (top right; it collapses into the menu on mobile) and the footer.
- Labels in each language's own name: **English · Français · עברית** (Hebrew opens the Hebrew site in the same tab). **No flags.** Languages aren't countries, and a French flag alienates Belgian, Swiss and Québécois visitors.
- Each link points to the **equivalent page** in the other language (not the homepage), carries `hreflang` and `lang` attributes, and sets cookie `zm_lang` for one year (`SameSite=Lax`). Under EU rules this is a functional cookie; confirm with counsel whether consent is needed.
- **Suggestion banner** (instead of a redirect): if the URL language differs from the detected language and no `zm_lang` cookie exists, show a dismissible bar in the *detected* language: « Ce site existe en français. **Voir en français** » / "This page is available in English. **View in English**". Dismissing it sets `zm_lang` to the current language.
- **Root `/` only:** may redirect (302, not 301) to `/en/` or `/fr/` based on §2.2, and must exclude known crawlers' user agents from the redirect. `x-default` points to `/en/`.

---

## 10. Lesson times across time zones (supports the "your local time" promise)
- Store every lesson slot in **UTC** and render it with `Intl.DateTimeFormat(lang, { timeZone: userTZ, weekday:'short', hour:'numeric', minute:'2-digit' })`.
- Show "your time" first, with a secondary toggle "Jerusalem time" / « heure de Jérusalem ».
- **Never hard-code offsets.** Israel, the EU and North America change clocks on different dates, so the gap between Jerusalem and New York or Paris changes for a few weeks each spring and autumn. The IANA time-zone database (built into `Intl`) handles this. Reminder emails and messages must also state local time.
- FR time format is 24-hour ("17 h 30" or "17:30"; pick one and use it everywhere). EN-US is 12-hour ("5:30 pm"); EN-UK/AU may use either. Let `Intl` choose based on the locale (`en-US`, `en-GB`, `fr-FR`, `fr-CA`).

---

## 11. QA matrix (test before launch)
Test with a VPN or the edge's geo override for each row, in a clean browser profile.

| # | Simulated country/region | Browser lang | Time zone | Expected lang | Expected price | Hebrew link |
|---|---|---|---|---|---|---|
| 1 | US | en-US | America/New_York | EN | $850 | no |
| 2 | FR | fr-FR | Europe/Paris | FR | 750 € | no |
| 3 | CA-QC | fr-CA | America/Toronto | FR | 850 $ US | no |
| 4 | CA-ON | en-CA | America/Toronto | EN | US$850 | no |
| 5 | GB | en-GB | Europe/London | EN | US$850 (+ conversion note) | no |
| 6 | CH-GE | fr-CH | Europe/Zurich | FR | 850 $ US | no |
| 7 | CH-ZH | de-CH | Europe/Zurich | EN | US$850 | no |
| 8 | BE | nl-BE | Europe/Brussels | EN | €750 | no |
| 9 | BE | fr-BE | Europe/Brussels | FR | 750 € | no |
| 10 | MA | ar-MA | Africa/Casablanca | FR | 850 $ US | no |
| 11 | IL | he-IL | Asia/Jerusalem | EN + Hebrew banner | Hebrew-site card | yes |
| 12 | US | he-IL | America/Los_Angeles | EN | $850 | small link |
| 13 | *geo fails* | de-AT | Europe/Vienna | EN | €750 (via TZ) | no |
| 14 | *geo fails* | fr | America/Toronto | FR | 850 $ US | no |
| 15 | *geo fails* | en | (unknown) | EN | $850 | no |
| 16 | BG | bg-BG | Europe/Sofia | EN | €750 | no |
| 17 | NC | fr-FR | Pacific/Noumea | FR | 850 $ US | no |
| 18 | Any, cookie zm_lang=fr | en-US | any | FR at `/`; `/en/` still EN | per country | — |
| 19 | Googlebot UA at `/` | — | — | No redirect; `/en/` and `/fr/` both crawlable | — | — |
| 20 | `prefers-reduced-motion` + slow 3G | any | any | No price flash (skeleton → final) | — | — |
