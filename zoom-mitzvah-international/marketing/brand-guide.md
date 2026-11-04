# Zoom Mitzvah International: Brand Guide

> **סיכום בעברית לבעלים**
> האווטאר: משפחה יהודית בחו"ל שרוצה שהילד (או ההורה עצמו) ילמד תורה לבר/בת מצווה או קריאה בתורה, עם רב ישראלי מירושלים שמדבר את שפתה.
> המראה: מודרני ועריכתי, לא "תבנית". הפלטה לפי הבריף: אבן ירושלמית #F3EBDD, כחול-לילה ירושלמי #0F1E3A וזהב #C9A24A. לטקסט בצבע זהב על רקע בהיר נוסף זהב כהה (#7D5A1E). כל צבע נבדק לניגודיות נגישות.
> טיפוגרפיה: Fraunces לכותרות, Inter לטקסט, Frank Ruhl Libre לעברית. לטעמי המקרא צריך לבדוק פונט שתומך בהם.
> צילום: רק תמונות אמיתיות של ירושלים, של הרבנים ושל ילדים בבית (בהסכמה בכתב). בלי סטוק גנרי ובלי תמונות מהכותל בשבת.
> תנועה: עדינה ואיכותית (הופעה הדרגתית, פרלקסה קלה בגיבור), עם כיבוי מלא כשהמשתמש ביקש "הפחתת תנועה".
> שימו לב: יש להתייעץ משפטית לגבי השימוש במילה Zoom בשם המותג בשווקים בינלאומיים (סימן מסחרי).

---

## 1. Brand essence

### 1.1 The avatar (ideal customer)
> **A Jewish family living outside Israel (in New Jersey, Toronto, London, Melbourne, Johannesburg, Paris, Lyon, Brussels, Geneva or Montreal) who wants their child, or themselves, to learn Torah for a Bar/Bat Mitzvah or to read from the Torah, taught by an Israeli rabbi who lives in Israel/Jerusalem and speaks their language.**

What they feel before finding us: *"We want this to be real and meaningful, but we're far from Israel, far from a good teacher, and short on time."*
What they should feel after the first lesson: *"Our child has a rabbi in Jerusalem who gets him, and we can see the progress."*

(Composite profile only. It does not describe any real customer. See `../research/audience-and-market.md` for the six personas.)

### 1.2 Brand idea
**"Jerusalem, at home."** / **« Jérusalem, à la maison. »**
Two worlds meet: the ancient stone city and the family's ordinary kitchen table. Every visual and verbal choice should hold both: **timeless + intimate**.

Brand attributes: **Rooted** (Jerusalem, tradition) · **Warm** (patient rabbis, family) · **Clear** (your language, simple steps) · **Crafted** (editorial quality, nothing cheap).

### 1.3 Name & wordmark
- Full name: **Zoom Mitzvah International**. In running copy after the first mention: **Zoom Mitzvah**.
- **Legal flag:** "Zoom" is a registered trademark of Zoom Video Communications. Expanding the name into the US/EU/UK raises trademark exposure. Get trademark advice before investing in international brand assets. Never use Zoom's logo, blue or app-icon styling. Write "lessons on Zoom" as a plain descriptive phrase.
- Wordmark direction: "Zoom Mitzvah" set in Fraunces (soft, opsz high, medium weight). A small gold detail is allowed, e.g. the dot of the "i" as a small square reminiscent of a cut Jerusalem stone. A secondary Hebrew lockup can set "זום מצווה" in Frank Ruhl Libre beneath. Avoid literal icons (Star of David inside a video-camera, laptop-with-kippah); they read as template clip-art.
- **Minimum size:** the wordmark is at least 120px wide on screen (and 30 mm in print). Below that, use the monogram.
- **Clear space:** keep empty space around the wordmark equal to the cap height of the "Z" on every side. Nothing (text, photo edge, button) enters that zone.
- **Monogram (favicon, WhatsApp/social avatars, app icon):** a square "ZM" in Fraunces, limestone `#F3EBDD` on night `#0F1E3A`, with the gold `#C9A24A` stone-square detail. Export at 512×512 (social/WhatsApp, which crops to a circle, so keep the letters within the central 70%), 180×180 (apple-touch-icon) and 32×32 / 16×16 plus SVG (favicon; at 16px drop the gold detail if it blurs).
- **Backgrounds:** use the night wordmark on limestone/stone, and the limestone wordmark on night or on dark photo overlays. Never put it on a busy photo without the overlay.

