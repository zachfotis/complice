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
import Loader from '@/components/common/Loader';
import { OrderProductType, ShippingAddressType, ShippingCountryType, UserType } from '../../../typings';

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

//TODO: Get shipping countries from API
const shippingCountries: ShippingCountryType[] = [
  {
    id: '1',
    name: 'Greece',
    cost: 3.5,
  },
];

function CartPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [cartProducts, setCartProducts] = useLocalStorage<OrderProductType[]>('cartProducts', []);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressType>(initialShippingAddress);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [user, setUser] = useState<UserType | null>(null);

  //   Fetch current user
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${ baseUrl }/auth/currentuser`, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-cache',
        });
        const data = await response.json();
        if (data.currentUser) {
          setUser(data.currentUser);
          setShippingAddress(data.currentUser.address || initialShippingAddress);
          setShippingCost(shippingCountries.find((country) => country.name === user?.address?.country)?.cost || 0);
        }
      } catch (e: any) {
        toast.error(e?.message || 'Something went wrong');
      }
    };

    fetchCurrentUser();
  }, []);

  //   Check if the product quantity does not exceed the max quantity
  useEffect(() => {
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

    setCartProducts(newCartProducts);
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

        { currentStep === 1 && <YourCart cartProducts={ cartProducts } setCartProducts={ setCartProducts } /> }
        { currentStep === 2 && <ShippingDetails shippingAddress={ shippingAddress } setShippingAddress={ setShippingAddress } shippingCountries={ shippingCountries }
          setShippingCost={ setShippingCost } />
        }
        { currentStep === 3 && <PlaceOrder cartProducts={ cartProducts } shippingAddress={ shippingAddress } /> }

        <Totals cartProducts={ cartProducts } shippingCost={ shippingCost } />

        <ProceedStep currentStep={ currentStep } setCurrentStep={ setCurrentStep } cartProducts={ cartProducts } shippingAddress={ shippingAddress }
          isLoading={ isLoading } setIsLoading={ setIsLoading } />

        { isLoading && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-50 z-50 flex justify-center items-center">
            <Loader />
          </div>
        ) }
      </>
    )
  );
}

export default CartPage;

