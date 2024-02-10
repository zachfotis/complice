'use client';

import Image from 'next/image';
import SuccessImage from '@/assets/checkout.png';
import Link from 'next/link';
import Button from '@/components/common/Button';
import { useEffect } from 'react';

function Success() {

  useEffect(() => {
    localStorage.removeItem('cartProducts');
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-5 text-center">
      <Image src={ SuccessImage } alt="Success" width={ 500 } height={ 500 } className="ml-10 md:ml-32" />
      <p className="text-2xl font-bold">Thank you for your purchase!</p>
      <p>Your order has been successfully placed! You will receive an email with the details of your order.</p>
      <p>Thank you for shopping with us!</p>
      <Link href="/" className="mt-5">
        <Button text="Go back to home" />
      </Link>
    </section>
  );
}

export default Success;
