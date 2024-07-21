import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Your cart',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <PageTemplate>
      <PageBody>{children}</PageBody>
    </PageTemplate>
  );
}
