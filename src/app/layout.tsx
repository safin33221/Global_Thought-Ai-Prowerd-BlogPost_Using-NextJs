import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/Providers/NextAuthProvider";
import { ThemeProvider } from "./components/theme-provider";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Thought",
  description: "Global Thought is a platform designed to help you organize your thoughts and ideas effectively. Whether you are brainstorming, planning, or just jotting down notes, Global Thought provides the tools you need to stay organized and focused.",
  icons: '../../public/images/heroBackground.jpg'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextAuthProvider>
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </ReactQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
