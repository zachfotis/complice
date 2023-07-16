import Similar from '@/components/Product/Similar';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { fetchProduct, fetchProducts } from '@/utils/api';
import ProductPage from '@/components/Products/ProductPage';
import NotFound from '@/components/Product/NotFound';

interface PageProps {
  params: {
    productId: string;
  };
}

export const fetchCache = 'force-no-store'

export async function generateStaticParams() {
  const products = await fetchProducts()

  return products.map((productId) => ({
    productId: productId.id
  }))
}

async function page({ params }: PageProps) {
  const product = await fetchProduct(params.productId)
  const products = await fetchProducts(product ? product.category : '')

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        { product ? (<ProductPage product={ product } />) : (<NotFound />) }
        <Similar products={ products } />
      </PageBody>
    </PageTemplate>
  );
}

export default page;
