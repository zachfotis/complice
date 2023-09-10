'use client';
import Sorter from '@/components/Clothing/Sorter';
import Products from '@/components/Products/Products';
import { useState } from 'react';

interface ClothingProps {
  products: ProductType[];
}

function CategoryProducts({ products }: ClothingProps) {
  const [sortedProducts, setSortedProducts] = useState<ProductType[]>([]);

  return (
    <>
      <Sorter products={ products } sortedProducts={ sortedProducts } setSortedProducts={ setSortedProducts } />
      <Products products={ sortedProducts.length === 0 ? products : sortedProducts } showViewAll={ false } />
    </>
  );
}

export default CategoryProducts;
