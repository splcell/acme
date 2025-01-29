import { Inter } from 'next/font/google'; // подключение оптимизированного шрифта
import { Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] }); //выбор начертания
export const lustiana = Lusitana({subsets: ['latin'], weight: ['400', '700']})