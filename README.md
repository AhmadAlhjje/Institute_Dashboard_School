# لوحة تحكم صاحب المعهد (institute_dashboard)

لوحة صاحب المعهد: الإحصائيات، الطلاب، المدرسون، الصفوف والمواد، الدروس والجلسات، رفع
الفيديوهات والملفات (جاري الرفع X% / جاهز / فشل)، فتح وإغلاق المحتوى للطلاب، الإشعارات.

React 19 · Vite · TypeScript · TanStack Query · React Hook Form + Zod · Tailwind CSS 4 · i18next (عربي/إنجليزي).

## التشغيل

الـ backend يجب أن يعمل (`npm run dev` داخل مجلد backend). ثم داخل هذا المجلد:

```bash
npm install      # مرة واحدة فقط
npm run dev
```

افتح http://localhost:5173 — الدخول: `0911111111` / `Owner12345` (من البيانات التجريبية).

## ملف `.env`

| المتغير | المعنى |
|---|---|
| `VITE_API_BASE_URL` | عنوان الـ API (محلياً `http://localhost:4000`) |

## أوامر أخرى

| الأمر | ماذا يفعل |
|---|---|
| `npm run build` | نسخة الإنتاج في `dist/` |
| `npm test` · `npm run lint` · `npm run typecheck` | الاختبارات والفحص |

## الرفع على السيرفر

ضع في `.env`: `VITE_API_BASE_URL=https://api.your-domain.com` ثم `npm run build`، وانسخ محتوى
`dist/` إلى `backend/deploy/sites/owner/` على السيرفر (التفاصيل في `backend/docs/deployment.md`).

## بنية المشروع

```
src/main.tsx, src/portal.ts   الدخول، القائمة الجانبية، صفحات هذه اللوحة
src/shared/                   نظام التصميم، الترجمة، عميل الـ API، الشاشات (طلاب، مدرسون، محتوى، رفع...)
tests/                        الاختبارات
```
