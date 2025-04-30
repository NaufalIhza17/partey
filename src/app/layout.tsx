import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  display: 'swap',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PARTeY",
  description: "Multiplayer Website Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${plusJakartaSans.variable} antialiased bg-[#DBDBDB] overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
