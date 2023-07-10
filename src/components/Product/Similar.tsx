import DATA from '@/assets/dummy/products.json';
import Products from '../Products/Products';

function Similar() {
  return (
    <section className="mt-10 w-full lg:mt-20">
        <Products products={DATA.splice(0, 4)} title="Similar Products" showViewAll={false}/>
    </section>
  );
}

export default Similar;
