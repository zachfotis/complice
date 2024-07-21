'use client';

import Cover from '@/components/Account/Cover';
import Tabs from '@/components/Account/Tabs';
import Loader from '@/components/common/Loader';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ShippingCountryType, UserType } from '../../../typings';

function Account() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [shippingCountries, setShippingCountries] = useState<ShippingCountryType[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser && !isLoading) {
      router.push('/auth/login');
    }
  }, [currentUser, isLoading, router]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/auth/currentuser`, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-store',
        });
        const user = await response.json();

        if (user.currentUser) {
          setCurrentUser(user.currentUser);
        }
      } catch (error) {
        router.push('/auth/login');
      } finally {
        setIsLoading(false);
      }
    };

    const fetchShippingCountries = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/shipping/get-shipping-countries`, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-store',
        });
        const data = await response.json();

        if (data) {
          setShippingCountries(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (!currentUser) {
      fetchUser();
    }
    if (shippingCountries.length === 0) {
      fetchShippingCountries();
    }
  }, []);

  return (
    <PageTemplate>
      <PageBody>
        {isLoading && !currentUser && (
          <div className="flex-1 w-full min-h-screen flex justify-center items-center">
            <Loader />
          </div>
        )}
        {currentUser && (
          <>
            <h2 className="text-h3 font-medium uppercase mt-5 md:mt-10">My Account</h2>
            <Cover currentUser={currentUser} />
            <Tabs currentUser={currentUser} shippingCountries={shippingCountries} setCurrentUser={setCurrentUser} />
          </>
        )}
      </PageBody>
    </PageTemplate>
  );
}

export default Account;
