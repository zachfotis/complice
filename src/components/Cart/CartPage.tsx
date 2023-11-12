'use client';
import CheckoutBar from '@/components/Cart/CheckoutBar';
import { useEffect, useState } from 'react';
import YourCart from '@/components/Cart/YourCart';
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
  email: '',
};

function CartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartProducts, setCartProducts] = useLocalStorage<OrderProductType[]>('cartProducts', []);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);
  const [userCurrentDiscount, setUserCurrentDiscount] = useState<number>(0);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressType>(initialShippingAddress);

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
      userDiscount = Number((((cartProduct.price  * cartProduct.quantity) - productDiscount) * userCurrentDiscount).toFixed(2)) ;

      total += productTotal;
      discount += productDiscount + userDiscount;
    });

    let grandTotal = total - discount + shippingCost;
    setTotal(total);
    setTotalDiscount(discount);
    setGrandTotal(grandTotal);
  }, [cartProducts, shippingCost, userCurrentDiscount]);

  useEffect(() => {
    //   Check if the product quantity does not exceed the max quantity
    const newCartProducts = cartProducts.map((cartProduct) => {
        const maxQuantity = cartProduct.maxQuantity;
        if (cartProduct.quantity > maxQuantity) {
          toast.error('Product quantity exceeds the stock quantity');
          return {
            ...cartProduct,
            quantity: maxQuantity,
          };
        }
        return cartProduct;
      },
    );

    const fetchCurrentUser = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${ baseUrl }/auth/currentuser`, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-cache',
      });
      const data = await response.json();
      if (data.currentUser) {
        if (data.currentUser.address) {
          setShippingAddress(data.currentUser.address);
          if (data.currentUser.address.country) {

            setShippingCost(shippingCountries.find((country) => country.name === data.currentUser.address.country)?.cost || 0);
          }
        }
        if (data.currentUser.discount) setUserCurrentDiscount(data.currentUser.discount);
      }
    };

    setCartProducts(newCartProducts);
    fetchCurrentUser();
  }, []);

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
        <Totals totalDiscount={ totalDiscount } userDiscount={ userCurrentDiscount } shippingCost={ shippingCost } total={ total } grandTotal={ grandTotal } />
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
    cost: 3.5,
  },
];
