'use client';

import ProductMini from '@/components/Cart/ProductMini';
import { OrderProductType, ShippingAddressType } from '../../../typings';

interface PlaceOrderProps {
  cartProducts: OrderProductType[];
  shippingAddress: ShippingAddressType;
}

function PlaceOrder({ cartProducts, shippingAddress }: PlaceOrderProps) {
  return (
    <div className="w-full max-w-[1000px] mt-5 lg:mt-10">
      {/* Title */}
      <div className="w-full flex justify-between items-center border-b border-gray-200 pb-2">
        <h1 className="text-h3 font-custom">Your Order</h1>
      </div>
      {/*  Products */}
      <div className="w-full flex flex-col justify-start items-start gap-10 mt-5">
        {cartProducts.map((cartProduct) => (
          <div
            key={cartProduct.id + cartProduct.size + ' container'}
            className="w-full flex flex-col justify-start items-start gap-5"
          >
            <ProductMini cartProduct={cartProduct} />
            <div className="w-full border-b border-gray-200" />
          </div>
        ))}
      </div>
      {/*  Shipping Address */}
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10 mt-10">
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <h1 className="text-h4 font-custom">Shipping Address</h1>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <p className="text-base">
              {shippingAddress.firstName} {shippingAddress.lastName}
            </p>
            <p className="text-base">{shippingAddress.address}</p>
            <p className="text-base">
              {shippingAddress.city}, {shippingAddress.postalCode}
            </p>
            <p className="text-base">{shippingAddress.country}</p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <h1 className="text-h4 font-custom">Personal Details</h1>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <p className="text-base">
              {shippingAddress.firstName} {shippingAddress.lastName}
            </p>
            <p className="text-base">{shippingAddress.email}</p>
            <p className="text-base">{shippingAddress.phoneNumber}</p>
          </div>
        </div>
      </div>
      {/*  Horizontal Separator*/}
      <div className="w-full border-b border-gray-200 mt-10" />
    </div>
  );
}

export default PlaceOrder;
