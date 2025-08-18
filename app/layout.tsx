import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SpotlightBackground from "@/components/SpotlightBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Med Hedi Hammami. | Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer specializing in MERN stack (React, Next.js, Node, Express) and CMS platforms like WordPress & Shopify. Portfolio of scalable apps and modern web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SpotlightBackground />
          <Header />
          <main className="mx-auto max-w-xl px-4 py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
