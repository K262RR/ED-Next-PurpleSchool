import { Noto_Sans } from "next/font/google";
import "../styles/globals.css";

const notoSans = Noto_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
