import type { Metadata } from 'next'
import { Montserrat, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Hritvik Gaur — Product Manager',
  description: 'Product Manager building customer-centric products across EdTech, PropTech, and Biotech. Currently pursuing an MS in Information Management at the University of Washington with a focus on AI and Product Management.',
  openGraph: {
    title: 'Hritvik Gaur — Product Manager',
    description: 'Product Manager building customer-centric products across EdTech, PropTech, and Biotech.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
