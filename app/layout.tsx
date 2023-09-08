import { Footer, Header } from '@/sections'
import './globals.css'


export const metadata = {
  title: 'Cars Hub',
  description: 'just a NextJS@13 project',
  
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
