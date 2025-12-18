import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUARDI - Perdagangan Eceran Terpercaya di Cirebon",
  description: "SUARDI adalah mitra terpercaya untuk kebutuhan perdagangan eceran Anda. Kami menyediakan berbagai produk berkualitas dengan harga terjangkau dan pelayanan terbaik di Cirebon, Jawa Barat.",
  keywords: ["SUARDI", "perdagangan eceran", "Cirebon", "toko retail", "produk berkualitas", "Greged", "Gumulung Lebak"],
  authors: [{ name: "SUARDI Team" }],
  icons: {
    icon: "/suardi-logo.png",
  },
  openGraph: {
    title: "SUARDI - Perdagangan Eceran Terpercaya",
    description: "Mitra terpercaya untuk kebutuhan perdagangan eceran dengan produk berkualitas dan harga terjangkau",
    url: "https://suardi.com",
    siteName: "SUARDI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUARDI - Perdagangan Eceran Terpercaya",
    description: "Mitra terpercaya untuk kebutuhan perdagangan eceran dengan produk berkualitas dan harga terjangkau",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="m0zpt0a4663lw2dnaercu99fv3stcf" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
