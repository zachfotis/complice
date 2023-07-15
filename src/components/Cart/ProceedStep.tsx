import { useEffect, useState } from 'react';
import { OrderProductType, ShippingAddressType } from '../../../typings';
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
      behavior: 'smooth'
    });
  }

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

  const validateShippingAddress = () => {
    return !(shippingAddress.firstName === '' || shippingAddress.lastName === '' || shippingAddress.address === '' || shippingAddress.city === '' || shippingAddress.postalCode === '' || shippingAddress.country === '' || shippingAddress.phoneNumber === '' || shippingAddress.email === '');
  }

  return (
    <button
      className="flex h-12 w-full max-w-[1000px] items-center justify-center border border-black bg-black text-white mt-3"
      onClick={
        () => {
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
            toast.success('Order placed successfully');
          }
        }
      }
    >
      <p className="text-base font-[500]">{ buttonText }</p>
    </button>
  );
}

export default ProceedStep;
