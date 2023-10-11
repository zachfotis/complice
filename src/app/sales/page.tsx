import Products from '@/components/Products/Products';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import Paginator from '@/components/layout/Paginator';
import NavMap from '@/components/layout/NavMap';

const fetchProducts = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${ BASE_URL }/products/on-sale`);
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
        <PageTitle title="Sales" />
        { products.length > 0 ? (
          <>
            <Products products={ products } showViewAll={ false } />
            <Paginator productsShown={ products.length } totalProducts={ products.length } />
          </>
        ) : (
          <p>No products found.</p>
        ) }
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
