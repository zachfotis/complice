'use client';
import CheckoutBar from '@/components/Cart/CheckoutBar';
import { useState } from 'react';
import YourCart from '@/components/Cart/YourCart';
import DATA from '@/assets/dummy/products.json';
import { OrderProductType } from '../../../typings';

function CartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartProducts, setCartProducts] = useState<OrderProductType[]>(products);

  return (
    <>
      <CheckoutBar currentStep={ currentStep } setCurrentStep={ setCurrentStep } />
      <YourCart products={ cartProducts } />
    </>
  );
}

export default CartPage;

// Get the 2 first products of the DATA array and map to OrderProductType
const products: OrderProductType[] = DATA.splice(0, 2).map((product) => {
  return {
    id: product.id,
    title: product.title,
    size: 'M',
    quantity: 1,
    price: product.price,
    thumb: product.thumb
  };
});

