import { fetchAllProducts, fetchSimilarProducts, fetchSingleProduct } from '@/actions/serverApi';
import NotFound from '@/components/Product/NotFound';
import Similar from '@/components/Product/Similar';
import ProductPage from '@/components/Products/ProductPage';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import commonUtils from '@/utils/commonUtils';
import { Metadata, ResolvingMetadata } from 'next';
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

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const product: ProductType = await fetchSingleProduct(params.productId);

  return {
    title: `${commonUtils.toTitleCase(product?.title) || 'Unknown Product'} | Complice Team`,
    description: product?.description,
    openGraph: {
      type: 'website',
      url: `https://www.compliceteam.com/products/${product?.id}`,
      title: `${commonUtils.toTitleCase(product?.title) || 'Unknown Product'} | Complice Team`,
      description: product?.description,
      images: [
        {
          url: product?.imagesURL.image1 || 'https://complice.fra1.cdn.digitaloceanspaces.com/banner.png',
          width: product?.imagesURL.image1 ? 1920 : 1640,
          height: product?.imagesURL.image1 ? 2400 : 600,
          alt: `${commonUtils.toTitleCase(product?.title) || 'Unknown Product'} | Complice Team`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${commonUtils.toTitleCase(product?.title) || 'Unknown Product'} | Complice Team`,
      description: product?.description,
      images: [
        {
          url: product?.imagesURL.image1 || 'https://complice.fra1.cdn.digitaloceanspaces.com/banner.png',
          width: product?.imagesURL.image1 ? 1920 : 1640,
          height: product?.imagesURL.image1 ? 2400 : 600,
          alt: `${commonUtils.toTitleCase(product?.title) || 'Unknown Product'} | Complice Team`,
        },
      ],
    },
  };
}

async function page({ params }: PageProps) {
  if (!params.productId) return null;

  const product: ProductType = await fetchSingleProduct(params.productId);

  if (!product)
    return (
      <PageTemplate>
        <PageBody>
          <CategoriesMenu />
          <NotFound />
        </PageBody>
      </PageTemplate>
    );

  const similarProducts = await fetchSimilarProducts(product.category, params.productId);

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <ProductPage product={product} />
        <Similar products={similarProducts} />
      </PageBody>
    </PageTemplate>
  );
}

export default page;
