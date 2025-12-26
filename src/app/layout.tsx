import type { Metadata } from "next";
import { Geist, Caveat } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
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
      <body className={`${geist.variable} ${caveat.variable} bg-[#FEF4EA] text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
