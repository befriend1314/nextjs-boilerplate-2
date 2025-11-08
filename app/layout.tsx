import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "暴风出黑 - 专业出黑提款服务 | 十年经验 | 成功再收费",
  description: "网投被黑怎么办？十年专业出黑提款经验，累计成功提款2000万+。采用独家技术手段解决各种提款难题，不成功不收取任何费用。联系电话/微信：18098176438，QQ：3405554131",
  keywords: "出黑,提款,网络赌博提款,提款问题解决,暴风出黑",
  openGraph: {
    title: "暴风出黑 - 专业出黑提款服务",
    description: "十年专业出黑提款经验，累计成功提款2000万+。不成功不收取任何费用。",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
