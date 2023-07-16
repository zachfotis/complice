'use client';

import { useEffect, useState } from 'react';
import { ProductType } from '../../../typings';

interface DetailsProps {
  product: ProductType;
}

function Details({product}: DetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes.find((size) => product.quantity[size as keyof typeof product.quantity] > 0) || '');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [selectedSize]);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-5 md:gap-8 bg-white lg:max-w-[600px]">
      {/* Title and ID */ }
      <div>
        <h1 className="font-custom text-h3">{ product.title }</h1>
        <p className="text-sm">{ product.id }</p>
      </div>
      {/* Description */ }
      <p className="text-justify text-base">{ product.description }</p>
      {/* Size */ }
      <div className="relative flex w-full items-start justify-between">
        <p className="font-custom text-h4">Size</p>
        <div className="flex flex-row flex-wrap items-center justify-end gap-1 max-w-[80%]">
          { product.sizes.map(
            (size, index) =>
              product.quantity[size as keyof typeof product.quantity] > 0 && (
                <button
                  key={ index }
                  className={ `py-1 w-20 flex justify-center items-center border border-black cursor-pointer hover:bg-black hover:text-white ${ size === selectedSize ? 'bg-black text-white' : 'bg-white text-black' }` }
                  onClick={ () => setSelectedSize(size) }>
                  <p className="text-sm">{ size }</p>
                </button>
              )
          ) }
        </div>
      </div>
      {/* Quantity */}
      <div className="relative flex w-full items-start justify-between">
        <p className="font-custom text-h4">Quantity</p>
        <div className="flex flex-row items-center justify-start">
          <button
            className="flex h-8 w-8 items-center justify-center border border-black hover:bg-black hover:text-white"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            <p className="text-base font-[500]">-</p>
          </button>
          <p className="flex h-8 w-28 items-center justify-center border-y text-center text-sm border-primary">{quantity}</p>
          <button
            className="flex h-8 w-8 items-center justify-center border border-black hover:bg-black hover:text-white"
            onClick={() => setQuantity((prev) => (prev < product.quantity[selectedSize as keyof typeof product.quantity] ? prev + 1 : prev))}
          >
            <p className="text-base font-[500]">+</p>
          </button>
        </div>
      </div>
      {/* Price */}
      <div className="relative flex w-full items-start justify-between">
        <p className="font-custom text-h4">Price</p>
        <p className="text-base">{product.price} &euro;</p>
      </div>
      {/* Add to cart */}
      <button
        className="flex h-12 w-full items-center justify-center border border-black bg-black text-white hover:bg-white hover:text-black">
        <p className="text-base font-[500]">Add to cart</p>
      </button>
    </div>
  );
}

export default Details;
