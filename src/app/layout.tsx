import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shahid-portfolio.vercel.app"),
  title: "Shahid | First-Year B.Tech CSE (AI) Portfolio",
  description:
    "Personal portfolio of Shahid, a first-year B.Tech Computer Science & Engineering (AI) student at Thejus Engineering College, Thrissur, Kerala. Explore projects in web development and machine learning.",
  keywords: [
    "Shahid",
    "Portfolio",
    "B.Tech CSE AI",
    "Thejus Engineering College",
    "Thrissur",
    "Kerala",
    "Next.js",
    "Tailwind CSS",
    "Machine Learning",
    "Web Developer",
  ],
  authors: [{ name: "Shahid" }],
  creator: "Shahid",
  openGraph: {
    title: "Shahid | First-Year B.Tech CSE (AI) Portfolio",
    description:
      "Building Intelligent Digital Experiences - CSE (AI) student at Thejus Engineering College, Thrissur, Kerala.",
    url: "https://shahid-portfolio.vercel.app",
    siteName: "Shahid Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shahid Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahid | B.Tech CSE (AI) Portfolio",
    description:
      "Building Intelligent Digital Experiences - CSE (AI) student at Thejus Engineering College, Thrissur.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth dark`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-[#0A0A0A] text-gray-100 min-h-screen antialiased selection:bg-[#F7931E] selection:text-black">
        {children}
      </body>
    </html>
  );
}
