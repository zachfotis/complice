'use client';

import { useEffect } from 'react';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

interface AddToCartModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

function AddToCartModal({ isModalOpen, setIsModalOpen }: AddToCartModalProps) {
  const router = useRouter();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // If user clicks outside the modal, close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === document.querySelector('.add_to_cart_modal')) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [setIsModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="add_to_cart_modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70
     w-screen h-screen flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-5 w-[500px] max-w-[90%] flex flex-col justify-start items-start gap-3">
        <h2 className="text-h3 font-custom">Added to cart!</h2>
        <p className="text-base">You can now go to the cart to complete your order.</p>
        {/* Two button continue shopping or go to cart*/ }
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-5 gap-3">
          <Button text={ 'Continue shopping' } variant={ 'sm-black' } onClick={ () => setIsModalOpen(false) } />
          <Button text={ 'Go to cart' } variant={ 'sm-light' } onClick={ () => {
            setIsModalOpen(false);
            router.push('/cart');
          }
          } />
        </div>
      </div>

    </div>
  );
}

export default AddToCartModal;
