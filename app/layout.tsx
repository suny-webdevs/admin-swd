import type { Metadata } from "next"
import { Lato, Geist_Mono } from "next/font/google"
import "./globals.css"

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Admin | SWD",
  description: "Admin dashboard panel of SWD",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
