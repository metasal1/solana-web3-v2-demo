import type { Metadata } from "next";

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
    default: "SolWebKit - Solana Web3.js v2",
    template: "%s | SolWebKit / Solana Web3.js v2",
  },
  metadataBase: new URL("https://solweb3.vercel.app/"),
  description:
    "Solana Web Kit / Solana Web3.js v2 is a JavaScript library for interacting with the Solana blockchain.It provides a simple and efficient way to interact with the Solana network, including reading and writing to the blockchain, managing accounts, and interacting with smart contracts.",
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
      // If you have a user id, you can pass it here to identify the user
      // profileId={'123'}
      />

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
