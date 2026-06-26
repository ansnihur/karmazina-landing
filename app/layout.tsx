import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Любити себе — база | Катерина Кармазіна",
  description: "Трансформаційний онлайн-курс про любов до себе",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
