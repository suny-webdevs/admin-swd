import type { Metadata } from "next"
import { Lato, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layout/AppSidebar"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { ModeToggle } from "@/components/shared/ModeToggle"
import { Separator } from "@/components/ui/separator"
import DynamicBreadcrumb from "@/components/shared/DynamicBreadcrumb"

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
      <body className={`${lato.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="rounded-md shadow-md m-2 w-full min-h-screen">
              <div className="rounded-t-md border-b border-sidebar-border px-5 py-3 flex items-center justify-between">
                <div className="h-5 flex items-center space-x-4">
                  <SidebarTrigger />
                  <Separator orientation="vertical" />
                  <DynamicBreadcrumb />
                </div>
                <ModeToggle />
              </div>
              <div className="p-5">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
