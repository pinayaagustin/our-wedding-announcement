import { Playfair_Display } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Playfair_Display({ weight: ['400','500','600','700','800','900'], subsets: ['latin'] })

export const metadata = {
  title: 'Our Wedding Announcement',
  description: 'This is our wedding website created by Kukuh & Pinaya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      {children}
      <Analytics />
      </body>
    </html>
  )
}
