import './globals.css'
import { Poppins } from 'next/font/google'


const inter = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'AGC Conference Activities',
  description: 'Created by Ani V.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
