# EMDADAT ALATTA - دليل التحويلات

<p align="center">
  <img src="public/brand/logo.png" alt="EMDADAT ALATTA Logo" width="120">
</p>

<p align="center">
  دليل تحويلات EMDADAT ALATTA - ابحث بالاسم أو رقم التحويل للوصول للجهة المختصة خلال ثوانٍ
</p>

## 🚀 المميزات

- **بحث فوري** - ابحث بالاسم أو رقم التحويل مع تأخير 150ms
- **فلترة بالأقسام** - المالية والموارد البشرية
- **نسخ بنقرة واحدة** - انسخ أي رقم تحويل فوراً
- **إحصائيات** - رؤية توزيع التحويلات حسب النطاق
- **تصميم زجاجي** - واجهة عصرية بتأثير blur
- **متجاوب** - يعمل بشكل مثالي على الجوال

## 🛠️ التقنيات المستخدمة

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React

## 📦 التشغيل المحلي

```bash
# استنساخ المستودع
git clone https://github.com/YOUR_USERNAME/emdadat-alatta.git
cd emdadat-alatta

# تثبيت الاعتماديات
npm install

# تشغيل خادم التطوير
npm run dev

# فتح المتصفح
open http://localhost:3000/emdadat-alatta
```

## 🔨 البناء للإنتاج

```bash
# بناء المشروع
npm run build

# الناتج سيكون في مجلد out/
# يمكن نشره على أي خادم ثابت
```

## 🚀 النشر على GitHub Pages

### 1. إنشاء مستودع على GitHub

```bash
# إنشاء مستودع جديد على GitHub
# ثم ربط المشروع المحلي

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/emdadat-alatta.git
git push -u origin main
```

### 2. تفعيل GitHub Pages

1. اذهب إلى إعدادات المستودع (Settings)
2. انتقل إلى قسم Pages
3. اختر "GitHub Actions" كمصدر للبناء

### 3. تحديث basePath

**مهم:** إذا غيرت اسم المستودع، يجب تحديث `next.config.js`:

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

### 4. آلية النشر

عند كل push إلى فرع `main`:
1. GitHub Actions يبني المشروع تلقائياً
2. ينشر الناتج على GitHub Pages
3. الموقع يصبح متاحاً على الرابط

## 📝 تعديل البيانات

### إضافة/تعديل تحويلات

افتح الملف `src/data/conversions.ts`:

```typescript
export const conversions: Conversion[] = [
  { name: "الاستقبال", ext: 10, dept: "المالية" },
  { name: "اسم جديد", ext: 999, dept: "المالية" },
  // ... أضف المزيد
];
```

### تغيير الشعار

1. ضع ملف الشعار الجديد في `public/brand/logo.png`
2. يفضل أن يكون PNG بخلفية شفافة
3. الأبعاد المثالية: 512×512 بكسل

## 📱 الهيكل التقني

```
app/
├── page.tsx              # الصفحة الرئيسية
├── layout.tsx            # تخطيط التطبيق
└── globals.css           # الأنماط العامة

src/
├── components/
│   ├── Header.tsx        # رأس الصفحة
│   ├── SearchBar.tsx     # شريط البحث
│   ├── DeptTabs.tsx      # تبويبات الأقسام
│   ├── ConversionCard.tsx # بطاقة التحويل
│   ├── KpiRow.tsx        # بطاقات الإحصائيات
│   ├── QuickActionsSheet.tsx # الورقة السفلية
│   ├── ReportIssueModal.tsx # نموذج الإبلاغ
│   ├── FloatingActionButton.tsx # الزر العائم
│   ├── Toast.tsx         # الإشعارات
│   └── InsightsChart.tsx # الرسم البياني
├── data/
│   └── conversions.ts    # بيانات التحويلات
└── lib/
    └── utils.ts          # الدوال المساعدة

public/
└── brand/
    └── logo.png          # شعار الشركة
```

## 🎨 نظام الألوان

| العنصر | اللون | الكود |
|--------|-------|-------|
| الخلفية | كحلي غامق | `#050B1A` |
| الزجاج | أبيض شفاف | `rgba(255,255,255,0.08)` |
| الحدود | أبيض شفاف | `rgba(255,255,255,0.1)` |
| السماوي | سماوي | `#22D3EE` |
| المالية | سماوي | `#22D3EE` |
| الموارد البشرية | بنفسجي | `#C084FC` |

## 🔧 التخصيص

### تغيير النطاقات

افتح `src/lib/utils.ts` وعدل `RANGE_BINS`:

```typescript
export const RANGE_BINS = [
  { label: '0-99', min: 0, max: 99 },
  { label: '100-199', min: 100, max: 199 },
  // أضف أو احذف حسب الحاجة
];
```

### تغيير رقم الاستقبال

افتح `src/data/conversions.ts`:

```typescript
export const RECEPTION_EXT = 10; // غيّر الرقم هنا
```

## 📄 الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الشخصي والتجاري.

---

<p align="center">
  صنع بـ ❤️ لـ EMDADAT ALATTA
</p>
