import { CouponType } from '../../../typings';
import { IoMdInformationCircle } from 'react-icons/io';

interface Props {
  coupon: CouponType;
}

export default function Coupon({ coupon }: Props) {
  const title = coupon.couponType.isRanked ? `This is a free coupon received by leveling up and can be applied to your next order. Only one free coupon can be used per order` : `This is a purchased coupon that can be applied to your next order. Only one purchased coupon can be used per order`;
  return (
    <div className="relative min-w-[150px] min-h-[75px] flex justify-center items-center gap-2 border-2 border-primary px-5">
      <h2 className="text-base font-bold capitalize">-{ coupon.discount.fixed ? `${ coupon.discount.fixed }€` : `${ coupon.discount.percentage }%` }</h2>
      <div
        title={ title }
        className="absolute top-0 right-0 bg-white transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
      >
        <IoMdInformationCircle className="text-primary text-2xl" />
      </div>
    </div>
  );
}
