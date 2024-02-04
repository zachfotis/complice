'use client';
import CheckoutBar from '@/components/Cart/CheckoutBar';
import PlaceOrder from '@/components/Cart/PlaceOrder';
import ProceedStep from '@/components/Cart/ProceedStep';
import ShippingDetails from '@/components/Cart/ShippingDetails';
import Totals from '@/components/Cart/Totals';
import YourCart from '@/components/Cart/YourCart';
import Loader from '@/components/common/Loader';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import { BsCartX } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { OrderProductType, ProductType, ShippingAddressType, ShippingCountryType, UserType } from '../../../typings';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingCountries, setShippingCountries] = useState<ShippingCountryType[]>([]);

  const [cartProducts, setCartProducts] = useLocalStorage<OrderProductType[]>('cartProducts', []);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressType>(initialShippingAddress);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [user, setUser] = useState<UserType | null>(null);
  const [rankedCouponSelected, setRankedCouponSelected] = useState<string>('');
  const [optionalCouponSelected, setOptionalCouponSelected] = useState<string>('');

  //   Fetch current user
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/auth/currentuser`, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-cache',
        });
        const data = await response.json();
        if (data.currentUser) {
          setUser(data.currentUser);
          setShippingAddress(data.currentUser.address || initialShippingAddress);
        }
      } catch (e: any) {
        toast.error(e?.message || 'Something went wrong');
      }
    };

    const fetchProduct = async (productId: string): Promise<ProductType | null> => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/products/get-product/${productId}`, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-cache',
        });
        const data = await response.json();
        if (data) {
          return data;
        } else {
          return null;
        }
      } catch (e: any) {
        toast.error(e?.message || 'Something went wrong');
        return null;
      }
    };

    const fetchShippingCountries = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/shipping/get-shipping-countries`, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-store',
        });
        const data = await response.json();

        if (data) {
          setShippingCountries(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const paramsObj = Object.fromEntries(params);
    const orderId = paramsObj['orderId'];

    if (!orderId) {
      const updateCartProducts = async () => {
        const updatedCartProductsPromises = cartProducts.map(async (cartProduct) => {
          const product = await fetchProduct(cartProduct.id);
          if (product) {
            if (product.quantity[cartProduct.size as keyof ProductType['quantity']] < cartProduct.quantity) {
              toast.warn(`The quantity of ${product.title} has been updated`);
              if (product.quantity[cartProduct.size as keyof ProductType['quantity']] === 0) {
                return null;
              } else {
                return {
                  ...cartProduct,
                  quantity: product.quantity[cartProduct.size as keyof ProductType['quantity']],
                  maxQuantity: product.quantity[cartProduct.size as keyof ProductType['quantity']],
                };
              }
            } else {
              return {
                ...cartProduct,
                maxQuantity: product.quantity[cartProduct.size as keyof ProductType['quantity']],
              };
            }
          } else {
            return null;
          }
        });
        const updatedCartProducts = await Promise.all(updatedCartProductsPromises);
        const filteredCartProducts = updatedCartProducts.filter(
          (cartProduct) => cartProduct !== null
        ) as OrderProductType[];

        setCartProducts(filteredCartProducts);
      };

      updateCartProducts();
    }

    fetchCurrentUser();
    fetchShippingCountries();
  }, []);

  useEffect(() => {
    setShippingCost(shippingCountries.find((country) => country.name === shippingAddress.country)?.cost || 0);
  }, [shippingAddress, user]);

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
    });

    setCartProducts(newCartProducts);
  }, []);

  return cartProducts.length === 0 ? (
    <div className="flex-auto min-h-full flex flex-col justify-center items-center gap-5">
      <BsCartX className="text-5xl text-primary" />
      <h1 className="text-h3 font-custom">Your cart is empty</h1>
    </div>
  ) : (
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
  );
}

export default CartPage;

