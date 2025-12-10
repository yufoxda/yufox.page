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
  title: "yufox portfolio",
  description: "student engineer",
  openGraph: {
    title: 'yufox portfolio', // OGPで表示されるタイトル
    description: 'student engineer', // OGPで表示される説明文
    url: 'https://yufox.page', // あなたのサイトのURL
    siteName: 'yufox portfolio', // サイト名
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'yufox portfolio',
    description: 'student engineer',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
