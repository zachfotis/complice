import { buyCoupon } from '@/actions/clientApi';
import CoinsImage from '@/assets/coins.png';
import CouponForStore from '@/components/Account/CouponForStore';
import ConfirmationModal from '@/components/common/ConfirmationModal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [couponSelected, setCouponSelected] = useState<StoreCouponType | null>(null);

  useEffect(() => {
    if (couponSelected) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [couponSelected]);

  useEffect(() => {
    if (!isModalOpen) {
      setCouponSelected(null);
    }
  }, [isModalOpen]);

  const handleBuyCoupon = async () => {
    if (!couponSelected) return;

    const data = await buyCoupon(couponSelected.discount.fixed);

    if (data?.errors) {
      toast.error(data?.errors.map((err: { message: string }) => err.message).join('. '));
    } else if (data.currentUser) {
      setCurrentUser(data.currentUser);
      toast.success('Coupon purchased successfully!');
    }

    setCouponSelected(null);
  };

  return (
    <motion.div
      className="w-full max-w-[1000px] grid grid-cols-[auto_1fr] gap-x-10 gap-y-6 md:gap-y-10 pt-3 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-base sm:text-xl font-[600]">Available Points</h1>
      <div className="flex justify-start items-center gap-1">
        <Image src={CoinsImage} alt="Coins" width={25} height={25} />
        <h1 className="text-base sm:text-xl font-normal">{ranking.pointsAvailable}</h1>
        <IoMdInformationCircle
          className="text-primary text-lg"
          data-tooltip-id="coupon-store-tooltip"
          data-tooltip-content="Points can be used to purchase coupons"
        />
      </div>
      <div className="col-span-2 flex justify-start md:justify-between items-start flex-wrap gap-5">
        {storeCoupons.map((coupon) => (
          <CouponForStore
            key={coupon.cost}
            coupon={coupon}
            userRankValue={ranking.value}
            setCouponSelected={setCouponSelected}
          />
        ))}
      </div>
      <Tooltip id="coupon-store-tooltip" />
      {couponSelected && (
        <ConfirmationModal
          title={`Buy ${couponSelected.discount.fixed}€ coupon`}
          message={`Are you sure you want to buy this coupon for ${couponSelected.cost} points? You can use it on orders over ${couponSelected.minimumOrder}€.`}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onConfirm={handleBuyCoupon}
        />
      )}
    </motion.div>
  );
}
