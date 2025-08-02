import type { Metadata } from "next"
import { Lato, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layout/AppSidebar"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { ModeToggle } from "@/components/shared/ModeToggle"
import { Separator } from "@/components/ui/separator"
import DynamicBreadcrumb from "@/components/shared/DynamicBreadcrumb"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Toaster } from "@/components/ui/sonner"

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
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${lato.variable} ${geistMono.variable} antialiased bg-sidebar`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full max-h-screen bg-card">
              <div className="border-b px-5 py-3 flex items-center justify-between">
                <div className="h-5 flex items-center space-x-4">
                  <SidebarTrigger />
                  <Separator orientation="vertical" />
                  <DynamicBreadcrumb />
                </div>
                <ModeToggle />
              </div>
              <div className="container mx-auto px-2 py-3">
                <ScrollArea className="h-[51rem] w-full rounded scroll-auto">
                  {children}
                  <Toaster />
                </ScrollArea>
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
