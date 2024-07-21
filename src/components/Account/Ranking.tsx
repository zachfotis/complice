import CoinsImage from '@/assets/coins.png';
import Coupon from '@/components/Account/Coupon';
import PermanentCoupon from '@/components/Account/PermanentCoupon';
import { Trophy } from '@/components/Account/Trophy';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoMdInformationCircle } from 'react-icons/io';
import { Tooltip } from 'react-tooltip';
import { CouponType, UserType } from '../../../typings';

interface Props {
  ranking: UserType['ranking'];
  birthday: UserType['birthDate'];
}

function Ranking({ ranking, birthday }: Props) {
  const currentPercent = Math.min((ranking.pointsTotal / ranking.pointsRange.max) * 100, 100);
  const nextRankText =
    ranking.pointsTotal > ranking.pointsRange.max || ranking.name === ranking.nextRanking.name
      ? 'Highest Rank'
      : `${ranking.pointsTotal} / ${ranking.pointsRange.max} pts`;
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
      className="w-full max-w-[1000px] grid grid-cols-[auto_1fr] items-center gap-x-5 sm:gap-x-10 gap-y-6 sm:gap-y-12 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-base sm:text-xl font-[600]">Rank</h1>
      <div className="col-span-2 sm:col-span-1 -mt-4 sm:mt-0 ml-1 sm:ml-0 flex justify-start items-center gap-2">
        <Trophy rankingName={ranking.name} size="2xl" />
        <h1 className="text-base sm:text-xl font-normal">{ranking.name}</h1>
      </div>
      <h1 className="text-base sm:text-xl font-[600]">Next Rank</h1>
      <div className="relative w-full col-span-2 sm:col-span-1 -mt-4 sm:mt-0 ml-1 sm:ml-0 bg-primary border-2 border-primary flex justify-start items-center gap-2">
        <div className="h-full bg-lightGrey flex justify-center items-center" style={{ width: `${currentPercent}%` }}>
          {currentPercent > 40 ? (
            <p className="text-primary text-sm font-medium">{nextRankText}</p>
          ) : (
            <p className="text-lightGrey text-sm font-medium">-</p>
          )}
        </div>
        {currentPercent <= 40 && <p className="text-white text-sm font-medium pl-5">{nextRankText} </p>}
      </div>
      <h1 className="text-base sm:text-xl font-[600]">Available Points</h1>
      <div className="w-fit flex justify-start items-center gap-1 col-span-2 sm:col-span-1 -mt-4 sm:mt-0 ml-1">
        <Image src={CoinsImage} alt="Coins" width={25} height={25} />
        <h1 className="text-base sm:text-xl font-normal">{ranking.pointsAvailable}</h1>
        <IoMdInformationCircle
          className="text-primary text-lg"
          data-tooltip-id="ranking-page-tooltip"
          data-tooltip-content="Points can be used to purchase coupons"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-start items-start gap-5">
        <h1 className="text-base sm:text-xl font-[600]">Permanent Discounts</h1>
        <div className="w-full flex justify-start items-start gap-5 py-2 snap-x overflow-x-auto">
          <PermanentCoupon
            couponType="freeShipping"
            coupon={ranking.coupons.permanent.find((coupon) => coupon.couponType.isFreeShipping) || null}
            birthday={birthday}
          />
          <PermanentCoupon
            couponType="holidays"
            coupon={ranking.coupons.permanent.find((coupon) => coupon.couponType.isHolidays) || null}
            birthday={birthday}
          />
          <PermanentCoupon
            couponType="birthday"
            coupon={ranking.coupons.permanent.find((coupon) => coupon.couponType.isBirthday) || null}
            birthday={birthday}
          />
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-start items-start gap-5">
        <h1 className="text-base sm:text-xl font-[600]">
          My Coupons
          {rankedCouponsArray.length + optionalCouponsArray.length > 0 && (
            <span>
              {' '}
              (
              {rankedCouponsArray.reduce((acc, coupon) => acc + coupon.quantity, 0) +
                optionalCouponsArray.reduce((acc, coupon) => acc + coupon.quantity, 0)}
              )
            </span>
          )}
        </h1>
        {rankedCouponsArray.length + optionalCouponsArray.length > 0 ? (
          <div className="w-full flex justify-start items-start flex-wrap gap-5">
            {rankedCouponsArray.map((coupon) => (
              <Coupon coupon={coupon} key={coupon.id} quantity={coupon.quantity} />
            ))}
            {optionalCouponsArray.map((coupon) => (
              <Coupon coupon={coupon} key={coupon.id} quantity={coupon.quantity} />
            ))}
          </div>
        ) : (
          <p className="text-base font-medium">
            You have no activated coupons. Go to the Coupon Store to purchase one!
          </p>
        )}
      </div>
      <Tooltip id="ranking-page-tooltip" />
    </motion.div>
  );
}

export default Ranking;
