'use client';

import Sorter from '@/components/NewArrivals/Sorter';
import Products from '@/components/Products/Products';
import { useState } from 'react';

interface NewArrivalsProps {
  products: ProductType[];
}
function NewArrivals({ products }: NewArrivalsProps) {
  const [sortedProducts, setSortedProducts] = useState<ProductType[]>([]);

  return (
    <>
      <Sorter products={ products } setSortedProducts={ setSortedProducts } />
      <Products products={ sortedProducts.length === 0 ? products : sortedProducts } showViewAll={ false } />
    </>
  );
}

export default NewArrivals;
