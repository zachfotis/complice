import Products from '../Products/Products';
import { ProductType } from '../../../typings';

interface SimilarProps {
  products: ProductType[]
}

function Similar({ products }: SimilarProps) {
  return (
    <section className="mt-10 w-full lg:mt-20">
      <Products products={ products.splice(0, 4) } title="Similar Products" showViewAll={ false } isShort={ true } />
    </section>
  );
}

export default Similar;
