import CartImage from '@/assets/cart.png';
import CoinsImage from '@/assets/coins.png';
import Image from 'next/image';
import { IoMdInformationCircle } from 'react-icons/io';
import { CouponType } from '../../../typings';
import { Tooltip } from 'react-tooltip';

interface Props {
  coupon: CouponType;
  quantity?: number;
}

export default function Coupon({ coupon, quantity = 0 }: Props) {
  const title = coupon.couponType.isRanked
    ? `A free coupon received by leveling up`
    : `A purchased coupon`;
  return (
    <div className="relative w-full sm:w-auto min-w-[150px] min-h-[75px] flex justify-center items-center gap-2 border-2 border-primary px-5">
      <h2 className={`text-h4 ${coupon.cost > 0 || coupon.minimumOrder > 0 ? 'mb-2' : ''} font-bold capitalize`}>
        -{coupon.discount.fixed ? `${coupon.discount.fixed}€` : `${coupon.discount.percentage}%`}
      </h2>

      {/* Minimum Order */}
      {coupon.minimumOrder > 0 && (
        <div
          data-tooltip-id="my-coupon-tooltip" data-tooltip-content="Minimum order to use the coupon"
          className="absolute bottom-1 left-1 bg-white flex justify-center items-center gap-1">
          <Image src={CartImage} alt="Cart" width={15} height={15} />
          <p className="text-xs font-medium">{coupon.minimumOrder}€</p>
        </div>
      )}

      {/* Cost */}
      {coupon.cost > 0 && (
        <div
          data-tooltip-id="my-coupon-tooltip" data-tooltip-content="Cost of the coupon"
          className="absolute bottom-1 right-1 bg-white flex justify-center items-center gap-1">
          <p className="text-xs font-medium">{coupon.cost}</p>
          <Image src={CoinsImage} alt="Coins" width={15} height={15} />
        </div>
      )}

      {/* Info Icon*/}
      <div
        data-tooltip-id="my-coupon-tooltip" data-tooltip-content={ title }
        className="absolute top-0 right-0 bg-white transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
      >
        <IoMdInformationCircle className="text-primary text-2xl" />
      </div>

      {/* Quantity */}
      {quantity > 0 && (
        <div
          data-tooltip-id="my-coupon-tooltip" data-tooltip-content="Quantity of coupons"
          className="absolute top-0 left-1 flex justify-center items-center">
          <p className="text-primary text-sm font-bold">x{quantity}</p>
        </div>
      )}
      <Tooltip id="my-coupon-tooltip" />
    </div>
  );
}
