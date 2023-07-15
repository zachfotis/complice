import { OrderProductType } from '../../../typings';
import Image from 'next/image';

interface ProductProps {
  product: OrderProductType;
}

function Product({ product }: ProductProps) {
  return (
    <div className="w-full flex justify-start items-stretch gap-10">
      {/* Image */ }
      <Image src={ product.thumb } alt={ product.title } width={ 700 } height={ 500 } className="w-[250px] min-h-[200px] object-cover" />
      <div className="flex w-full flex-col items-start justify-start gap-5 bg-white">
        {/* Title */ }
        <div>
          <h1 className="font-custom text-h3">{ product.title }</h1>
          <p className="text-sm">{ product.id }</p>
        </div>
        {/* Size */ }
        <div className="relative flex w-full items-start justify-between gap-10">
          <p className="text-base min-w-[80px]">Size</p>
          <div className="flex flex-row flex-wrap items-center justify-start gap-1 max-w-[80%]">
            <div
              className="py-1 w-20 flex justify-center items-center border border-black bg-white text-primary">
              <p className="text-sm">{ product.size }</p>
            </div>
          </div>
        </div>
        {/* Quantity */ }
        <div className="relative flex w-full items-start justify-between gap-10">
          <p className="text-base min-w-[80px]">Quantity</p>
          <div className="flex flex-row items-center justify-start">
            <button
              className="flex h-8 w-8 items-center justify-center border border-black hover:bg-black hover:text-white"
            >
              <p className="text-base font-[500]">-</p>
            </button>
            <p className="flex h-8 w-28 items-center justify-center border-y text-center text-sm border-primary">{ product.quantity }</p>
            <button
              className="flex h-8 w-8 items-center justify-center border border-black hover:bg-black hover:text-white"
            >
              <p className="text-base font-[500]">+</p>
            </button>
          </div>
        </div>
        {/* Price */ }
        <div className="relative flex w-full items-start justify-between">
          <p className="text-base">Price</p>
          <p className="text-base">{ product.quantity } x { product.price } &euro;</p>
        </div>

      </div>
    </div>
  );
}

export default Product;
