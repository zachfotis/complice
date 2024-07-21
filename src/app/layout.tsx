import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Cookies from '@/components/layout/Cookies';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ToastCustomContainer from '@/components/layout/ToastCustomContainer';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Complice Team',
    template: '%s | Complice Team',
  },
  description:
    'A group of friends and family coming together to unveil themselves through fashion. Complice is a slow fashion brand born and made in Greece. This commitment to slow fashion emphasizes quality over quantity and means that each piece is designed to be timeless, durable, and versatile, offering long-lasting value to its wearers.',
  keywords: [
    'complice',
    'team',
    'fashion',
    'athens',
    'clothes',
    'shop',
    'store',
    'brand',
    'clothing',
    'accessories',
    'streetwear',
    't-shirts',
    'hoodies',
    'jackets',
    'pants',
    'shorts',
    'caps',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: {
    name: 'Complice Team Athens',
  },
  creator: 'Fotios N. Zachopoulos',
  openGraph: {
    type: 'website',
    url: 'https://www.compliceteam.com/',
    title: 'Complice Team',
    description:
      'A group of friends and family coming together to unveil themselves through fashion. Complice is a slow fashion brand born and made in Greece. This commitment to slow fashion emphasizes quality over quantity and means that each piece is designed to be timeless, durable, and versatile, offering long-lasting value to its wearers.',
    images: [
      {
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/559754621.jpg?k=7d21b149515d31b8e2cf5aa28e83f945c21cc7744589f1fe3bc91e831f02e975&o=&hp=1',
        width: 1024,
        height: 684,
        alt: 'Complice Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complice Team',
    description:
      'A group of friends and family coming together to unveil themselves through fashion. Complice is a slow fashion brand born and made in Greece. This commitment to slow fashion emphasizes quality over quantity and means that each piece is designed to be timeless, durable, and versatile, offering long-lasting value to its wearers.',
    images: [
      {
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/559754621.jpg?k=7d21b149515d31b8e2cf5aa28e83f945c21cc7744589f1fe3bc91e831f02e975&o=&hp=1',
        width: 1024,
        height: 684,
        alt: 'Complice Team',
      },
    ],
  },
};

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
