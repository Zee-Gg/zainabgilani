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
  title: "Zainab Gilani — Product Designer",
  description:
    "Product designer working across operations, finance and early-stage teams — dense workflows, honest onboarding, and design systems that stay coherent long after handoff.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${familjenGrotesk.variable} ${sora.variable}`}>
      <body className="bg-canvas font-body text-text antialiased">{children}</body>
    </html>
  );
}
