import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mradul Mishra | B.Tech Student | Aspiring Full Stack Developer",
  description:
    "Mradul Mishra - Final year B.Tech student and aspiring Full Stack Web Developer from India. Passionate about React, Next.js, and modern web technologies. Ready to bring fresh ideas to your projects.",
  keywords:
    "Mradul Mishra, B.Tech student, web developer, React developer, Next.js, aspiring developer, India, TypeScript, JavaScript, student portfolio",
  authors: [{ name: "Mradul Mishra" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
