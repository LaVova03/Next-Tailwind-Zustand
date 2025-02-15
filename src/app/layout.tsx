import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistInter = localFont({
  src: "../assets/fonts/Inter/static/Inter_28pt-Regular.ttf",
  variable: "--font-inter",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistInter.variable}  antialiased`}>{children}</body>
    </html>
  );
}
