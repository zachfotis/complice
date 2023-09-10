import Similar from '@/components/Product/Similar';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
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
        <CategoriesMenu />
        { product ? (
          <>
            <ProductPage product={ product } />
            <Similar products={ products } />
          </>
        ) : (<NotFound />) }
      </PageBody>
    </PageTemplate>
  );
}

export default page;
