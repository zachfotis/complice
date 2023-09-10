'use client';

import { useState } from 'react';
import { OrderType, ShippingCountryType, UserType } from '../../../typings';
import { MyProfile } from '@/components/Account/MyProfile';
import { Orders } from '@/components/Account/Orders';

interface ITab {
  currentUser: UserType;
  shippingCountries: ShippingCountryType[];
  orders: OrderType[];
}

function Tabs({ currentUser, shippingCountries, orders }: ITab) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: 'My Profile',
      content: <MyProfile currentUser={ currentUser } shippingCountries={ shippingCountries } />,
    },
    {
      id: 1,
      name: 'My Orders',
      content: <Orders orders={ orders } />,
    },
  ];

  return (
    <div className="w-full max-w-[1000px] flex flex-col justify-start items-center">
      <div className="w-full flex justify-start items-center border border-primary">
        { tabs.map((tab) => (
          <button key={ tab.id } className={ `flex-1 text-center p-2 cursor-pointer ${ activeTab === tab.id ? 'bg-primary text-white' : '' }` }
            onClick={ () => setActiveTab(tab.id) }>
            <p className="text-base font-medium">{ tab.name }</p>
          </button>
        )) }
      </div>
      <div className="w-full flex-1 shadow-md p-2 md:p-7">
        { tabs[activeTab].content }
      </div>
    </div>
  );
}

export default Tabs;
