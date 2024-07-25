'use client';

import { RankingNamesEnum } from '@/constants';
import { useEffect, useState } from 'react';
import { OrderProductType, UserType } from '../../../typings';
import { Trophy } from '../Account/Trophy';

interface TotalsProps {
  currentStep: number;
  cartProducts: OrderProductType[];
  shippingCost: number;
  currentUser: UserType | null;
  rankedCouponSelected: string;
  setRankedCouponSelected: (value: string) => void;
  optionalCouponSelected: string;
  setOptionalCouponSelected: (value: string) => void;
}

function Totals({
  currentStep,
  cartProducts,
  shippingCost,
  currentUser,
  rankedCouponSelected,
  optionalCouponSelected,
  setRankedCouponSelected,
  setOptionalCouponSelected,
}: TotalsProps) {
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [productDiscount, setProductDiscount] = useState<number>(0);
  const [rankDiscount, setRankDiscount] = useState<number>(0);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const [freeShippingDiscount, setFreeShippingDiscount] = useState<number>(0);
  const [orderTotal, setOrderTotal] = useState<number>(0);

  useEffect(() => {
    if (optionalCouponSelected) {
      setOptionalCouponSelected('');
    }
  }, [cartProducts]);

  useEffect(() => {
    let cartTotalTemp = 0;
    let productDiscountTemp = 0;

    // Calculate Order Total
    cartProducts.forEach((cartProduct) => {
      if (cartProduct.onSale.isOnSale) {
        cartTotalTemp += Number(cartProduct.price.toFixed(2)) * cartProduct.quantity;
        productDiscountTemp +=
          Number((cartProduct.price * cartProduct.onSale.discount).toFixed(2)) * cartProduct.quantity;
      } else {
        cartTotalTemp += Number(cartProduct.price.toFixed(2)) * cartProduct.quantity;
      }
    });

    setCartTotal(cartTotalTemp);
    setProductDiscount(productDiscountTemp);

    // Calculate Rank Discount
    if (currentUser && currentUser?.ranking.coupons.ranked.length > 0) {
      const rankDiscountTemp =
        ((cartTotalTemp - productDiscountTemp) *
          (currentUser?.ranking.coupons.ranked.find((coupon) => coupon.id === rankedCouponSelected)?.discount
            .percentage || 0)) /
        100;

      if (rankDiscountTemp) {
        setRankDiscount(rankDiscountTemp);
      }
    }

    // Calculate Coupon Discount
    if (currentUser && currentUser?.ranking.coupons.optional.length > 0) {
      const couponDiscountTemp =
        currentUser?.ranking.coupons.optional.find((coupon) => coupon.id === optionalCouponSelected)?.discount.fixed ||
        0;
      setCouponDiscount(couponDiscountTemp);
    }
  }, [cartProducts, currentUser, rankedCouponSelected, optionalCouponSelected]);

  useEffect(() => {
    const cheapestRankedCoupon = currentUser?.ranking.coupons.ranked.sort(
      (a, b) => a.discount.percentage - b.discount.percentage
    )[0];

    setRankedCouponSelected(cheapestRankedCoupon?.id || '');
  }, [currentUser]);

  useEffect(() => {
    const isFreeShippingCoupon = currentUser?.ranking.coupons.permanent.find(
      (coupon) => coupon.couponType.isFreeShipping === true
    );
    const isFreeShippingTotal = cartTotal - productDiscount - rankDiscount - couponDiscount > 300;

    if (isFreeShippingCoupon || isFreeShippingTotal) {
      setFreeShippingDiscount(shippingCost);
    } else {
      setFreeShippingDiscount(0);
    }
  }, [shippingCost, currentUser, cartTotal, productDiscount, rankDiscount, couponDiscount]);

  useEffect(() => {
    setOrderTotal(cartTotal - productDiscount - rankDiscount - couponDiscount + shippingCost - freeShippingDiscount);
  }, [currentUser, rankDiscount, couponDiscount, shippingCost, freeShippingDiscount, cartTotal, productDiscount]);

  return (
    <div className="w-full max-w-[1000px] flex flex-col justify-start items-start gap-5 mt-2 md:mt-5">
      {/*  Cart Total*/}
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h4 sm:text-h3 font-custom">Cart Total</p>
        <p className="text-base font-medium whitespace-nowrap">{cartTotal.toFixed(2)} &euro;</p>
      </div>
      {/*  Product Discount*/}
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h4 sm:text-h3 font-custom flex justify-start items-center flex-wrap gap-2">
          Product Discount
        </p>
        <p className="text-base font-medium whitespace-nowrap"> -{productDiscount.toFixed(2)} &euro;</p>
      </div>
      {/*  Shipping Cost*/}
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h4 sm:text-h3 font-custom flex justify-start items-center flex-wrap gap-2">
          Shipping Cost
          {shippingCost === 0 && (
            <span className="text-sm font-normal text-gray-400">
              ( Will be calculated after you enter your address )
            </span>
          )}
        </p>
        <p className="text-base font-medium whitespace-nowrap">+ {shippingCost.toFixed(2)} &euro;</p>
      </div>

      {/* Separator */}
      <div className="w-full border-b border-gray-200" />
      {/* Free Shipping Discount*/}
      {freeShippingDiscount > 0 && (
        <div className="w-full flex justify-between items-center gap-10">
          <div className="flex justify-start items-center gap-2">
            <p className="text-h4 sm:text-h3 font-custom">
              Free Shipping <span className="hidden sm:inline">Discount</span>
            </p>
            {currentUser &&
              currentUser?.ranking.coupons.permanent.find((coupon) => coupon.couponType.isFreeShipping) && (
                <Trophy rankingName={currentUser?.ranking.name as RankingNamesEnum} size="2xl" />
              )}
          </div>
          <p className="text-base font-medium whitespace-nowrap"> - {freeShippingDiscount.toFixed(2)} &euro;</p>
        </div>
      )}
      {/*  Rank Discount*/}
      {currentUser && currentUser?.ranking.coupons.ranked.length > 0 && (
        <div className="w-full flex justify-between items-center gap-10">
          <div className="flex flex-col justify-start items-start gap-x-5 gap-y-1 sm:flex-row sm:items-center">
            <div className="flex justify-start items-center gap-2">
              <p className="text-h4 sm:text-h3 font-custom">Rank Discount</p>
              <Trophy rankingName={currentUser?.ranking.name as RankingNamesEnum} size="2xl" />
            </div>
            <select
              className="text-base font-medium disabled:opacity-50"
              disabled={currentStep !== 1}
              value={rankedCouponSelected}
              onChange={(e) => {
                setRankedCouponSelected(e.target.value);
              }}
            >
              {currentUser?.ranking.coupons.ranked
                .sort((a, b) => a.discount.percentage - b.discount.percentage)
                .map((coupon) => (
                  <option key={coupon.id} value={coupon.id}>
                    {coupon.discount.fixed ? `${coupon.discount.fixed} &euro;` : `${coupon.discount.percentage} %`}
                  </option>
                ))}
            </select>
          </div>
          <p className="text-base font-medium whitespace-nowrap"> - {rankDiscount.toFixed(2)} &euro;</p>
        </div>
      )}
      {/*  Coupon Discount*/}
      {currentUser && currentUser?.ranking.coupons.optional.length > 0 && (
        <div className="w-full flex justify-between items-center gap-10">
          <div className="flex flex-col justify-start items-start gap-x-5 gap-y-1 sm:flex-row sm:items-center">
            <div className="flex justify-start items-center gap-2">
              <p className="text-h4 sm:text-h3 font-custom">Coupon Discount</p>
              <Trophy rankingName={currentUser?.ranking.name as RankingNamesEnum} size="2xl" />
            </div>
            <select
              className="text-base font-medium disabled:opacity-50"
              disabled={currentStep !== 1}
              value={optionalCouponSelected}
              onChange={(e) => {
                setOptionalCouponSelected(e.target.value);
              }}
            >
              <option value="">None</option>
              {currentUser?.ranking.coupons.optional
                .sort((a, b) => a.discount.fixed - b.discount.fixed)
                .map((coupon) => (
                  <option
                    key={coupon.id}
                    value={coupon.id}
                    disabled={coupon.minimumOrder > cartTotal - productDiscount - rankDiscount}
                    title={`Minimum order: ${coupon.minimumOrder}€`}
                    className="disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
                  >
                    {coupon.discount.fixed ? `${coupon.discount.fixed} €` : `${coupon.discount.percentage} %`}
                  </option>
                ))}
            </select>
          </div>
          <p className="text-base font-medium whitespace-nowrap">
            {optionalCouponSelected ? '-' : ''} {couponDiscount.toFixed(2)} &euro;
          </p>
        </div>
      )}
      {/* Separator */}
      {currentUser &&
        (currentUser.ranking.coupons.ranked.length > 0 || currentUser.ranking.coupons.ranked.length > 0) && (
          <div className="w-full border-b border-gray-200" />
        )}
      {/*  Grand Total*/}
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h3 font-custom">Order Total</p>
        <p className="text-lg font-medium whitespace-nowrap">{orderTotal.toFixed(2)} &euro;</p>
      </div>
    </div>
  );
}

export default Totals;
