'use client';
import CheckoutBar from '@/components/Cart/CheckoutBar';
import { useEffect, useState } from 'react';
import YourCart from '@/components/Cart/YourCart';
import { OrderProductType, ShippingAddressType, ShippingCountryType } from '../../../typings';
import Totals from '@/components/Cart/Totals';
import ProceedStep from '@/components/Cart/ProceedStep';
import ShippingDetails from '@/components/Cart/ShippingDetails';
import PlaceOrder from '@/components/Cart/PlaceOrder';
import useLocalStorage from '@/hooks/useLocalStorage';
import { toast } from 'react-toastify';
import { BsCartX } from 'react-icons/bs';

const initialShippingAddress: ShippingAddressType = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
  phoneNumber: '',
  email: ''
}

function CartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartProducts, setCartProducts] = useLocalStorage<OrderProductType[]>('cartProducts', []);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);

  // TODO: If user in localStorage, get discount from API
  const [discount, setDiscount] = useState<number>(0);
  //TODO: initialShippingAddress or get from localStorage
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressType>(initialShippingAddress)

  useEffect(() => {
    let total = 0;
    cartProducts.forEach((cartProduct) => {
      if (cartProduct.onSale.isOnSale) {
        total += Number((cartProduct.price - cartProduct.onSale.discount * cartProduct.price).toFixed(2)) * cartProduct.quantity;
      } else {
        total += cartProduct.price * cartProduct.quantity;
      }
    });
    setTotal(total);

    let grandTotal = total + shippingCost - discount;
    setGrandTotal(grandTotal);
  }, [cartProducts, shippingCost, discount]);

  useEffect(() => {
    //   Check if the product quantity does not exceed the max quantity
    const newCartProducts = cartProducts.map((cartProduct) => {
        const maxQuantity = cartProduct.maxQuantity;
        if (cartProduct.quantity > maxQuantity) {
          toast.error('Product quantity exceeds the stock quantity');
          return {
            ...cartProduct,
            quantity: maxQuantity
          };
        }
        return cartProduct;
      }
    );
    setCartProducts(newCartProducts);
  }, [])

  return (
    cartProducts.length === 0 ? (
      <div className="flex-auto min-h-full flex flex-col justify-center items-center gap-5">
        <BsCartX className="text-5xl text-primary" />
        <h1 className="text-h3 font-custom">Your cart is empty</h1>
      </div>
    ) : (
      <>
        <CheckoutBar currentStep={ currentStep } setCurrentStep={ setCurrentStep } />
        { currentStep === 1 && (<YourCart cartProducts={ cartProducts } setCartProducts={ setCartProducts } />) }
        { currentStep === 2 && (
          <ShippingDetails shippingAddress={ shippingAddress } setShippingAddress={ setShippingAddress } shippingCountries={ shippingCountries }
                           setShippingCost={ setShippingCost } />) }
        { currentStep === 3 && (<PlaceOrder cartProducts={ cartProducts } shippingAddress={ shippingAddress } />) }
        <Totals discount={ discount } shippingCost={ shippingCost } total={ total } grandTotal={ grandTotal } />
        <ProceedStep currentStep={ currentStep } setCurrentStep={ setCurrentStep } cartProducts={ cartProducts } shippingAddress={ shippingAddress } />
      </>
    )
  );
}

export default CartPage;

//TODO: Get shipping countries from API
const shippingCountries: ShippingCountryType[] = [
  {
    id: '1',
    name: 'Greece',
    cost: 3.5
  }
]
