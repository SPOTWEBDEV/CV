import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { AudioProvider } from "@/contexts/audio-context"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ezea Ugochukwu Micheal - Full Stack Developer | SPOTWEBTECH",
  description:
    "Portfolio of Ezea Ugochukwu Micheal (Firstclass) - Full Stack Web Developer, React Native Mobile App Developer, and Software Developer at SPOTWEBTECH",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider defaultTheme="dark">
            <LanguageProvider>
              <AudioProvider>{children}</AudioProvider>
            </LanguageProvider>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
