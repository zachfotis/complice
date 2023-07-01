'use client';

import ProductThumb1 from '@/assets/dummy/tshirt-example1.jpg';
import ProductThumb2 from '@/assets/dummy/tshirt-example2.jpg';
import ProductThumb3 from '@/assets/dummy/tshirt-example3.jpg';
import Sorter from '@/components/NewArrivals/Sorter';
import Products from '@/components/Products/Products';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import Paginator from '@/components/layout/Paginator';
import { useState } from 'react';
import { ProductThumbType } from '../../../typings';

function Page() {
  const [products, setProducts] = useState<ProductThumbType[]>(productThumbData); //TODO: Fetch data from API
  const [sortedProducts, setSortedProducts] = useState<ProductThumbType[]>([]);

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <PageTitle title="New Arrivals" />
        <Sorter products={products} setSortedProducts={setSortedProducts} />
        <Products products={sortedProducts.length === 0 ? products : sortedProducts} showViewAll={false} />
        <Paginator productsShown={products.length} totalProducts={products.length} />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;

const productThumbData: ProductThumbType[] = [
  {
    id: '1',
    title: 'Iron Gym T-Shirt',
    type: 't-shirt',
    price: 15.99,
    image: ProductThumb1,
  },
  {
    id: '2',
    title: 'Waterproof Shorts',
    type: 'shorts',
    price: 24.99,
    image: ProductThumb2,
  },
  {
    id: '3',
    title: 'Black Socks',
    type: 'socks',
    price: 9.99,
    image: ProductThumb3,
  },
  {
    id: '4',
    title: 'Iron Gym T-Shirt',
    type: 't-shirt',
    price: 15.99,
    image: ProductThumb1,
  },
  {
    id: '5',
    title: 'Waterproof Shorts',
    type: 'shorts',
    price: 24.99,
    image: ProductThumb2,
  },
  {
    id: '6',
    title: 'Black Socks',
    type: 'socks',
    price: 9.99,
    image: ProductThumb3,
  },
  {
    id: '7',
    title: 'Iron Gym T-Shirt',
    type: 't-shirt',
    price: 15.99,
    image: ProductThumb1,
  },
  {
    id: '8',
    title: 'Waterproof Shorts',
    type: 'shorts',
    price: 24.99,
    image: ProductThumb2,
  },
  {
    id: '9',
    title: 'Black Socks',
    type: 'socks',
    price: 9.99,
    image: ProductThumb3,
  },
  {
    id: '10',
    title: 'Iron Gym T-Shirt',
    type: 't-shirt',
    price: 15.99,
    image: ProductThumb1,
  },
  {
    id: '11',
    title: 'Waterproof Shorts',
    type: 'shorts',
    price: 24.99,
    image: ProductThumb2,
  },
  {
    id: '12',
    title: 'Black Socks',
    type: 'socks',
    price: 9.99,
    image: ProductThumb3,
  },
];
