import CartImage from '@/assets/cart.png';
import CoinsImage from '@/assets/coins.png';
import Image from 'next/image';
import { IoMdInformationCircle } from 'react-icons/io';
import { StoreCouponType } from '../../../typings';
import { Tooltip } from 'react-tooltip';

interface Props {
  coupon: StoreCouponType;
  userRankValue: number;
  setCouponSelected: (value: StoreCouponType) => void;
}

export default function CouponForStore({ coupon, userRankValue, setCouponSelected }: Props) {

  const title = `Costs ${ coupon.cost } points. Requires ${ coupon.minimumOrder }€ order.`;
  const isCouponAvailable = coupon.minimumRankingValue <= userRankValue;
  const rankName =
    coupon.minimumRankingValue === 0
      ? 'Bronze'
      : coupon.minimumRankingValue === 1
        ? 'Silver'
        : coupon.minimumRankingValue === 2
          ? 'Gold'
          : coupon.minimumRankingValue === 3
            ? 'Platinum'
            : 'VIP';

  return (
    <div
      className={ `relative w-full sm:w-auto min-w-[150px] min-h-[75px] flex justify-center items-center gap-2 border-2 border-primary px-5 ${
        isCouponAvailable ? 'cursor-pointer' : 'cursor-not-allowed'
      }` }
      onClick={ isCouponAvailable ? () => setCouponSelected(coupon) : undefined }
    >
      <h2 className="text-h4 mb-2 font-bold capitalize">
        -{ coupon.discount.fixed ? `${ coupon.discount.fixed }€` : `${ coupon.discount.percentage }%` }
      </h2>

      {/* Minimum Order */ }
      { coupon.minimumOrder > 0 && (
        <div
          className="absolute bottom-1 left-1 bg-white flex justify-center items-center gap-1"
          data-tooltip-id="my-coupon-store-tooltip"
          data-tooltip-content={ `Requires ${ coupon.minimumOrder }€ order.` }
        >
          <Image src={ CartImage } alt="Cart" width={ 15 } height={ 15 } />
          <p className="text-xs font-medium">{ coupon.minimumOrder }€</p>
        </div>
      ) }

      {/* Cost */ }
      { coupon.cost > 0 && (
        <div
          className="absolute bottom-1 right-1 bg-white flex justify-center items-center gap-1"
          data-tooltip-id="my-coupon-store-tooltip"
          data-tooltip-content={ `Costs ${ coupon.cost } points.` }
        >
          <p className="text-xs font-medium">{ coupon.cost }</p>
          <Image src={ CoinsImage } alt="Coins" width={ 15 } height={ 15 } />
        </div>
      ) }

      {/* Info Icon */ }
      { isCouponAvailable && (
        <div
          data-tooltip-id="my-coupon-store-tooltip" data-tooltip-content={ title }
          className="absolute top-0 right-0 bg-white transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
        >
          <IoMdInformationCircle className="text-primary text-2xl" />
        </div>
      ) }

      {/* Not available */ }
      { !isCouponAvailable && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
          <p className="text-white text-sm font-medium capitalize">requires { rankName }</p>
        </div>
      ) }

      <Tooltip id="my-coupon-store-tooltip" />
    </div>
  );
}
