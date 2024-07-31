import './root.css';
import './globals.css';
import client from '@/app/api/integrations/mongodb';
import { Inter } from 'next/font/google';
import { Navigator } from '@/components/Navigator/Navigator';
import { UnderConstruction } from '@/components/UnderConstruction';
import { environment } from './api/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'StreamBy | API & Services',
  description: 'Storage & Streaming services',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  try {
    console.log("environment: ", environment);
    console.log("Connecting to MongoDB...");
    const response = await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  } finally {
    return (
      <html lang="en">
        <body className={inter.className}>
          <Navigator />
          {children}
          <UnderConstruction />
        </body>
      </html>
    );
  };
};
