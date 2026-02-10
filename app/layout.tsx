import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社ミカレ｜公式サイト",
  description:
    "株式会社ミカレは、ライフスタイル領域におけるブランド開発および事業創造を行う企業です。",
  openGraph: {
    title: "株式会社ミカレ｜公式サイト",
    description:
      "アクセサリー・ジュエリー事業を中核に、ブランド戦略コンサルティング、広告・マーケティング支援、ペット関連事業を展開。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${noto.className} antialiased`}>{children}</body>
    </html>
  );
}
