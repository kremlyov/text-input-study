import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Исследование ввода текста',
  description: 'Минимальная страница с полем ввода текста.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
