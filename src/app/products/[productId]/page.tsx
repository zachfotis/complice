import { fetchAllProducts, fetchSimilarProducts, fetchSingleProduct } from '@/actions/serverApi';
import NotFound from '@/components/Product/NotFound';
import Similar from '@/components/Product/Similar';
import ProductPage from '@/components/Products/ProductPage';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { ProductType } from '../../../../typings';

export async function generateStaticParams() {
  const products: ProductType[] = await fetchAllProducts();
  return products.map((productId) => ({
    productId: productId.id,
  }));
}

interface PageProps {
  params: {
    productId: string;
  };
}

async function page({ params }: PageProps) {
  const product: ProductType = await fetchSingleProduct(params.productId);
  const similarProducts = await fetchSimilarProducts(product.category, params.productId);

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        {product ? (
          <>
            <ProductPage product={product} />
            <Similar products={similarProducts} />
          </>
        ) : (
          <NotFound />
        )}
      </PageBody>
    </PageTemplate>
  );
}

export default page;
