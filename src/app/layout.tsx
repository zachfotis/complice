import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ToastCustomContainer from '@/components/layout/ToastCustomContainer';
import '@/styles/globals.css';
import Cookies from '@/components/layout/Cookies';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col items-start justify-start bg-white text-primary">
        <Navbar />
        {children}
        <Footer />
        <Cookies />
        <ToastCustomContainer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
