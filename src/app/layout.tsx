import Navbar from '@/components/navbar'
import Providers from '@/components/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FinanceTrack - Personal Finance Management',
  description: 'Automate your personal finance tracking and management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Providers>
          <Navbar />
          <main className="container mx-auto pt-16 px-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}