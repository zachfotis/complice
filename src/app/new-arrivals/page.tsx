export const revalidate = 60 * 60 * 12;

import { fetchNewArrivals } from '@/actions/serverApi';
import NewArrivals from '@/components/NewArrivals/NewArrivals';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import NavMap from '@/components/layout/NavMap';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';

async function Page() {
  const products = await fetchNewArrivals();

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <NavMap />
        <PageTitle title="New Arrivals" />
        {products.length > 0 ? <NewArrivals products={products} /> : <p>No products found.</p>}
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
