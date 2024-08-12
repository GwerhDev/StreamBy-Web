import './root.css';
import './globals.css';
import { Inter } from 'next/font/google';
import { Navigator } from '@/components/Navigator/Navigator';
import { UnderConstruction } from '@/components/UnderConstruction';

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
