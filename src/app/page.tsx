import { fetchAllCategories, fetchBestSellers } from '@/actions/serverApi';
import Banner from '@/components/Home/Banner';
import CategoriesHomeThumb from '@/components/Home/CategoriesHomeThumb';
import Hero from '@/components/Home/Hero';
import Products from '@/components/Products/Products';
import StayTuned from '@/components/common/StayTuned';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { CategoryType, ProductType } from '../../typings';

export default async function Home() {
  const categories: CategoryType[] = await fetchAllCategories();
  const bestSellers: ProductType[] = await fetchBestSellers();

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
      </PageBody>
      <Hero />
      {categories.length && (
        <PageBody>
          <CategoriesHomeThumb categories={categories} />
        </PageBody>
      )}
      <Banner />
      {bestSellers.length && (
        <PageBody>
          <Products products={bestSellers} title="Best Sellers" isInitialScreen={true} />
          <StayTuned />
        </PageBody>
      )}
    </PageTemplate>
  );
}
