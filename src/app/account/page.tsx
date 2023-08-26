import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import Cover from '@/components/Account/Cover';
import Tabs from '@/components/Account/Tabs';
import Ranking from '@/components/Account/Ranking';
import { OrderType, ShippingCountryType, UserType } from '../../../typings';

export enum RankingNamesEnum {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PLATINUM = 'Platinum',
}

function Page() {
  const currentUser: UserType = {
    id: '0',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    birthDate: '1987-06-06',
    discount: 0.1,
    address: {
      firstName: 'John',
      lastName: 'Doe',
      address: 'Korai 1',
      city: 'Athens',
      postalCode: '12345',
      country: 'Greece',
      phoneNumber: '1234567890',
      email: 'john@gmail.com',
    },
    ranking: {
      current: RankingNamesEnum.GOLD,
      next: RankingNamesEnum.PLATINUM,
      progress: 0.5,
      moneyToNextRanking: 100,
    },
  };

  const shippingCountries: ShippingCountryType[] = [
    {
      id: '1',
      name: 'Greece',
      cost: 3.5,
    },
  ];

  const orders: OrderType[] = [{
    id: '001',
    userId: '0',
    date: new Date(),
    total: 24.99,
    status: 'completed',
    products: [
      {
        id: '005',
        title: 'Waterproof Shorts',
        size: 'XL',
        quantity: 1,
        maxQuantity: 4,
        price: 24.99,
        onSale: {
          isOnSale: true,
          discount: 0.25,
        },
        thumb: 'https://images.unsplash.com/photo-1596902115451-aa4564f19457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
      },
    ],
    shippingAddress: {
      firstName: 'Fotios',
      lastName: 'Zachopoulos',
      address: 'Ifaistionos 9',
      city: 'Kavala',
      postalCode: '65302',
      country: 'Greece',
      phoneNumber: '+306946695237',
      email: 'zaxfotis@gmail.com',
    },
  }];

  return (
    <PageTemplate>
      <PageBody>
        <Cover currentUser={ currentUser } />
        <Ranking ranking={ currentUser.ranking } />
        <Tabs currentUser={ currentUser } shippingCountries={ shippingCountries } orders={ orders } />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
