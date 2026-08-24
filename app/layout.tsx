import type { Metadata } from "next";
import { Familjen_Grotesk, Sora } from "next/font/google";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zainab Gilani — Full-Stack Engineer",
  description:
    "Full-stack Engineer building AI-powered web apps — from real-time collaboration and multi-tenant systems to background job pipelines. Next.js, TypeScript, Node.js, PostgreSQL.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${familjenGrotesk.variable} ${sora.variable}`}>
      <body className="bg-canvas font-body text-text antialiased">{children}</body>
    </html>
  );
}
