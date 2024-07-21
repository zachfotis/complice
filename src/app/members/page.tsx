import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership Benefits',
  description: 'Learn about the benefits of joining the Complice Rewards Program',
};

function MembersPage() {
  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <PageTitle title="Membership Benefits" />
        <div className="w-full max-w-[1000px] flex flex-col items-start justify-start gap-5">
          {rewardsData.map((item, index) => (
            <div key={index} className="flex flex-col items-start justify-start gap-3 text-justify">
              <h1 className="text-h4 font-custom">{item.title}</h1>
              {item.text.map((text, index) => (
                <p key={index} className="text-base text-secondary">
                  {text}
                </p>
              ))}
            </div>
          ))}
          <div className="w-full flex justify-center items-center">
            <h3 className="mt-20 mb-10 text-lg font-medium w-full max-w-[1000px] text-center">
              Join the Complice Rewards Program today and start enjoying the benefits of being a valued member. Happy
              shopping!
            </h3>
          </div>
        </div>
      </PageBody>
    </PageTemplate>
  );
}

export default MembersPage;

const rewardsData = [
  {
    title: 'User Account and Rewards Program',
    text: [
      "Welcome to the Complice Rewards Program! Our program is designed to reward you for every purchase you make. Here's everything you need to know about how it works:",
    ],
  },
  {
    title: 'Account Registration',
    text: [
      "Create an account with your email and password to start earning points and enjoy exclusive discounts and rewards. As a welcome gift, you'll receive a 10% discount on your first order after registering.",
    ],
  },
  {
    title: 'Points and Ranks',
    text: [
      'When you buy items from Complice, you collect points and advance through different ranks. Points can be spent on discount coupons, and each point is equivalent to 1€.',
    ],
  },
  {
    title: 'Bronze Rank',
    text: [
      'Points Required: 0 points',
      'Rewards:',
      '- Welcome 10% discount on your first order',
      '- Starting point for collecting points',
    ],
  },
  {
    title: 'Silver Rank',
    text: [
      'Points Required: 500 points',
      'Rewards:',
      '- 5% discount on the next 2 orders',
      'Option to buy discount coupons:',
      '- 10€ coupon (costs 200 points, for orders over 65€)',
      '- 15€ coupon (costs 300 points, for orders over 80€)',
    ],
  },
  {
    title: 'Gold Rank',
    text: [
      'Points Required: 2,500 points',
      'Rewards:',
      '- 7% discount on the next 2 orders',
      'Option to buy discount coupons:',
      '- 10€ coupon (costs 200 points, for orders over 65€)',
      '- 15€ coupon (costs 300 points, for orders over 80€)',
      '- 20€ coupon (costs 500 points, for orders over 150€)',
    ],
  },
  {
    title: 'Platinum Rank',
    text: [
      'Points Required: 5,000 points',
      'Rewards:',
      '- Free shipping on all orders',
      '- 10% discount on the next 2 orders',
      'Option to buy discount coupons:',
      '- 10€ coupon (costs 200 points, for orders over 65€)',
      '- 15€ coupon (costs 300 points, for orders over 80€)',
      '- 20€ coupon (costs 500 points, for orders over 150€)',
      '- 50€ coupon (costs 800 points, for orders over 250€)',
    ],
  },
  {
    title: 'VIP Rank',
    text: [
      'Points Required: 10,000 points',
      'Rewards:',
      '- Free shipping on all orders',
      '- 12% discount on the next 2 orders',
      '- Two gifts annually (Christmas and birthday)',
      'Option to buy discount coupons:',
      '- 10€ coupon (costs 200 points, for orders over 65€)',
      '- 15€ coupon (costs 300 points, for orders over 80€)',
      '- 20€ coupon (costs 500 points, for orders over 150€)',
      '- 50€ coupon (costs 800 points, for orders over 250€)',
      '- 70€ coupon (costs 1,000 points, for orders over 350€)',
    ],
  },
  {
    title: 'How to Earn Points',
    text: [
      'Every euro you spend at Complice earns you one point. The more you shop, the more points you collect, allowing you to climb the ranks and unlock greater rewards.',
    ],
  },
  {
    title: 'Using Your Points',
    text: [
      'You can redeem your points for discount coupons which can be applied to future purchases. The available coupons and their costs in points are detailed above.',
    ],
  },
];
