import type { Metadata } from "next";
import { Chiron_GoRound_TC } from "next/font/google";
import "./globals.css";

const chironGoRoundTC = Chiron_GoRound_TC({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "이수진 영어",
  description: "24년 차 베테랑 전문가가 만들어가는 체계적이고 차별화된 프리미엄 영어교육",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${chironGoRoundTC.className} h-full antialiased`}>
<body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
