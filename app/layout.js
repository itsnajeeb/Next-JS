
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})
const geistMono = Geist_Mono({
  variable:"--font-giest-mono",
  subsets:["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html leng="en">
      <body className={` ${geistMono.variable}`}>
        <p>Pages</p>
        {children}
      </body>
    </html>
  )
}