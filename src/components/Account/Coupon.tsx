import CartImage from '@/assets/cart.png';
import CoinsImage from '@/assets/coins.png';
import Image from 'next/image';
import { IoMdInformationCircle } from 'react-icons/io';
import { CouponType } from '../../../typings';

interface Props {
  coupon: CouponType;
  quantity?: number;
}

export default function Coupon({ coupon, quantity = 0 }: Props) {
  const title = coupon.couponType.isRanked
    ? `This is a free coupon received by leveling up and can be applied to your next order. Only one free coupon can be used per order`
    : `This is a purchased coupon that can be applied to your next order. Only one purchased coupon can be used per order`;
  return (
    <div className="relative w-full sm:w-auto min-w-[150px] min-h-[75px] flex justify-center items-center gap-2 border-2 border-primary px-5">
      <h2 className={`text-h4 ${coupon.cost > 0 || coupon.minimumOrder > 0 ? 'mb-2' : ''} font-bold capitalize`}>
        -{coupon.discount.fixed ? `${coupon.discount.fixed}€` : `${coupon.discount.percentage}%`}
      </h2>

      {/* Minimum Order */}
      {coupon.minimumOrder > 0 && (
        <div className="absolute bottom-1 left-1 bg-white flex justify-center items-center gap-1">
          <Image src={CartImage} alt="Cart" width={15} height={15} />
          <p className="text-xs font-medium">{coupon.minimumOrder}€</p>
        </div>
      )}

      {/* Cost */}
      {coupon.cost > 0 && (
        <div className="absolute bottom-1 right-1 bg-white flex justify-center items-center gap-1">
          <p className="text-xs font-medium">{coupon.cost}</p>
          <Image src={CoinsImage} alt="Coins" width={15} height={15} />
        </div>
      )}

      {/* Info Icon*/}
      <div
        title={title}
        className="absolute top-0 right-0 bg-white transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
      >
        <IoMdInformationCircle className="text-primary text-2xl" />
      </div>

      {/* Quantity */}
      {quantity > 0 && (
        <div className="absolute top-0 left-1 flex justify-center items-center">
          <p className="text-primary text-sm font-bold">x{quantity}</p>
        </div>
      )}
    </div>
  );
}
