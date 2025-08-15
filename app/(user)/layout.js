
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import Navigation from './components/Navigation'

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
        <Navigation/>
        {children}
      </body>
    </html>
  )
}