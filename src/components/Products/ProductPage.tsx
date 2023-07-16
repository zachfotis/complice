import Carousel from '@/components/Product/Carousel';
import Details from '@/components/Product/Details';
import { ProductType } from '../../../typings';

interface ProductPageProps {
  product: ProductType
}

function ProductPage({ product }: ProductPageProps) {
  return (
    <div className="flex flex-col items-stretch justify-between gap-5 md:gap-10 lg:flex-row">
      <Carousel thumb={ product.thumb } images={ product.images } />
      <Details product={ product } />
    </div>
  );
}

export default ProductPage;
