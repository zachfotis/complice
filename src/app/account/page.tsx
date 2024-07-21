import Account from '@/components/Account/Account';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account',
  description: 'Your account',
};

function Page() {
  return (
    <Account />
  );
}

export default Page;
