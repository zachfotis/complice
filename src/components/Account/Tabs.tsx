'use client';

import { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: 'My Profile',
      content: 'My Profile'
    },
    {
      id: 1,
      name: 'My Orders',
      content: 'My Orders'
    }
  ];

  return (
    <div className="w-full max-w-[1000px] flex justify-start items-center border border-primary">
      { tabs.map((tab) => (
        <button key={ tab.id } className={ `flex-1 text-center p-2 cursor-pointer ${ activeTab === tab.id ? 'bg-primary text-white' : '' }` }
          onClick={ () => setActiveTab(tab.id) }>
          <p className="text-base font-medium">{ tab.name }</p>
        </button>
      )) }
    </div>
  );
}

export default Tabs;
