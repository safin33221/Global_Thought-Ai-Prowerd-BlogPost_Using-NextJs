"use client";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mb-6 text-blue-600 dark:text-blue-400">
        <Globe className="w-12 h-12" />
      </div>
      <h1 className="text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">Oops! Lost in Thought.</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-6">
        The page you’re looking for doesn’t seem to exist on Global Thought.
        Maybe it’s still being written, or perhaps it’s just an idea waiting to be born.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Return to Home
      </Link>
      <p className="mt-6 text-sm text-muted-foreground">
        Need help? <Link href="/contact" className="underline hover:text-blue-500">Contact us</Link>
      </p>
    </div>
  );
}