---

## 2. Colour: "Jerusalem stone"

| Token | Name | Hex | Use |
|---|---|---|---|
| `--limestone` | Limestone | `#F3EBDD` | Main page background (warm, never pure white) |
| `--stone` | Jerusalem stone | `#E4D6BE` | Cards, alternating sections, input backgrounds |
| `--sand` | Sand shadow | `#CDB892` | Dividers, borders, illustration fills |
| `--night` | Jerusalem night | `#0F1E3A` | Headlines on light; dark sections (hero overlay, footer, final CTA) |
| `--ink` | Ink | `#1B1F27` | Body text on light backgrounds |
| `--gold` | Gold (decorative) | `#C9A24A` | Accents on **dark** backgrounds; rules, icons, large display numerals |
| `--gold-deep` | Deep gold (text-safe) | `#7D5A1E` | Gold-toned text/links on **light** backgrounds (an addition to the brief's palette, needed for accessibility) |
| `--olive` | Olive leaf | `#5E6B4E` | Rare secondary accent (tags, success states) |
| `--mist` | Dusk mist | `#B9C2D0` | Secondary text on night backgrounds |

**Source of the three core values:** limestone `#F3EBDD`, night blue `#0F1E3A` and gold `#C9A24A` are the exact values fixed in the landing brief (must-have 5). The guide uses them unchanged. The other tokens (stone, sand, ink, olive, mist, deep gold) are supporting shades added by Marketing. Deep gold exists because the brief's gold fails as text on limestone (2.03 : 1).

### Measured contrast (WCAG 2.x, computed with the brief's values)
| Pair | Ratio | Verdict |
|---|---|---|
| Ink on Limestone | 13.95 : 1 | AAA body text |
| Night on Limestone | 14.00 : 1 | AAA |
| Night on Stone | 11.57 : 1 | AAA |
| Limestone on Night | 14.00 : 1 | AAA |
| Mist on Night | 9.23 : 1 | AAA |
| Gold on Night | 6.91 : 1 | AA normal text; fine for buttons/links on dark |
| Night on Gold (button label) | 6.91 : 1 | AA; primary-button text |
| Olive on Limestone | 4.81 : 1 | AA normal text |
| Deep gold on Limestone | 5.29 : 1 | AA normal text |
| Deep gold on Stone | 4.37 : 1 | **Large text only** (≥ 24px / 19px bold) |
| **Gold on Limestone** | **2.03 : 1** | **Fails. Never use for text; decoration only** |

### Colour rules
- Proportion roughly **70% limestone/stone · 20% night/ink · ≤ 10% gold**. Gold is a jewel, not a paint.
- Primary button: `--gold` fill + `--night` label on dark sections. On light sections: `--night` fill + `--limestone` label, with a gold underline on hover.
- No gradients except one: the hero photo's overlay, from `rgba(15,30,58,.75)` (night `#0F1E3A` at 75%) (bottom) to transparent (top), to keep the H1 readable over golden-hour photos.
- Dark mode (optional): swap to `--night` background with `--limestone` text and `--gold` accents. The palette already works both ways.

---

## 3. Typography

| Role | Typeface | Why | Settings |
|---|---|---|---|
| Display / headings (Latin) | **Fraunces** (variable, Google Fonts, OFL) | Editorial, warm "old-style with personality"; the optical-size axis gives refined large headlines | H1 clamp(2.5rem, 6vw, 4.5rem), weight 500–600, `opsz` auto, `SOFT` 50, letter-spacing −0.01em, line-height 1.05 |
| Body / UI (Latin) | **Inter** (variable, OFL) | Highly legible at small sizes and complete French diacritics | 17–18px body, line-height 1.6, max 68ch |
| Hebrew accents | **Frank Ruhl Libre** (Google Fonts, OFL) | Classic Israeli serif, harmonises with Fraunces | Hebrew words (בר מצווה, parasha names), pull-quotes, the Hebrew lockup |
| Hebrew with cantillation (te'amim) | **Test before choosing:** Noto Serif Hebrew, Ezra SIL, Taamey Frank CLM | Trope and guide pages show cantillation marks (U+0591–U+05AF); coverage and stacking quality vary by font `[verify with real verses on Chrome/Safari/iOS/Android]` | Only on guide pages and the trope section, size ≥ 1.4× body |

Alternatives if the owner prefers: **Cormorant Garamond** (display, more classical; weaker at small sizes) and **Manrope** (body, more geometric). Neither Inter nor Manrope covers Hebrew, which is why Frank Ruhl Libre is mandatory for any Hebrew text. Always wrap Hebrew in `<span lang="he" dir="rtl">` so screen readers and bidi rendering behave.

**Typographic rules**
- French: non-breaking space before `: ; ! ?` and inside « ». Use `&nbsp;` or a build-time typography filter. Use proper apostrophes (’) in "té’amim".
- Use real small caps or tracking (+0.08em) only for eyebrow labels ("FROM JERUSALEM", « DEPUIS JÉRUSALEM »).
- Numbers in prices use Fraunces lining figures, large, with the currency sign smaller (60%).
- Self-host or preload fonts with `font-display: swap` and subset by language: Latin-ext for FR, Hebrew subset only for Frank Ruhl Libre.

---

## 4. Photography & imagery

### 4.1 The three subjects
1. **Jerusalem, real and specific.** Old City limestone walls at golden hour; the Western Wall (Kotel) plaza at a respectful distance; Jerusalem rooftops with water tanks and domes at dusk; narrow stone alleys in the Jewish Quarter; the stone texture itself as a background.
   - Prefer **commissioned or properly licensed** photos by a Jerusalem photographer. Keep the licence on file.
   - Times: golden hour and blue hour. Warm highlights should echo `--gold`, blue shadows `--night`.
2. **The rabbis teaching, warm and human.** Each rabbi at their own desk in Jerusalem (a window with stone or a bookshelf of sefarim behind them), mid-explanation, smiling, a sefer or a tikkun open. Shoot both a "screen view" (as the child sees it) and a "behind the laptop" view.
   - Real rabbis only, with signed release. **No stock "rabbi" models** and no AI-generated rabbis.
3. **The child (or adult) at home abroad.** At the kitchen table or in a bedroom, laptop open, the rabbi on screen; a parent in the background; local cues (a window with snow, a suburban street, a Paris balcony) that say "far from Israel".
   - Minors: **written parental consent**, and a stated use scope (web/ads/duration). Prefer over-the-shoulder or profile shots. No full names of children.

### 4.2 Accuracy checks (a rabbi reviews every image before use)
- Tefillin worn correctly: arm tefillin on the upper arm (left arm for a right-handed person), head tefillin above the hairline and centred, straps black side out. Stock photos often get this wrong.
- **No photos of people at the Kotel taken on Shabbat or Yom Tov** (photography is not done then). Avoid any image showing Shabbat desecration.
- Tallit, kippah and modest dress consistent with a broad range of families. Show diversity of observance where possible (with and without kippah for the child at home).
- Don't put mixed-gender scenes at the Kotel prayer area in ways that could offend; wide plaza shots are safer.
- No Zoom UI chrome or Zoom logo in the imagery. Use a neutral generic video-call frame.

### 4.3 Treatment
- Natural colour with a slight warm grade; no heavy filters or HDR.
- Crops are generous, with negative space for copy. Use asymmetrical, editorial layouts (image bleeding off one edge, text column on the other).
- One recurring graphic motif: a thin gold rule plus a **stone-block grid** (subtle, 4% opacity) referencing ashlar masonry. Use sparingly.
- Formats: AVIF/WebP with JPEG fallback, `srcset`, hero ≤ 250 KB at 1600px, lazy-load below the fold, always with descriptive `alt` text in the page language.

### 4.4 Never
- Generic stock "happy family on laptop" with no Jewish or Jerusalem context.
- Clip-art Stars of David, menorahs as decoration, or Hebrew "fake" lettering.
- AI-generated images of real places presented as photographs, or of people presented as our rabbis or students.
- Israeli flags or political imagery as decoration. The connection is to Jerusalem and Torah, not politics.

---

## 5. Layout principles ("editorial, not template")
- A 12-column grid with **intentional asymmetry**: alternate full-bleed photo sections with narrow text columns.
- Large type scale contrasts (huge H1, modest body), and generous whitespace (section padding 96–160px desktop, 64–96px mobile).
- Section headers with a small eyebrow label, a Fraunces heading and a lead paragraph. Avoid three-identical-icons rows; when listing features, use numbered editorial lists or image-led cards of varied sizes.
- Cards: `--stone` background, 2px radius (stone blocks, not bubbly), hairline `--sand` border, no drop shadows (or one very soft shadow on hover only).
- Icons: a thin-stroke custom set (1.5px), drawn in `--night` / `--gold`. No emoji in the UI.
- RTL care: Hebrew snippets inside LTR layouts must not break alignment. Test parasha names like "בְּרֵאשִׁית".

---

## 6. Motion principles
**Purpose:** Motion conveys calm quality and guides attention. It never entertains for its own sake.

| Element | Behaviour | Spec |
|---|---|---|
| Section reveal | Fade + slide up | opacity 0→1, translateY 16→0px, 600ms, `cubic-bezier(.2,.7,.2,1)`, triggered at 15% visibility, once only |
| Staggered lists/cards | Sequential reveal | 70ms stagger, max 6 items (then reveal together) |
| Hero | Slow parallax on the Jerusalem photo | Background moves at ~0.85× scroll speed (translate3d, max 60px total); text static |
| Hero (optional) | Very slow "breathing" zoom | scale 1.00→1.04 over 20s, ease-in-out, plays once |
| Buttons/links | Hover | 150–200ms colour + gold underline grow (scaleX 0→1 from left; from right in RTL) |
| Parasha finder result | Card unfold | height/opacity 300ms, then the Hebrew name fades in |
| Local-time demo | Number tick | Time changes cross-fade (200ms), no spinning digits |

**Rules**
- Animate only `transform` and `opacity` (GPU-friendly). No layout-thrashing animations. Target 60fps on mid-range Android.
- **No scroll-jacking**, no autoplay video with sound, no cursor followers, no bouncing CTAs, no confetti, no typewriter headlines.
- Content must be visible without JS: initial CSS must not hide content unless the `.js` class is present.
- **`prefers-reduced-motion: reduce`** disables parallax, zoom, slide offsets and staggers. All motion becomes instant, except elements with the `.fade` class, which keep a plain ≤150ms opacity fade (no movement). The CSS below implements exactly this rule.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    transition-delay: 0s !important;
    scroll-behavior: auto !important;
  }
  .parallax, .reveal { transform: none !important; }
  /* the only exception: a short opacity-only fade */
  .fade {
    transition-property: opacity !important;
    transition-duration: 150ms !important;
    transform: none !important;
  }
}
```

---

## 7. Voice snapshot (full detail in `strategy.md` §3)
- EN: warm, calm, competent; "your rabbi", "your portion", "step by step".
- FR : sobre, chaleureux, vouvoiement ; « votre rav », « sa paracha », « pas à pas ».
- Hebrew appears as an accent (parasha names, a single line like «ירושלים»), never as untranslated body text.

---

## 8. Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Use real photos of Jerusalem and of our real rabbis (with releases) | Use stock rabbis, AI-generated people, or fake "student" photos |
| Show local time for lessons ("Tue 5:30 p.m. your time") | Show Israel time to diaspora families without conversion |
| Say "120+ guides in English" / « plus de 120 guides en français » | Say "hundreds of articles" without "in English and French" |
| Use the family's vocabulary (Bar Mitsva/paracha in FR; Torah portion/trope in US; shul/leining in UK) | Mix FR and US spellings on the same page |
| Present ADHD/dyslexia support as patient, adapted 1:1 teaching | Make therapeutic or outcome promises, or label children |
| Keep gold to ≤ 10% of the surface; text in gold only on dark backgrounds (or deep gold ≥ 16px on light) | Put `#C9A24A` text on limestone (2.03:1 fails) |
| Respect every denomination; "your family's tradition" | Imply one "correct" way, or judge observance |
| Ask a rabbi to check every religious image and term | Publish tefillin/Kotel/Shabbat imagery unchecked |
| Respect `prefers-reduced-motion`; keep motion subtle | Scroll-jack, auto-play sound, or use gimmicky effects |
| Show one price in the visitor's currency, with a clear note | Show € and $ side by side (invites arbitrage comparisons) |
| Use "Zoom" only descriptively | Use Zoom's logo, colours or app styling |
| Use honest placeholders ("Rabbi bios coming soon") until real content arrives | Invent rabbi names, testimonials, ratings or student counts |
