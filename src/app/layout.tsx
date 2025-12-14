import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thank you - Do Good Movement",
  description:
    "Celebrating the impact of the Do Good Movement and thanking our community for their support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#FEF4EA] text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
