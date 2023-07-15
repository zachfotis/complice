'use client';
import CheckoutBar from '@/components/Cart/CheckoutBar';
import { useEffect, useState } from 'react';
import YourCart from '@/components/Cart/YourCart';
import DATA from '@/assets/dummy/products.json';
import { OrderProductType, ShippingAddressType, ShippingCountryType } from '../../../typings';
import Totals from '@/components/Cart/Totals';
import ProceedStep from '@/components/Cart/ProceedStep';
import ShippingDetails from '@/components/Cart/ShippingDetails';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PlaceOrder from '@/components/Cart/PlaceOrder';

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
  // TODO: Get cartProducts from localStorage
  const [cartProducts, setCartProducts] = useState<OrderProductType[]>(products);
  // TODO: If user in localStorage, get discount from API
  const [discount, setDiscount] = useState<number>(0);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);
  //TODO: initialShippingAddress or get from localStorage
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressType>(initialShippingAddress)

  useEffect(() => {
    let total = 0;
    cartProducts.forEach((cartProduct) => {
      total += cartProduct.price * cartProduct.quantity;
    });
    setTotal(total);

    let grandTotal = total + shippingCost - discount;
    setGrandTotal(grandTotal);
  }, [cartProducts, shippingCost, discount]);

  return (
    <>
      <CheckoutBar currentStep={ currentStep } setCurrentStep={ setCurrentStep } />
      { currentStep === 1 && (<YourCart cartProducts={ cartProducts } setCartProducts={ setCartProducts } />) }
      { currentStep === 2 && (
        <ShippingDetails shippingAddress={ shippingAddress } setShippingAddress={ setShippingAddress } shippingCountries={ shippingCountries }
                         setShippingCost={ setShippingCost } />) }
      { currentStep === 3 && (<PlaceOrder cartProducts={ cartProducts } shippingAddress={ shippingAddress } />) }
      <Totals discount={ discount } shippingCost={ shippingCost } total={ total } grandTotal={ grandTotal } />
      <ProceedStep currentStep={ currentStep } setCurrentStep={ setCurrentStep } cartProducts={ cartProducts } shippingAddress={ shippingAddress } />
      <ToastContainer autoClose={ 2000 } />
    </>
  );
}

export default CartPage;

// Get the 2 first products of the DATA array and map to OrderProductType
const products: OrderProductType[] = DATA.splice(0, 2).map((product) => {
  const userSize = 'M';
  const userQuantity = 1;
  const maxQuantity = product.quantity[userSize] || userQuantity;
  return {
    id: product.id,
    title: product.title,
    size: userSize,
    quantity: userQuantity,
    maxQuantity: maxQuantity,
    price: product.price,
    thumb: product.thumb
  };
});

const shippingCountries: ShippingCountryType[] = [
  {
    id: '1',
    name: 'Greece',
    code: 'GR',
    cost: 3.5
  }
]
