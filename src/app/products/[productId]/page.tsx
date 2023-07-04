import Carousel from '@/components/Product/Carousel';
import NotFound from '@/components/Product/NotFound';
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <Carousel thumb={product.thumb} images={product.images} />
            <Carousel thumb={product.thumb} images={product.images} />
          </div>
        )}
      </PageBody>
    </PageTemplate>
  );
}

export default page;
