import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Menu from './components/menu'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studio DMLA Inc.',
  description: 'Portfolio, marketing website from Studio Digital Marketing Latin America Incorporated',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      <body className={inter.className+ ' '}>
        <Menu />        
        {children}
        <Footer />
        </body>
    </html>
  )
}
