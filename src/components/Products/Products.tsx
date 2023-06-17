import { ProductThumbType } from '../../../typings';
import Button from '../common/Button';
import ProductThumb from './ProductThumb';

interface ProductsProps {
  products: ProductThumbType[];
}

function Products({ products }: ProductsProps) {
  return (
    <section className="w-full flex flex-col justify-start items-center gap-10">
      <div className="w-full flex justify-between items-center gap-5 md:gap-10">
        {products.map((product) => (
          <ProductThumb key={product.id} product={product} />
        ))}
      </div>

      <Button text="View All" variant="md-bottom-line" />
    </section>
  );
}

export default Products;
