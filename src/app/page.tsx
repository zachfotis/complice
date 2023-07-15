import Banner from '@/components/Home/Banner';
import CategoriesThumb from '@/components/Home/CategoriesThumb';
import Hero from '@/components/Home/Hero';
import Products from '@/components/Products/Products';
import StayTuned from '@/components/common/StayTuned';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { CategoryType, ProductType } from '../../typings';
import { fetchCategories, fetchProducts } from '@/utils/api';

export default async function Home() {
  const products: ProductType[] = await fetchProducts();
  const categories: CategoryType[] = await fetchCategories();

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <Hero />
        <CategoriesThumb categories={ categories } />
        <Banner />
        <Products products={ products.slice(0, 3) } title="Best Sellers" isInitialScreen={ true } />
        <StayTuned />
      </PageBody>
    </PageTemplate>
  );
}

