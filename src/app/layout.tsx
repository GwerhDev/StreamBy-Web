import './root.css';
import './globals.css';
import { Inter } from 'next/font/google';
import { UnderConstruction } from '@/components/Utils/UnderConstruction';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'StreamBy | API & Services',
  description: 'Storage & Streaming services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <UnderConstruction />
      </body>
    </html>
  )
}
