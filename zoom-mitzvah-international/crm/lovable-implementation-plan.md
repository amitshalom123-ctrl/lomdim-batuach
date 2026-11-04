<!-- Source: Lovable plan-mode answer in project "זום מצווה crm" (82b65911-…), commit f11c7a99. Saved by the CRM research team. Status: AWAITING OWNER APPROVAL. No CRM code has been changed. -->

# תוכנית: אנגלית וצרפתית בחלקים שהלקוחות רואים בלבד (בלי שכפול ה-CRM)

**מה מצאנו בקוד היום:**
- אין במערכת ספריית תרגום.
- ל-`students` ול-`rabbi_profiles` כבר יש עמודת `languages`.
- השיעורים נשמרים בשני שדות, `lessons.scheduled_date` ו-`scheduled_time`, בלי אזור זמן. הקוד מניח שהשעה היא שעון ירושלים.
- כל ההודעות עוברות דרך `notifications_queue`, ו-`process-notifications` שולח אותן.

**כללים קבועים:**
- הממשק של המנהל והממשק של הרבנים נשארים בעברית.
- שינויים במסד הנתונים מוסיפים בלבד.
- כל רשומה קיימת מקבלת `he` ונשארת בדיוק כמו שהיא.
- לא שולחים שום הודעה ולא מפרסמים בלי אישור לכל שלב.

## 1. נתונים (מיגרציה שמוסיפה בלבד)
בטבלה `public.students` יתווספו ארבע עמודות:
- `preferred_language`: אחד מ-he, en, fr. ברירת המחדל he.
- `country`: קוד ISO-2.
- `timezone`: ברירת המחדל Asia/Jerusalem. הערך נבדק בטריגר.
- `currency`: אחד מ-ILS, EUR, USD. ברירת המחדל ILS.

בנוסף:
- אותן ארבע עמודות יתווספו גם ל-`pending_paid_customers`, כשכולן רשאיות להיות ריקות.
- רשומות קיימות מקבלות את ערכי ברירת המחדל בלי UPDATE.
- ההורה יכול לשנות רק את השפה ואת אזור הזמן. את המדינה ואת המטבע קובעים רק המנהל או תהליך ייבוא הלקוח, והטריגר הקיים `protect_student_package_fields` אוכף את זה.

## 2. תשתית תרגום לפורטל התלמיד וההורה
- **קבצים חדשים:** `src/i18n/{he,en,fr}.json`, ו-`I18nProvider` עם הפונקציה `useT()`. כשחסר תרגום, הטקסט יוצג בעברית.
- **כיוון ושפה:** `dir` ו-`lang` נקבעים רק בתוך מעטפת הפורטל, לא על כל האתר.
- **מסכים:**
  - `Auth`
  - הענף של התלמיד או ההורה ב-`Dashboard`
  - `StudentDashboard`
  - `StudentZoomLinkBanner`
  - `StudentContactRabbi` ו-`StudentContactAdmin`
  - `AiAssistantFab`
  - `StudentTutorial`
  - `StudentAssistant`
  - `ParentFeedback` ו-`TrialFeedback`
  - `Testimonials`
- **דפים משפטיים:** יתורגמו רק אחרי שיתקבל נוסח מאושר.

## 3. אזורי זמן
- השעה נשמרת כמו היום, לפי ירושלים.
- `src/lib/familyTime.ts` ו-`_shared/family-time.ts` מציגים את השעה בשני אזורים, למשל "17:00 ירושלים · 10:00 New York", רק אצל משפחות שגרות מחוץ לישראל.
- יש בדיקות למעבר בין שעון חורף לשעון קיץ.

## 4. עוזר ה-AI
- השפה נקבעת בשרת לפי `students.preferred_language`.
- השינוי נעשה בחבילת `zoom-mitzvah-knowledge`.
- המטמון נשמר בנפרד לכל שפה.
- נוסף `referral_text_en` ו-`referral_text_fr` ב-`ai_assistant_settings`.
- אחרי השינוי מריצים שוב את מבחן הכיול.

## 5. הודעות ללקוחות (מייל, SMS ו-WhatsApp)
**הפונקציות ששולחות הודעות ללקוחות:**
- `import-external-customer`, `sync-external-customers`
- `recover-password`, `reset-user-password`
- `schedule-first-lesson`, `notify-manual-lesson`
- `send-lesson-reminders`, `send-lesson-cancellation`
- `swap-rabbi-same-schedule`, `reassign-orphaned-students`
- `send-zoom-link-to-students`
- `notify-lesson-summary`
- `send-trial-reminder`, `check-trial-completion`, `trial-upgrade-payment`, `trial-feedback`
- `send-parent-feedback-emails`, `parent-feedback`
- `notify-admin-to-student-message`, `notify-student-rabbi-message`
- `check-recording-deletion`
- `admin-preview-parent-emails`
- 16 תבניות WhatsApp ב-Meta
- טריגרים במסד הנתונים שמכניסים הודעות לתור

**איך זה עובד:**
- `renderCustomer(type, lang, vars)` בונה את ההודעה.
- כשהשפה היא `he`, הקוד הקיים רץ כמו שהוא, ובדיקת snapshot מוודאת שהטקסט זהה בייט-לבייט.
- כשהשפה היא en או fr, הטקסט נלקח רק מנוסח מאושר. לעולם לא נשלח תרגום אוטומטי.
- `email-brand.ts` יקבל פרמטר כיוון.

## 6. שיבוץ רבנים לפי שפה
- כשהשפה אינה עברית, `_shared/rabbi-matching.ts` משבץ רק רב שמדבר את השפה. זה תנאי חובה.
- יש מיפוי בין השמות השונים של אותה שפה ("אנגלית", English, en).
- במסך המנהל יש סינון לפי שפה.

## 7. לידים מהאתר הבינלאומי
- `paid-customer-push` מקבל חמישה שדות חדשים, כולם אופציונליים: `language`, `country`, `timezone`, `currency`, ו-`source='intl'`.
- כל שדה נבדק מול רשימה סגורה של ערכים מותרים, וערך שאינו ברשימה מחזיר 400.
- כשהשדות חסרים, המערכת מתנהגת כמו היום.

## 8. סיכונים
- הודעה עברית שתשתנה בטעות. בדיקות snapshot מכסות את זה.
- כיוון RTL או LTR שידלוף לממשק המנהל או הרבנים. הכיוון מוגבל למעטפת הפורטל.
- טעויות בשעון קיץ. יש לזה בדיקות.
- חיוב במטבע זר דרך Grow עוד לא נבדק.
- לא בדקנו אם SMS4Free שולח לחו"ל.
- תבניות WhatsApp חדשות צריכות אישור של Meta.
- עוזר ה-AI תלוי בחבילה חיצונית.

## סדר ביצוע (כל שלב נבדק לבד)
1. מיגרציה ובדיקות SQL. שום התנהגות לא משתנה.
2. `familyTime` ובדיקותיו.
3. תשתית התרגום, בכניסה וב-`StudentDashboard`.
4. שאר המסכים.
5. תבניות ההודעות ובדיקות snapshot, רק בתצוגה מקדימה.
6. שיבוץ רבנים לפי שפה.
7. נקודת הכניסה של האתר הבינלאומי.
8. עוזר ה-AI.
9. נוסחים מאושרים, WhatsApp ופרסום. כל אחד מאלה רק באישור.

## שאלות פתוחות לבעלים
- מחירון וחיוב ב-EUR וב-USD דרך Grow, או Stripe לאתר הבינלאומי?
- האם SMS4Free שולח למספרים בחו"ל?
- האם לכל משפחה יש שפה אחת?
