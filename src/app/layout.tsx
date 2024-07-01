import './root.css';
import './globals.css';
import connectDB from '@/app/api/integrations/mongodb';
import { Inter } from 'next/font/google';
import { Navigator } from '@/components/Navigator';
import { UnderConstruction } from '@/components/UnderConstruction';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'StreamBy | API & Services',
  description: 'Storage & Streaming services',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  try {
    await connectDB();
  } catch (error) {
    console.error(error);
  } finally {
    return (
      <html lang="es">
        <body className={inter.className}>
          <Navigator />
          {children}
          <UnderConstruction />
        </body>
      </html>
    );
  };
};
