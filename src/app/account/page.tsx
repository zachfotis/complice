import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import Cover from '@/components/Account/Cover';
import { UserType } from '../../../typings';
import Tabs from '@/components/Account/Tabs';

function Page() {

  const currentUser: UserType = {
    id: '0',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    birthDate: '1987-06-06',
    address: {
      firstName: 'John',
      lastName: 'Doe',
      address: 'Korai 1',
      city: 'Athens',
      postalCode: '12345',
      country: 'Greece',
      phoneNumber: '1234567890',
      email: 'john@gmail.com'
    }
  };

  return (
    <PageTemplate>
      <PageBody>
        <Cover currentUser={ currentUser } />
        <Tabs />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
