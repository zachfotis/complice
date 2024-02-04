'use client';

import CouponStore from '@/components/Account/CouponStore';
import { MyProfile } from '@/components/Account/MyProfile';
import { Orders } from '@/components/Account/Orders';
import Ranking from '@/components/Account/Ranking';
import { useState } from 'react';
import { ShippingCountryType, UserType } from '../../../typings';

interface ITab {
  currentUser: UserType;
  shippingCountries: ShippingCountryType[];
  setCurrentUser: (value: UserType) => void;
}

function Tabs({ currentUser, shippingCountries, setCurrentUser }: ITab) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: 'My Discounts',
      content: <Ranking ranking={currentUser.ranking} birthday={currentUser.birthDate} />,
    },
    {
      id: 1,
      name: 'Coupon Store',
      content: <CouponStore ranking={currentUser.ranking} setCurrentUser={setCurrentUser} />,
    },
    {
      id: 2,
      name: 'My Profile',
      content: (
        <MyProfile currentUser={currentUser} shippingCountries={shippingCountries} setCurrentUser={setCurrentUser} />
      ),
    },
    {
      id: 3,
      name: 'My Orders',
      content: <Orders userId={currentUser.id} />,
    },
  ];

  return (
    <div className="w-full max-w-[1000px] flex flex-col justify-start items-center mt-5">
      <div className="w-full flex justify-start items-stretch border border-primary">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center p-2 cursor-pointer ${activeTab === tab.id ? 'bg-primary text-white' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <p className="text-sm sm:text-base font-medium">{tab.name}</p>
          </button>
        ))}
      </div>
      <div className="w-full flex-1 shadow-md p-4 sm:p-7">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
