import { ProductType } from '../../../typings';
import Products from '../Products/Products';

interface SimilarProps {
  products: ProductType[];
}

function Similar({ products }: SimilarProps) {
  return (
    <section className="mt-10 w-full lg:mt-20">
      {products.length > 0 && (
        <Products products={products} title="Similar Products" showViewAll={false} isShort={true} />
      )}
    </section>
  );
}

export default Similar;
