import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Jose Silerio",
  description: "Freelance web development portfolio: case studies from real shipped projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-black">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <header className="border-b border-black/10 dark:border-white/15">
          <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-50">
              Jose Silerio
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                About
              </Link>
              <Link
                href="/hire"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Hire me
              </Link>
            </div>
          </nav>
        </header>

        <main id="content" className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
          {children}
        </main>

        <footer className="border-t border-black/10 px-6 py-6 text-center text-sm text-zinc-500 dark:border-white/15 dark:text-zinc-500">
          © {new Date().getFullYear()} Jose Silerio
        </footer>
      </body>
    </html>
  );
}
