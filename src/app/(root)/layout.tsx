import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ".././globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { NavigationMenuDemo } from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/Providers/NextAuthProvider";



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
  description: "ThinkPost is a platform designed to help you organize your thoughts and ideas effectively. Whether you are brainstorming, planning, or just jotting down notes, ThinkPost provides the tools you need to stay organized and focused.",
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
        <NextAuthProvider>

          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NavigationMenuDemo />

            {children}

            <Toaster />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
