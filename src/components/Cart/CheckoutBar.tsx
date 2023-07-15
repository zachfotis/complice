import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdDone } from 'react-icons/md';

interface CheckoutBarProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

function CheckoutBar({ currentStep, setCurrentStep }: CheckoutBarProps) {
  return (
    <div className="flex justify-center items-center gap-5 mt-10">
      {/* Shopping Cart */ }
      <button className={ `flex flex-col justify-start items-center gap-2 ${ currentStep > 1 ? 'cursor-pointer' : 'cursor-default' }` }
              onClick={
                () => {
                  if (currentStep > 1) {
                    setCurrentStep(1);
                  }
                }
              }
      >
        <div className={ `flex items-center justify-center w-10 h-10 rounded-full ${ currentStep === 1 ? 'bg-primary' : 'bg-gray-200' }` }>
          { currentStep > 1 ? <MdDone className="text-2xl" /> : <HiOutlineShoppingBag className={ `text-2xl ${ currentStep === 1 ? 'text-white' : 'text-primary' }` } /> }
        </div>
        <p className="text-primary text-sm">Shopping Cart</p>
      </button>
      {/*  Line */ }
      <div className="w-[100px] h-px bg-gray-200"></div>
      {/* Shopping Cart */ }
      <button className={ `flex flex-col justify-start items-center gap-2 ${ currentStep > 2 ? 'cursor-pointer' : 'cursor-default' }` }
              onClick={
                () => {
                  if (currentStep > 2) {
                    setCurrentStep(2);
                  }
                }
              }
      >
        <div className={ `flex items-center justify-center w-10 h-10 rounded-full ${ currentStep === 2 ? 'bg-primary' : 'bg-gray-200' }` }>
          { currentStep > 2 ? <MdDone className="text-2xl" /> : <HiOutlineShoppingBag className={ `text-2xl ${ currentStep === 2 ? 'text-white' : 'text-primary' }` } /> }
        </div>
        <p className="text-primary text-sm">Shipping Details</p>
      </button>
      {/*  Line */ }
      <div className="w-[100px] h-px bg-gray-200"></div>
      {/* Shopping Cart */ }
      <button className={ `flex flex-col justify-start items-center gap-2 ${ currentStep > 3 ? 'cursor-pointer' : 'cursor-default' }` }
              onClick={
                () => {
                  if (currentStep > 3) {
                    setCurrentStep(3);
                  }
                }
              }
      >
        <div className={ `flex items-center justify-center w-10 h-10 rounded-full ${ currentStep === 3 ? 'bg-primary' : 'bg-gray-200' }` }>
          { currentStep > 3 ? <MdDone className="text-2xl" /> : <LiaShippingFastSolid className={ `text-2xl ${ currentStep === 3 ? 'text-white' : 'text-primary' }` } /> }
        </div>
        <p className="text-primary text-sm">Payment</p>
      </button>
    </div>
  );
}

export default CheckoutBar;
