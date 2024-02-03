import NotFound from '@/components/Product/NotFound';
import Similar from '@/components/Product/Similar';
import ProductPage from '@/components/Products/ProductPage';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { ProductType } from '../../../../typings';

interface PageProps {
  params: {
    productId: string;
  };
}

export const fetchCache = 'force-no-store';

const fetchProducts = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/get-products`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchSimilarProducts = async (category: string, productId: string) => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/get-similar-products/${category}/${productId}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchProduct = async (productId: string) => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/get-product/${productId}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export async function generateStaticParams() {
  const products: ProductType[] = await fetchProducts();
  return products.map((productId) => ({
    productId: productId.id,
  }));
}

async function page({ params }: PageProps) {
  const product: ProductType = await fetchProduct(params.productId);
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
