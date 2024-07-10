import Link from 'next/link';
import { ProductType } from '../../../typings';
import Button from '../common/Button';
import ProductThumb from './ProductThumb';

interface ProductsProps {
  products: ProductType[];
  title?: string;
  showViewAll?: boolean;
  isInitialScreen?: boolean;
  isShort?: boolean;
}

function Products({
  products,
  title = '',
  showViewAll = true,
  isInitialScreen = false,
  isShort = false,
}: ProductsProps) {
  return (
    <section className="flex w-full flex-col items-center justify-start gap-5">
      {title && <h1 className="text-h2 font-custom">{title}</h1>}
      {/* Products */}
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
          isInitialScreen ? 'xl:grid-cols-3' : 'xl:grid-cols-4'
        } gap-8 md:gap-4`}
      >
        {products.map((product, index) => (
          <ProductThumb key={product.id + index} product={product} isShort={isShort} />
        ))}
      </div>
      {showViewAll && (
        <Link href="/clothing">
          <Button text="View All" variant="md-bottom-line" />
        </Link>
      )}
    </section>
  );
}

export default Products;
