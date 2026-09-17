import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PromoBar from '@/components/PromoBar';

export const metadata: Metadata = {
  title: 'Anisaya Cleaning | House Cleaning in Allen, Plano, McKinney & Frisco',
  description: 'Professional house cleaning services. Book your instant quote in 60 seconds. Recurring, deep, and move-in/move-out cleaning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <PromoBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
