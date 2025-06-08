import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThinkPost",
  description: " Ai-Powered BlogPost Platform",
  openGraph: {
    title: "ThinkPost",
    description: "Ai-Powered BlogPost Platform",
    url: "https://thinkpost.com",
    siteName: "ThinkPost",
    images: [
      {
        url: "https://thinkpost.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ThinkPost - Ai-Powered BlogPost Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
