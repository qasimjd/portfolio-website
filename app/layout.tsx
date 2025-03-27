import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Qasim Jd | Portfolio",
  description: "Personal portfolio website of Qasim Jd, showcasing projects, skills, and contact information.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
          {children}
          <Toaster position="bottom-center" richColors />
      </body>
    </html>
  )
}
