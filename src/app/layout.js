import { Inter } from "next/font/google";
import "./globals.css";
import favicon from "./favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "해블린 스코어 보드",
  description: "그러합니다. 넹",
  icon: favicon,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
