'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { OrderProductType, ShippingAddressType } from '../../../typings';

interface ProceedStepProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cartProducts: OrderProductType[];
  shippingAddress: ShippingAddressType;
  rankedCouponSelected: string;
  optionalCouponSelected: string;
}

function ProceedStep({
  currentStep,
  setCurrentStep,
  isLoading,
  setIsLoading,
  cartProducts,
  shippingAddress,
  rankedCouponSelected,
  optionalCouponSelected,
}: ProceedStepProps) {
  const [buttonText, setButtonText] = useState<string>('');
  const router = useRouter();

  // Scroll to top when currentStep changes
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const expireSession = async (orderId: string) => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${baseUrl}/checkout/expire-session/${orderId}`, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
      await response.json();
      router.push('/cart');
    };

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const paramsObj = Object.fromEntries(params);
    const orderId = paramsObj['orderId'];

    if (orderId) {
      expireSession(orderId);
    }
  }, []);

  useEffect(() => {
    if (currentStep === 1) {
      setButtonText('Proceed to Shipping Details');
    } else if (currentStep === 2) {
      setButtonText('Proceed to Checkout');
    } else if (currentStep === 3) {
      setButtonText('Place order');
    }
    scrollToTop();
  }, [currentStep]);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout/create-checkout-session`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          orderProducts: cartProducts,
          shippingAddress,
          rankedCouponSelected,
          optionalCouponSelected,
        }),
      });
      const data = await response.json();

      if (data.url) {
        const orderId = data.orderId;
        router.push(`/cart?orderId=${orderId}`);
        setTimeout(() => {
          router.push(data.url);
          setIsLoading(false);
        }, 1000);
      } else {
        data.errors.forEach((error: any) => {
          setIsLoading(false);
          toast.error(error.message);
        });
        router.push('/');
      }
    } catch (error: any) {
      setIsLoading(false);
      toast(error?.message);
      router.push('/');
    }
  };

  const validateShippingAddress = () => {
    return !(
      shippingAddress.firstName === '' ||
      shippingAddress.lastName === '' ||
      shippingAddress.address === '' ||
      shippingAddress.city === '' ||
      shippingAddress.postalCode === '' ||
      shippingAddress.country === '' ||
      shippingAddress.phoneNumber === '' ||
      shippingAddress.email === ''
    );
  };

  return (
    <button
      className="w-full h-12 max-w-[1000px] flex items-center justify-center border border-black bg-black text-white mt-3"
      disabled={isLoading}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (currentStep === 1) {
          if (cartProducts.length > 0) {
            setCurrentStep(currentStep + 1);
          } else {
            toast.error('Please add some products to the cart');
          }
        } else if (currentStep === 2) {
          if (validateShippingAddress()) {
            setCurrentStep(currentStep + 1);
          } else {
            toast.error('Please fill in all the Shipping Details');
          }
        } else if (currentStep === 3) {
          handleCheckout();
        }
      }}
    >
      <p className="text-base font-[500]">{buttonText}</p>
    </button>
  );
}

export default ProceedStep;
