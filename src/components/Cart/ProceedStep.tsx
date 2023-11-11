import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface ProceedStepProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  cartProducts: OrderProductType[];
  shippingAddress: ShippingAddressType;
}

function ProceedStep({ currentStep, setCurrentStep, cartProducts, shippingAddress }: ProceedStepProps) {
  const [buttonText, setButtonText] = useState<string>('');

  // Scroll to top when currentStep changes
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        orderProducts: cartProducts,
        shippingAddress,
      }),
    });
    const data = await response.json();

    if (data.url) {
      window.open(data.url, '_self');
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
