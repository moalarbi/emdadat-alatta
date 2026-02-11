# إعداد مشروع EMDADAT ALATTA

## ⚡ البدء السريع

### 1. تثبيت الاعتماديات

```bash
cd emdadat-alatta
npm install --legacy-peer-deps
```

### 2. تشغيل خادم التطوير

```bash
npm run dev
```

افتح المتصفح على: `http://localhost:3000/emdadat-alatta`

### 3. البناء للإنتاج

```bash
npm run build
```

الملفات ستكون في مجلد `out/`

---

## 🚀 النشر على GitHub Pages

### الخطوة 1: إنشاء مستودع على GitHub

1. اذهب إلى https://github.com/new
2. أدخل اسم المستودع: `emdadat-alatta`
3. اجعله عام (Public)
4. انقر "Create repository"

### الخطوة 2: رفع الكود

```bash
# داخل مجلد المشروع
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/emdadat-alatta.git
git push -u origin main
```

استبدل `YOUR_USERNAME` باسم المستخدم الخاص بك.

### الخطوة 3: تفعيل GitHub Pages

1. اذهب إلى المستودع على GitHub
2. اذهب إلى **Settings** → **Pages**
3. في قسم "Build and deployment":
   - Source: **GitHub Actions**

### الخطوة 4: التحقق من النشر

1. اذهب إلى **Actions** في المستودع
2. انتظر حتى تكتمل workflow "Deploy to GitHub Pages"
3. اذهب إلى **Settings** → **Pages** للعثور على الرابط

الرابط سيكون: `https://YOUR_USERNAME.github.io/emdadat-alatta/`

---

## ⚙️ تعديل basePath (مهم!)

إذا غيرت اسم المستودع، يجب تحديث `next.config.js`:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // ✅ إذا كان اسم المستودع 'emdadat-alatta'
  basePath: '/emdadat-alatta',
  assetPrefix: '/emdadat-alatta/',
  
  // ✅ إذا كان المستودع username.github.io (بدون basePath)
  // basePath: '',
  // assetPrefix: '',
}
```

بعد التعديل:
```bash
git add next.config.js
git commit -m "Update basePath"
git push
```

---

## 📝 تعديل البيانات

### إضافة تحويل جديد

افتح `src/data/conversions.ts`:

```typescript
export const conversions: Conversion[] = [
  // ... التحويلات الحالية
  { name: "اسم الموظف", ext: 123, dept: "المالية" },
  // أو
  { name: "اسم الموظف", ext: 456, dept: "الموارد البشرية" },
];
```

### تغيير رقم الاستقبال

```typescript
export const RECEPTION_EXT = 10; // غيّر هنا
```

---

## 🎨 تغيير الشعار

1. ضع ملف الشعار في `public/brand/logo.png`
2. أو عدل الكود في `src/app/page.tsx` و `src/components/Header.tsx`

---

## 🔧 حل المشاكل

### مشكلة: npm install يفشل

```bash
# جرب إحدى هذه الطرق:
npm install --legacy-peer-deps
npm install --force
npm clean-install
```

### مشكلة: البناء يفشل

```bash
# حذف مجلدات البناء
rm -rf .next out node_modules
npm install --legacy-peer-deps
npm run build
```

### مشكلة: الأصول لا تظهر على GitHub Pages

تأكد من أن `basePath` و `assetPrefix` في `next.config.js` يتطابقان مع اسم المستودع.

---

## 📁 هيكل المشروع

```
emdadat-alatta/
├── src/
│   ├── app/              # صفحات Next.js
│   ├── components/       # مكونات React
│   ├── data/             # بيانات التحويلات
│   └── lib/              # دوال مساعدة
├── public/               # ملفات ثابتة
├── .github/workflows/    # GitHub Actions
├── next.config.js        # إعدادات Next.js
└── package.json          # اعتماديات المشروع
```

---

## 💡 ملاحظات

- المشروع يستخدم **Static Export** للنشر على GitHub Pages
- الصور غير مُحسّنة (`unoptimized: true`) لأن GitHub Pages لا يدعم Image Optimization
- التصميم متجاوب ويعمل بشكل مثالي على الجوال
