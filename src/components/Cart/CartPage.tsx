'use client';

import { fetchCurrentUser, getUpdatedCartProducts } from '@/actions/clientApi';
import { fetchShippingCountries } from '@/actions/serverApi';
import CheckoutBar from '@/components/Cart/CheckoutBar';
import PlaceOrder from '@/components/Cart/PlaceOrder';
import ProceedStep from '@/components/Cart/ProceedStep';
import ShippingDetails from '@/components/Cart/ShippingDetails';
import Totals from '@/components/Cart/Totals';
import YourCart from '@/components/Cart/YourCart';
import Loader from '@/components/common/Loader';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { OrderProductType, ShippingAddressType, ShippingCountryType, UserType } from '../../../typings';
import { EmptyCart } from './EmptyCart';

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
  const [hasMounted, setHasMounted] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingCountries, setShippingCountries] = useState<ShippingCountryType[]>([]);

  const [cartProducts, setCartProducts] = useLocalStorage<OrderProductType[]>('cartProducts', []);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressType>(initialShippingAddress);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [user, setUser] = useState<UserType | null>(null);
  const [rankedCouponSelected, setRankedCouponSelected] = useState<string>('');
  const [optionalCouponSelected, setOptionalCouponSelected] = useState<string>('');

  useEffect(() => {
    setHasMounted(true);
    fetchInitialState();
  }, []);

  useEffect(() => {
    setShippingCost(shippingCountries.find((country) => country.name === shippingAddress.country)?.cost || 0);
  }, [shippingAddress, shippingCountries, user]);

  const fetchInitialState = async () => {
    setIsLoading(true);
    await fetchCurrentUserClient();
    await fetchShippingCountriesClient();
    await fetchAndUpdateCartProducts();
    setIsLoading(false);
  };

  const fetchCurrentUserClient = async () => {
    const currentUser = await fetchCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setShippingAddress(currentUser.address || initialShippingAddress);
    }
  };

  const fetchShippingCountriesClient = async () => {
    const shippingCountries = await fetchShippingCountries();

    if (shippingCountries) {
      setShippingCountries(shippingCountries);
    }
  };

  const fetchAndUpdateCartProducts = async () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const paramsObj = Object.fromEntries(params);
    const orderId = paramsObj['orderId'];

    if (!orderId) {
      const updatedProducts = await getUpdatedCartProducts(cartProducts);

      if (updatedProducts?.length) {
        const maxQuantityUpdated = updateMaxQuantity(updatedProducts);
        setCartProducts(maxQuantityUpdated);
      }
    }
  };

  const updateMaxQuantity = (products: OrderProductType[]) => {
    const newCartProducts = products.map((cartProduct) => {
      const maxQuantity = cartProduct.maxQuantity;
      if (cartProduct.quantity > maxQuantity) {
        toast.error('Product quantity exceeds the stock quantity');
        return {
          ...cartProduct,
          quantity: maxQuantity,
        };
      }
      return cartProduct;
    });

    return newCartProducts;
  };

  if (!hasMounted) return null;

  return cartProducts?.length ? (
    <>
      <CheckoutBar currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {currentStep === 1 && <YourCart cartProducts={cartProducts} setCartProducts={setCartProducts} />}
      {currentStep === 2 && (
        <ShippingDetails
          shippingAddress={shippingAddress}
          setShippingAddress={setShippingAddress}
          shippingCountries={shippingCountries}
        />
      )}
      {currentStep === 3 && <PlaceOrder cartProducts={cartProducts} shippingAddress={shippingAddress} />}

      <Totals
        currentStep={currentStep}
        cartProducts={cartProducts}
        shippingCost={shippingCost}
        currentUser={user}
        rankedCouponSelected={rankedCouponSelected}
        setRankedCouponSelected={setRankedCouponSelected}
        optionalCouponSelected={optionalCouponSelected}
        setOptionalCouponSelected={setOptionalCouponSelected}
      />

      <ProceedStep
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        cartProducts={cartProducts}
        shippingAddress={shippingAddress}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        rankedCouponSelected={rankedCouponSelected}
        optionalCouponSelected={optionalCouponSelected}
      />

      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-50 z-50 flex justify-center items-center">
          <Loader />
        </div>
      )}
    </>
  ) : (
    <EmptyCart />
  );
}

export default CartPage;
