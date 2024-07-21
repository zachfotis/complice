export const revalidate = 60 * 60 * 12;

import { fetchOnSaleProducts } from '@/actions/serverApi';
import Products from '@/components/Products/Products';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import NavMap from '@/components/layout/NavMap';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import NoProducts from '@/components/shared/NoProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sales',
  description: 'Discover the latest sales at Complice. Shop discounted clothing, and accessories',
};

async function Page() {
  const products = await fetchOnSaleProducts();

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <NavMap />
        <PageTitle title="Sales" />
        {!products.length ? <NoProducts /> : <Products products={products} showViewAll={false} />}
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
