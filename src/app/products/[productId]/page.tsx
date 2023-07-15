import Similar from '@/components/Product/Similar';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { fetchProduct } from '@/utils/api';
import ProductPage from '@/components/Products/ProductPage';

interface PageProps {
  params: {
    productId: string;
  };
}

// export async function generateStaticParams() {
//   const products = await fetchProducts()
//
//   return products.map((productId) => ({
//     productId: productId.id
//   }))
// }

async function page({ params }: PageProps) {
  const product = await fetchProduct(params.productId)

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <ProductPage product={ product } />
        <Similar />
      </PageBody>
    </PageTemplate>
  );
}

export default page;
