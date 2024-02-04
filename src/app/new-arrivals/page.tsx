export const revalidate = 60 * 60 * 12;

import NewArrivals from '@/components/NewArrivals/NewArrivals';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import NavMap from '@/components/layout/NavMap';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';

const fetchProducts = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/new-arrivals`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

async function Page() {
  const products = await fetchProducts();

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <NavMap />
        <PageTitle title="New Arrivals" />
        <NewArrivals products={products} />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
