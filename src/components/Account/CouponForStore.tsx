import Image from 'next/image';
import CartImage from '@/assets/cart.png';
import CoinsImage from '@/assets/coins.png';
import { IoMdInformationCircle } from 'react-icons/io';
import { StoreCouponType, UserType } from '../../../typings';
import Button from '@/components/common/Button';
import { toast } from 'react-toastify';

interface Props {
  coupon: StoreCouponType;
  userRankValue: number;
  setCurrentUser: (value: UserType) => void;
}

export default function CouponForStore({ coupon, userRankValue, setCurrentUser }: Props) {
  const title = `This coupon can be purchased for ${ coupon.cost } points and can be applied to an order of at least ${ coupon.minimumOrder }€`;
  const isCouponAvailable = coupon.minimumRankingValue <= userRankValue;
  const rankName = coupon.minimumRankingValue === 0 ? 'Bronze' : coupon.minimumRankingValue === 1 ? 'Silver' : coupon.minimumRankingValue === 2 ? 'Gold' : coupon.minimumRankingValue === 3 ? 'Platinum' : 'VIP';

  const handleBuyCoupon = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${ baseUrl }/coupons/buy-coupon`, {
        method: 'POST',
        credentials: 'include',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          discountValue: coupon.discount.fixed,
        }),
      });
      const data = await response.json();

      if (data.message) {
        toast.error(data.message);
      } else if (data.currentUser) {
        setCurrentUser(data.currentUser);
        toast.success('Coupon purchased successfully!');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="relative min-w-[150px] min-h-[75px] flex justify-center items-center gap-2 border-2 border-primary px-5 group">
      <h2 className="text-h4 mb-2 font-bold capitalize">-{ coupon.discount.fixed ? `${ coupon.discount.fixed }€` : `${ coupon.discount.percentage }%` }</h2>

      {/* Minimum Order */ }
      { coupon.minimumOrder > 0 && (
        <div className="absolute bottom-1 left-1 bg-white flex justify-center items-center gap-1"
          title={ `This coupon can be applied to an order of at least ${ coupon.minimumOrder }€.` }>
          <Image src={ CartImage } alt="Cart" width={ 15 } height={ 15 } />
          <p className="text-xs font-medium">{ coupon.minimumOrder }€</p>
        </div>
      ) }

      {/* Cost */ }
      { coupon.cost > 0 && (
        <div className="absolute bottom-1 right-1 bg-white flex justify-center items-center gap-1" title={ `This coupon can be purchased for ${ coupon.cost } points.` }>
          <p className="text-xs font-medium">{ coupon.cost }</p>
          <Image src={ CoinsImage } alt="Coins" width={ 15 } height={ 15 } />
        </div>
      ) }

      {/* Info Icon */ }
      { isCouponAvailable && (
        <div title={ title } className="absolute top-0 right-0 bg-white transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <IoMdInformationCircle className="text-primary text-2xl" />
        </div>
      ) }

      {/* Not available */ }
      { !isCouponAvailable && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
          <p className="text-white text-sm font-medium capitalize">requires { rankName }</p>
        </div>
      ) }

      { isCouponAvailable && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button text="BUY" variant="sm-light" onClick={ handleBuyCoupon } />
        </div>
      ) }
    </div>
  );
}
