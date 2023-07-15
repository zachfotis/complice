import Carousel from '@/components/Product/Carousel';
import Details from '@/components/Product/Details';
import NotFound from '@/components/Product/NotFound';
import Similar from '@/components/Product/Similar';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';

interface PageProps {
  params: {
    productId: string;
  };
}

const fetchProduct = async (productId: string) => {
  // Add productId as search param
  const url = new URL(process.env.host + '/api/product');
  url.searchParams.append('productId', productId);

  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    return null
  }
  return data;
};

// export async function generateStaticParams() {
//   const response = await fetch(process.env.host + '/api/products')
//   const data = await response.json() as ProductType[]
//
//   return data.map((productId) => ({
//     productId: productId.id
//   }))
// }

async function page({ params: { productId } }: PageProps) {
  const product = await fetchProduct(productId);

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        { !product ? (
          <NotFound />
        ) : (
          <>
            <div className="flex flex-col items-stretch justify-between gap-10 lg:flex-row">
              <Carousel thumb={ product.thumb } images={ product.images } />
              <Details product={ product } />
            </div>
            <Similar />
          </>
        ) }
      </PageBody>
    </PageTemplate>
  );
}

export default page;
