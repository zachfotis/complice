import { ContactUs } from '@/components/Contact/contact';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'We would love to hear from you!',
};

function Page() {
  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <PageTitle title="Contact Us" />
        <p className="text-center text-lg font-medium">We would love to hear from you!</p>
        <ContactUs />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
