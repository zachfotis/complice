'use client';

import Sorter from '@/components/Clothing/Sorter';
import Products from '@/components/Products/Products';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import Paginator from '@/components/layout/Paginator';
import {useState} from 'react';
import {ProductType} from '../../../../typings';
import DATA from '../../../assets/dummy/products.json';

interface PageProps {
  params: {
    category: string;
  };
}

function Page({ params }: PageProps) {
  const [products, setProducts] = useState<ProductType[]>(DATA);
  const [sortedProducts, setSortedProducts] = useState<ProductType[]>([]);

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <PageTitle title={params.category} />
        <Sorter products={products} sortedProducts={sortedProducts} setSortedProducts={setSortedProducts} />
        <Products products={sortedProducts.length === 0 ? products : sortedProducts} showViewAll={false} />
        <Paginator productsShown={products.length} totalProducts={products.length} />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
