import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EMDADAT ALATTA - دليل التحويلات',
  description: 'دليل تحويلات EMDADAT ALATTA - ابحث بالاسم أو رقم التحويل للوصول للجهة المختصة خلال ثوانٍ',
  keywords: 'EMDADAT ALATTA, تحويلات, دليل, extensions, directory',
  authors: [{ name: 'EMDADAT ALATTA' }],
  openGraph: {
    title: 'EMDADAT ALATTA - دليل التحويلات',
    description: 'دليل تحويلات EMDADAT ALATTA - ابحث بالاسم أو رقم التحويل للوصول للجهة المختصة خلال ثوانٍ',
    type: 'website',
    locale: 'ar_SA',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#050B1A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-arabic antialiased">
        {children}
      </body>
    </html>
  )
}
