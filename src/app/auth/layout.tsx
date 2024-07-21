import Cover from '@/components/Auth/Cover';
import Tabs from '@/components/Auth/Tabs';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Complice Auth',
  description: 'Complice provides a simple and secure way to manage your account and other sensitive information.',
};

export default function Page({ children }: { children: ReactNode }) {
  return (
    <PageTemplate>
      <PageBody>
        <Cover />
        <Tabs />
        {children}
      </PageBody>
    </PageTemplate>
  );
}
