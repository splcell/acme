import '@/app/ui/global.css'; //импортируем глобальные стили
import {inter} from './ui/fonts' //импортируем настроенный шрифт

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* подлключаем шрифт к body */}
      <body className={`${inter.className} antialiased`}>{children}</body> 
    </html>
  );
}
