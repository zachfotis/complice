import CoinsImage from '@/assets/coins.png';
import CouponForStore from '@/components/Account/CouponForStore';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StoreCouponType, UserType } from '../../../typings';

interface Props {
  ranking: UserType['ranking'];
  setCurrentUser: (value: UserType) => void;
}

const storeCoupons: StoreCouponType[] = [
  {
    discount: {
      fixed: 10,
      percentage: 0,
    },
    couponType: {
      isOptional: true,
    },
    minimumRankingValue: 1,
    minimumOrder: 65,
    cost: 200,
  },
  {
    discount: {
      fixed: 15,
      percentage: 0,
    },
    couponType: {
      isOptional: true,
    },
    minimumRankingValue: 1,
    minimumOrder: 80,
    cost: 300,
  },
  {
    discount: {
      fixed: 20,
      percentage: 0,
    },
    couponType: {
      isOptional: true,
    },
    minimumRankingValue: 2,
    minimumOrder: 150,
    cost: 500,
  },
  {
    discount: {
      fixed: 50,
      percentage: 0,
    },
    couponType: {
      isOptional: true,
    },
    minimumRankingValue: 3,
    minimumOrder: 250,
    cost: 800,
  },
  {
    discount: {
      fixed: 70,
      percentage: 0,
    },
    couponType: {
      isOptional: true,
    },
    minimumRankingValue: 4,
    minimumOrder: 350,
    cost: 1000,
  },
];

export default function CouponStore({ ranking, setCurrentUser }: Props) {
  return (
    <motion.div
      className="w-full max-w-[1000px] grid grid-cols-[auto_1fr] gap-x-10 gap-y-6 md:gap-y-10 pt-3 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-base sm:text-xl font-[600]">Available Points</h1>
      <div
        title="The available points can be used to purchase coupons. For each euro spent on products, you will receive 1 point"
        className="flex justify-start items-start gap-1"
      >
        <h1 className="text-base sm:text-xl font-normal">{ranking.pointsAvailable}</h1>
        <Image src={CoinsImage} alt="Coins" width={25} height={25} />
      </div>
      <div className="col-span-2 flex justify-start md:justify-between items-start flex-wrap gap-5">
        {storeCoupons.map((coupon) => (
          <CouponForStore
            coupon={coupon}
            userRankValue={ranking.value}
            setCurrentUser={setCurrentUser}
            key={coupon.cost}
          />
        ))}
      </div>
    </motion.div>
  );
}
