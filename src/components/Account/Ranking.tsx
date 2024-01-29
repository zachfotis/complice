import { motion } from 'framer-motion';
import { CouponType, UserType } from '../../../typings';
import CoinsImage from '@/assets/coins.png';
import Image from 'next/image';
import PermanentCoupon from '@/components/Account/PermanentCoupon';
import Coupon from '@/components/Account/Coupon';

interface Props {
  ranking: UserType['ranking'];
  birthday: UserType['birthDate'];
}

function Ranking({ ranking, birthday }: Props) {
  const currentPercent = Math.min(ranking.pointsTotal / ranking.pointsRange.max * 100, 100);
  const nextRankText = ranking.pointsTotal > ranking.pointsRange.max || ranking.name === ranking.nextRanking.name ? 'You have reached the highest rank' : `${ ranking.pointsTotal } / ${ ranking.pointsRange.max } pts`;
  const groupedRankedCoupons: { [key: number]: CouponType & { quantity: number } } = {};
  const groupedOptionalCoupons: { [key: number]: CouponType & { quantity: number } } = {};

  ranking.coupons.ranked.forEach((coupon) => {
    if (groupedRankedCoupons[coupon.discount.percentage]) {
      groupedRankedCoupons[coupon.discount.percentage].quantity += 1;
    } else {
      groupedRankedCoupons[coupon.discount.percentage] = { ...coupon, quantity: 1 };
    }
  });

  ranking.coupons.optional.forEach((coupon) => {
    if (groupedOptionalCoupons[coupon.discount.fixed]) {
      groupedOptionalCoupons[coupon.discount.fixed].quantity += 1;
    } else {
      groupedOptionalCoupons[coupon.discount.fixed] = { ...coupon, quantity: 1 };
    }
  });

  const rankedCouponsArray = Object.values(groupedRankedCoupons);
  const optionalCouponsArray = Object.values(groupedOptionalCoupons);

  return (
    <motion.div
      className="w-full max-w-[1000px] grid grid-cols-[auto_1fr] gap-10 bg-white"
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      transition={ { duration: 0.5 } }
    >
      <h1 className="text-xl font-bold">Rank</h1>
      <h1 className="text-xl font-normal">{ ranking.name }</h1>
      <h1 className="text-xl font-bold">Next Rank</h1>
      <div className="relative w-full h-5 bg-primary border-2 border-primary mt-2 flex justify-start items-center gap-2">
        <div className="h-full bg-lightGrey flex justify-center items-center" style={ { width: `${ currentPercent }%` } }>
          { currentPercent > 50 && <p className="text-primary text-sm font-medium">{ nextRankText }</p> }
        </div>
        { currentPercent <= 50 && <p className="text-white text-sm font-medium">{ nextRankText } </p> }
      </div>
      <h1 className="text-xl font-bold">Available Points</h1>
      <div
        title="The available points can be used to purchase coupons. For each euro spent on products, you will receive 1 point"
        className="flex justify-start items-start gap-1"
      >
        <h1 className="text-xl font-normal">{ ranking.pointsAvailable }</h1>
        <Image src={ CoinsImage } alt="Coins" width={ 25 } height={ 25 } />
      </div>
      <div className="col-span-2 flex flex-col justify-start items-start gap-5">
        <h1 className="text-xl font-bold">Permanent Discounts</h1>
        <div className="flex justify-start items-start gap-5">
          <PermanentCoupon couponType="freeShipping" coupon={ ranking.coupons.permanent.find((coupon) => coupon.couponType.isFreeShipping) || null } birthday={ birthday } />
          <PermanentCoupon couponType="holidays" coupon={ ranking.coupons.permanent.find((coupon) => coupon.couponType.isHolidays) || null } birthday={ birthday } />
          <PermanentCoupon couponType="birthday" coupon={ ranking.coupons.permanent.find((coupon) => coupon.couponType.isBirthday) || null } birthday={ birthday } />
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-start items-start gap-5">
        <h1 className="text-xl font-bold">My Coupons
          { rankedCouponsArray.length + optionalCouponsArray.length > 0 && <span> ({ rankedCouponsArray.length + optionalCouponsArray.length })</span> }
        </h1>
        { rankedCouponsArray.length + optionalCouponsArray.length > 0 ? (
        <div className="flex justify-start items-start flex-wrap gap-5">
          { rankedCouponsArray.map((coupon) => <Coupon coupon={ coupon } key={ coupon.id } quantity={ coupon.quantity } />) }
          { optionalCouponsArray.map((coupon) => <Coupon coupon={ coupon } key={ coupon.id } quantity={ coupon.quantity } />) }
        </div>
        ) : (
          <p className="text-base font-medium">You have no activated coupons. Go to the Coupon Store to purchase one!</p>
        ) }
      </div>
    </motion.div>
  );
}

export default Ranking;
