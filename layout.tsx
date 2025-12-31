import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Roflin AI - AI Cerdas Serbaguna",
  description:
    "AI serbaguna dengan chat interaktif, pembuatan gambar AI, manajemen pengguna, keamanan tingkat tinggi. Dibuat oleh Roflin Juliadi.",
  keywords: [
    "AI",
    "Chatbot",
    "Artificial Intelligence",
    "Image Generation",
    "Chat Interaktif",
    "Pembuatan Gambar",
    "Roflin Juliadi",
  ],
  authors: [{ name: "Roflin Juliadi" }],
  creator: "Roflin Juliadi",
  openGraph: {
    title: "Roflin AI - AI Cerdas Serbaguna",
    description:
      "AI serbaguna dengan chat interaktif, pembuatan gambar AI, dan manajemen pengguna.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
