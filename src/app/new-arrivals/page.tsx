import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import Paginator from '@/components/layout/Paginator';
import NavMap from "@/components/layout/NavMap";
import NewArrivals from '@/components/NewArrivals/NewArrivals';

const fetchProducts = async () => {
  const url = new URL(process.env.host + '/api/products');
  const response = await fetch(url);
  const data = await response.json();
  return data
};

async function Page() {
  const products = await fetchProducts();

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
