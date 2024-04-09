import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

const anekTelugo = Anek_Telugu({ subsets: ["latin"], variable:"--font-caption" });

export const metadata: Metadata = {
  title: "Portfolio - Samuel CHARBIT",
  description: "Description of CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable,GeistMono.variable, anekTelugo.variable, "font-sans h-full")}>
        {children}
      </body>
    </html>
  );
}
