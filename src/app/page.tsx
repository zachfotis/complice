import Banner from '@/components/Home/Banner';
import CategoriesHomeThumb from '@/components/Home/CategoriesHomeThumb';
import Hero from '@/components/Home/Hero';
import Products from '@/components/Products/Products';
import StayTuned from '@/components/common/StayTuned';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';

const fetchProducts = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${ BASE_URL }/products/new-arrivals`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchCategories = async () => {
  const BASE_URL = process.env.API_URL;
  const res = await fetch(`${ BASE_URL }/categories/get-categories`);
  const data = await res.json();
  return data;
};

export default async function Home() {
  const products: ProductType[] = await fetchProducts();
  const categories: CategoryType[] = await fetchCategories();

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
      </PageBody>
      <Hero />
      <PageBody>
        <CategoriesHomeThumb categories={ categories } />
      </PageBody>
      <Banner />
      <PageBody>
        <Products products={ products.slice(0, 3) } title="Best Sellers" isInitialScreen={ true } />
        <StayTuned />
      </PageBody>
    </PageTemplate>
  );
}

