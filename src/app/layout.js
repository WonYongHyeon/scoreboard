import { Inter } from "next/font/google";
import "./globals.css";
import favicon from "./favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "트리톤 - 해왕성 제1위성",
  description: "해왕성을 기준으로 움직이는 제 1위성 트리톤입니다.",
  icon: favicon,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
