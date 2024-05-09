import connectDB from '@/app/api/integrations/mongodb';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'StreamBy | Api y Servicios',
  description: 'Servicios de almacenamiento y transmisión de archivos',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    await connectDB();
  } catch (error) {
    console.error(error);
  } finally {
    return (
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    )
  }
}
