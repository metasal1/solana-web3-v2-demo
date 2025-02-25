import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Solana Web3.js v2 Demo",
    template: "%s | Solana Web3.js v2 Demo",
  },
  metadataBase: new URL("https://solweb3.vercel.app/"),
  description:
    "Solana Web3.js v2 is a JavaScript library for interacting with the Solana blockchain.It provides a simple and efficient way to interact with the Solana network, including reading and writing to the blockchain, managing accounts, and interacting with smart contracts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular antialiased`}
        suppressHydrationWarning
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
