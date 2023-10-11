'use client';

import Carousel from '@/components/Product/Carousel';
import Details from '@/components/Product/Details';
import { useState } from 'react';
import AddToCartModal from '@/components/Product/AddToCartModal';

interface ProductPageProps {
  product: ProductType;
}

function ProductPage({ product }: ProductPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-stretch justify-between gap-5 md:gap-10 lg:flex-row">
      <Carousel images={ product.imagesURL } />
      <Details product={ product } setIsModalOpen={ setIsModalOpen } />
      <AddToCartModal isModalOpen={ isModalOpen } setIsModalOpen={ setIsModalOpen } />
    </div>
  );
}

export default ProductPage;
