import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import Paginator from '@/components/layout/Paginator';
import NavMap from "@/components/layout/NavMap";
import NewArrivals from '@/components/NewArrivals/NewArrivals';
import { fetchProducts } from '@/utils/api';

async function Page() {
  const products = await fetchProducts(null, true);

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <NavMap />
        <PageTitle title="New Arrivals" />
        <NewArrivals products={ products } />
        <Paginator productsShown={ products.length } totalProducts={ products.length } />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
