// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import {
  Inter,
  JetBrains_Mono,
  Orbitron,
  Cairo,
  Tajawal,
} from "next/font/google";
import { LanguageProvider } from "@/app/context/LanguageContext";
import UserHeader from "./_Components/Header";
import LanguageWrapper from "./_Components/LanguageWrapper";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400", "500", "700", "900"],
});

// Arabic fonts
export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "900"],
});

export const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-tajawal",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Front End Developer Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} ${tajawal.variable} ${cairo.variable} `}
    >
      <body className="backgroundContainer font-sans">
        <LanguageProvider>
          <LanguageWrapper>
            <UserHeader />
            {children}
          </LanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
