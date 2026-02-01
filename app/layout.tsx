import type { Metadata } from "next";
import Script from "next/script";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { OpenPanelComponent } from '@openpanel/nextjs';

export const metadata: Metadata = {
  title: {
    default: "Solana Kit",
    template: "%s | Solana Kit",
  },
  metadataBase: new URL("https://solweb3.vercel.app/"),
  description:
    "Solana Kit is a JavaScript library for interacting with the Solana blockchain.It provides a simple and efficient way to interact with the Solana network, including reading and writing to the blockchain, managing accounts, and interacting with smart contracts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <OpenPanelComponent
        clientId="4ee87592-0c8d-4897-b140-2a05a0d56889"
        trackScreenViews={true}
        trackAttributes={true}
        trackOutgoingLinks={true}
      />

      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular antialiased`}
        suppressHydrationWarning
      >
        <Script
          defer
          src="https://stats.sal.fun/script.js"
          data-website-id="29c0179f-d11d-492b-9a93-31c473a7f2c8"
        />
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
