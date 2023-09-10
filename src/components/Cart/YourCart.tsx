import Product from '@/components/Cart/Product';

interface YourCartProps {
  cartProducts: OrderProductType[];
  setCartProducts: (value: OrderProductType[]) => void;
}

function YourCart({ cartProducts, setCartProducts }: YourCartProps) {
  return (
    <div className="w-full max-w-[1000px] mt-5 lg:mt-10">
      {/* Title */ }
      <div className="w-full flex justify-between items-center border-b border-gray-200 pb-2">
        <h1 className="text-h3 font-custom">Your Cart</h1>
        <h1 className="text-h4 font-custom">( { cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0) } )</h1>
      </div>
      {/*  Products */ }
      <div className="w-full flex flex-col justify-start items-start gap-10 mt-5">
        { cartProducts.map((cartProduct) => (
          <div key={ cartProduct.id + cartProduct.size + ' container' } className="w-full flex flex-col justify-start items-start gap-5">
            <Product cartProduct={ cartProduct } cartProducts={ cartProducts } setCartProducts={ setCartProducts } />
            <div className="w-full border-b border-gray-200" />
          </div>
        )) }
      </div>
    </div>
  );
}

export default YourCart;
