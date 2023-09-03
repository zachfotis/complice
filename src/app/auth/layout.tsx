import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import Cover from '@/components/Auth/Cover';
import Tabs from '@/components/Auth/Tabs';
import { ReactNode } from 'react';

export default function Page({ children }: { children: ReactNode }) {
  return (
    <PageTemplate>
      <PageBody>
        <Cover />
        <Tabs />
        { children }
      </PageBody>
    </PageTemplate>
  );
}
