import { OrderProductType } from '../../../typings';
import Product from '@/components/Cart/Product';

interface YourCartProps {
  products: OrderProductType[];
}

function YourCart({ products }: YourCartProps) {
  return (
    <div className="w-full max-w-[1000px] mt-10">
      {/* Title */ }
      <div className="w-full flex justify-between items-center border-b border-gray-200 pb-2">
        <h1 className="text-h3 font-custom">Your Cart</h1>
        <h1 className="text-h3">( { products.length } )</h1>
      </div>
      {/*  Products */ }
      <div className="w-full flex flex-col justify-start items-start gap-10 mt-5">
        { products.map((product) => (
          <div key={ product.id + ' container' } className="w-full flex flex-col justify-start items-start gap-5">
            <Product product={ product } />
            <div className="w-full border-b border-gray-200" />
          </div>
        )) }
      </div>

    </div>
  );
}

export default YourCart;
