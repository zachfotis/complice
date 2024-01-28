import { useEffect, useState } from 'react';
import { OrderProductType, ShippingCountryType } from '../../../typings';

interface TotalsProps {
  cartProducts: OrderProductType[];
  shippingCost: number;
}

const shippingCountries: ShippingCountryType[] = [
  {
    id: '1',
    name: 'Greece',
    cost: 3.5,
  },
];

function Totals({ cartProducts, shippingCost }: TotalsProps) {
  const [total, setTotal] = useState<number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);
  const [userDiscount, setUserDiscount] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    let discount = 0;

    cartProducts.forEach((cartProduct) => {
      let productTotal = 0;
      let productDiscount = 0;
      let userDiscount = 0;

      if (cartProduct.onSale.isOnSale) {
        productTotal = Number((cartProduct.price).toFixed(2)) * cartProduct.quantity;
        productDiscount = Number((cartProduct.price * cartProduct.onSale.discount).toFixed(2)) * cartProduct.quantity;
      } else {
        productTotal = Number((cartProduct.price).toFixed(2)) * cartProduct.quantity;
      }
      userDiscount = Number((((cartProduct.price * cartProduct.quantity) - productDiscount) * userDiscount).toFixed(2));

      total += productTotal;
      discount += productDiscount + userDiscount;
    });

    let grandTotal = total - discount + shippingCost;
    setTotal(total);
    setTotalDiscount(discount);
    setGrandTotal(grandTotal);
  }, [cartProducts]);

  return (
    <div className="w-full max-w-[1000px] flex flex-col justify-start items-start gap-5 mt-2 md:mt-5">
      {/*  Cart Total*/ }
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h4 font-custom">Cart Total</p>
        <p className="text-base font-medium">{ total.toFixed(2) } &euro;</p>
      </div>
      {/*  Discount*/ }
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h4 font-custom flex justify-start items-center flex-wrap gap-2">Discount
          { userDiscount > 0 && (
            <span className="text-sm font-normal text-gray-400">( Includes {(userDiscount * 100).toFixed(0)}% user discount! )</span>
          ) }
        </p>
        <p className="text-base font-medium">{totalDiscount ? `- ${totalDiscount.toFixed(2)}` : 0.00 } &euro;</p>
      </div>
      {/*  Shipping Cost*/ }
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h4 font-custom flex justify-start items-center flex-wrap gap-2">Shipping Cost
          { shippingCost === 0 && (
            <span className="text-sm font-normal text-gray-400">( Will be calculated after you enter your address )</span>
          ) }
        </p>
        <p className="text-base font-medium whitespace-nowrap">+ { shippingCost.toFixed(2) } &euro;</p>
      </div>
      {/* Separator */ }
      <div className="w-full border-b border-gray-200" />
      {/*  Grand Total*/ }
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h3 font-custom">Order Total</p>
        <p className="text-lg font-medium">{ grandTotal.toFixed(2) } &euro;</p>
      </div>
    </div>
  );
}

export default Totals;
