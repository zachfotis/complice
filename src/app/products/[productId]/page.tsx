import Carousel from '@/components/Product/Carousel';
import Details from '@/components/Product/Details';
import NotFound from '@/components/Product/NotFound';
import Similar from '@/components/Product/Similar';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import DATA from '../../../assets/dummy/products.json';

interface PageProps {
  params: {
    productId: string;
  };
}

function page({ params: { productId } }: PageProps) {
  const product = DATA.find((product) => product.id === productId);

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        {!product ? (
          <NotFound />
        ) : (
          <>
            <div className="flex flex-col items-stretch justify-between gap-10 lg:flex-row">
                <Carousel thumb={product.thumb} images={product.images}/>
                <Details product={product}/>
            </div>
              <Similar/>
          </>
        )}
      </PageBody>
    </PageTemplate>
  );
}

export default page;
