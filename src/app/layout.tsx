import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Natthanun Puntanee | Portfolio',
  description: 'Natthanun Puntanee - Experienced software engineer with 6+ years in large-scale development, Flutter, React Native, Vue/Nuxt, and Node.js',
  keywords: 'Natthanun Puntanee, software engineer, flutter, react native, vue, nuxt, nodejs, spring boot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
