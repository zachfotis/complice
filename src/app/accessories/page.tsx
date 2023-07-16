import Products from '@/components/Products/Products';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import Paginator from '@/components/layout/Paginator';
import NavMap from "@/components/layout/NavMap";
import { fetchProducts } from '@/utils/api';

async function Page() {
  const products = await fetchProducts('accessories')

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <NavMap />
        <PageTitle title="Accessories" />
        <Products products={ products } showViewAll={ false } />
        <Paginator productsShown={ products.length } totalProducts={ products.length } />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
