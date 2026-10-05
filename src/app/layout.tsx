import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Newsreader } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Display + UI sans. The wdth and opsz axes are used by the animated hero name.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

// Editorial serif for statements and roles.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emirhan Solmaz | Solidity, Avalanche, Stellar",
  description:
    "Emirhan Solmaz builds complete products, from database to deploy. Team1 Turkiye collaborator, Solidity on Avalanche, Stellar Ambassador.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} ${geistMono.variable} antialiased`}
    >
      <body className="tone-ink bg-bg text-fg">
        <div className="noise-overlay" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
