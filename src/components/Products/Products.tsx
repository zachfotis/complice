import {ProductType} from '../../../typings';
import Button from '../common/Button';
import ProductThumb from './ProductThumb';

interface ProductsProps {
  products: ProductType[];
  title?: string;
  showViewAll?: boolean;
  isInitialScreen?: boolean;
}

function Products({ products, title = '', showViewAll = true, isInitialScreen = false }: ProductsProps) {
  return (
    <section className="flex w-full flex-col items-center justify-start gap-10">
        {title && <h1 className="text-h2 font-custom">{title}</h1>}
        {/* Products */}
        <div
            className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${isInitialScreen ? 'xl:grid-cols-3' : 'xl:grid-cols-4'} gap-4`}>
            {products.map((product) => (
                <ProductThumb key={product.id} product={product}/>
            ))}
        </div>
        {showViewAll && <Button text="View All" variant="md-bottom-line"/>}
    </section>
  );
}

export default Products;
