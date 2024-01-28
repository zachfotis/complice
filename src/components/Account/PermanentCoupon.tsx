import { CouponType, UserType } from '../../../typings';
import FreeShippingImage from '@/assets/free-shipping.png';
import HolidayGiftImage from '@/assets/gift-box.png';
import BirthdayGiftImage from '@/assets/birthday-cake.png';
import Image from 'next/image';
import { IoMdInformationCircle } from 'react-icons/io';

interface Props {
  coupon: CouponType | null;
  couponType: 'freeShipping' | 'holidays' | 'birthday';
  birthday: UserType['birthDate'];
}

export default function PermanentCoupon({ coupon, couponType, birthday }: Props) {
  let title = '';

  switch (couponType) {
    case 'freeShipping':
      title = 'Enjoy free shipping on all of your orders';
      break;
    case 'holidays':
      title = 'You will get a gift on holidays';
      break;
    case 'birthday':
      title = 'You will get a gift on your birthday';
      break;
  }

  return (
    <div className="relative min-w-[200px] min-h-[110px] flex flex-col justify-between items-center gap-2 border-2 border-primary pt-2">
      { couponType === 'freeShipping' && <Image src={ FreeShippingImage } alt="Free Shipping" width={ 80 } height={ 80 } className="flex-1 object-contain" /> }
      { couponType === 'holidays' && <Image src={ HolidayGiftImage } alt="Holiday Gift" width={ 60 } height={ 60 } className="flex-1 object-contain" /> }
      { couponType === 'birthday' && <Image src={ BirthdayGiftImage } alt="Birthday Gift" width={ 60 } height={ 60 } className="flex-1 object-contain" /> }
      { ((couponType === 'freeShipping' && !coupon?.couponType.isFreeShipping) || (couponType === 'holidays' && !coupon?.couponType.isHolidays) || (couponType === 'birthday' && !coupon?.couponType.isBirthday)) ? (
        <div className="absolute top-0 left-0 opacity-90 bg-lightGrey w-full h-full flex flex-col justify-center items-center gap-1">
          <h2 className="text-base font-bold capitalize">{ couponType === 'freeShipping' ? 'Free Shipping' : couponType === 'holidays' ? 'Holiday Gift' : 'Birthday Gift' }</h2>
          <p className="text-xs font-medium">{ couponType === 'freeShipping' ? 'requires Platinum' : couponType === 'holidays' ? 'requires VIP' : 'requires VIP' }</p>
          <p className="text-xs font-medium">{ (couponType === 'holidays' || couponType === 'birthday') && !birthday ? 'requires Birthday' : '' }</p>
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col justify-end items-center gap-1">
            <h2
              className="w-full bg-primary text-whiteGrey text-center text-base font-normal capitalize py-1">{ couponType === 'freeShipping' ? 'Free Shipping' : couponType === 'holidays' ? 'Holiday Gift' : 'Birthday Gift' }</h2>
            { !birthday && (couponType === 'holidays' || couponType === 'birthday') && <p className="text-xs font-medium">requires Birthday</p> }
          </div>
          <div
            title={ title }
            className="absolute top-0 right-0 bg-white transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
          >
            <IoMdInformationCircle className="text-primary text-2xl" />
          </div>
        </>
      ) }
    </div>
  )
    ;
}
