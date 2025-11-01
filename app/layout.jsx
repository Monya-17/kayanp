import { Tajawal, Cairo } from 'next/font/google'
import './globals.css'

const tajawal = Tajawal({
  weight: ['300', '400', '500', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-tajawal',
})

const cairo = Cairo({
  weight: ['300', '400', '600', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
})

export const metadata = {
  title: 'Spark (Sharara) Platform - Start Your Career Journey Step by Step',
  description: 'Smart Training Paths, Real-Life Practical Projects, Personalized Mentoring',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${tajawal.variable} ${cairo.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
