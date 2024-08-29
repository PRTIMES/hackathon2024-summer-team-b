import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

// オリジナルフォントの設定
const originfont = localFont({
  src: "./../font/LINESeedJP_OTF_Rg.woff2",
});

export const metadata: Metadata = {
  title: "PR Carrier🍓",
  description: "学生向けプレスリリースを配信します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={originfont.className}>
      <body>{children}</body>
    </html>
  );
}
