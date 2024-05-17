import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dean Kadri | Folio',
  description: "I'm Dean Kadri, welcome to my dev portfolio!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics /> {/* I'm watching you lol O_O */}
        {children}
      </body>
    </html>
  )
}
