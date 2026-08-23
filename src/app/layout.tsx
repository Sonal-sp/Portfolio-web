import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sonal Parmar | Digital Observatory",
  description: "The digital observatory of a curious engineer. Finite Life. Infinite Curiosity. Exploring software systems, AI pipelines, and human curiosity.",
  keywords: ["Sonal Parmar", "Engineer", "Builder", "Portfolio", "Digital Observatory", "AI", "Software Architecture"],
  authors: [{ name: "Sonal Parmar" }],
  openGraph: {
    title: "Sonal Parmar | Digital Observatory",
    description: "Finite Life. Infinite Curiosity. The digital observatory of a curious engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} bg-cosmos-950 text-starlight-100 antialiased selection:bg-gold-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
