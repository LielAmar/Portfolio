import type { Metadata } from "next";

import { Rubik } from "next/font/google";

import BringThemHomeNowWidget from "@components/widgets/bthn";

import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liel Amar's Portfolio",
  description: "Designed and developed by Liel Amar. Used Adobe XD, NextJS and Tailwind CSS.",

  openGraph: {
    siteName: "Liel Amar's Portfolio",
    title: "Liel Amar's Portfolio",
    description: "Designed and developed by Liel Amar. Used Adobe XD, NextJS and Tailwind CSS.",
    
    type: "website",
    locale: "en_US",
    url: "https://lielamar.com",
  },

  twitter: {
    card: "summary",
    site: "@iamlielamar",
    creator: "@iamlielamar",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${rubik.className} antialiased`}>
        <>
          <BringThemHomeNowWidget />
          {children}
        </>
      </body>
    </html>
  );
}
