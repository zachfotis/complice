import '@/styles/globals.css';
import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <PageTemplate>
      <PageBody>
        { children }
      </PageBody>
    </PageTemplate>
  );
}
