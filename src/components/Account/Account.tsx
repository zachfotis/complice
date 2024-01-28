'use client';

import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import Cover from '@/components/Account/Cover';
import Tabs from '@/components/Account/Tabs';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from '@/components/common/Loader';
import { OrderType, ShippingCountryType, UserType } from '../../../typings';

function Account() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  useEffect(() => {
    if (!currentUser && !isLoading) {
      redirect('/auth/login');
    }
  }, [currentUser, isLoading]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${ baseUrl }/auth/currentuser`, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-store',
        });
        const user = await response.json();

        if (user.currentUser) {
          setCurrentUser(user.currentUser);
        }
      } catch (error) {
        redirect('/auth/login');
      } finally {
        setIsLoading(false);
      }
    };

    if (!currentUser) {
      fetchUser();
    }
  }, []);

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
        imagesURL: {
          image1: 'https://images.unsplash.com/photo-1596902115451-aa4564f19457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
        },
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
        { isLoading && !currentUser && (
          <div className="flex-1 w-full flex justify-center items-center">
            <Loader />
          </div>
        ) }
        { currentUser && (
          <>
            <h2 className="text-h3 font-medium uppercase mt-5 md:mt-10">My Account</h2>
            <Cover currentUser={ currentUser } />
            <Tabs currentUser={ currentUser } shippingCountries={ shippingCountries } orders={ orders } setCurrentUser={ setCurrentUser } />
          </>
        ) }
      </PageBody>
    </PageTemplate>
  );
}

export default Account;
