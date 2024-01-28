import { motion } from 'framer-motion';
import Image from 'next/image';
import CoinsImage from '@/assets/coins.png';
import Coupon from '@/components/Account/Coupon';
import { UserType } from '../../../typings';

interface Props {
  ranking: UserType['ranking'];
}

export default function CouponStore({ ranking }: Props) {
  return (
    <motion.div
      className="w-full max-w-[1000px] grid grid-cols-[auto_1fr] gap-10 bg-white"
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      transition={ { duration: 0.5 } }
    >
      <h1 className="text-xl font-bold">Available Points</h1>
      <div
        title="The available points can be used to purchase coupons. For each euro spent on products, you will receive 1 point"
        className="flex justify-start items-start gap-1"
      >
        <h1 className="text-xl font-normal">{ ranking.pointsAvailable }</h1>
        <Image src={ CoinsImage } alt="Coins" width={ 25 } height={ 25 } />
      </div>
      <div className="col-span-2 flex justify-start items-start flex-wrap gap-5">
        { ranking.coupons.ranked.map((coupon) => <Coupon coupon={ coupon } key={ coupon.id } />) }
        { ranking.coupons.optional.map((coupon) => <Coupon coupon={ coupon } key={ coupon.id } />) }
      </div>
    </motion.div>
  );
}
