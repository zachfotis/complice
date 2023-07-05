'use client';

import { useEffect, useState } from 'react';
import { ProductType } from '../../../typings';

interface DetailsProps {
  product: ProductType;
}

function Details({ product }: DetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes.find((size) => product.quantity[size as keyof typeof product.quantity] > 0) || '');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [selectedSize]);

  return (
    <div className="w-full lg:max-w-[600px] bg-white flex flex-col justify-start items-start gap-8">
      {/* Title and ID */}
      <div>
        <h1 className="font-custom text-h3">{product.title}</h1>
        <p className="text-sm">{product.id}</p>
      </div>
      {/* Description */}
      <p className="text-base text-justify">{product.description}</p>
      {/* Size */}
      <div className="relative w-full flex justify-between items-start">
        <p className="font-custom text-h4">Size</p>
        <div className="max-w-[80%] flex flex-row justify-end items-center flex-wrap gap-1">
          {product.sizes.map(
            (size, index) =>
              product.quantity[size as keyof typeof product.quantity] > 0 && (
                <button
                  key={index}
                  className={`py-1 w-20 flex justify-center items-center border border-black cursor-pointer hover:bg-black hover:text-white 
              ${size === selectedSize ? 'bg-black text-white' : 'bg-white text-black'}
              `}
                  onClick={() => setSelectedSize(size)}
                >
                  <p className="text-sm">{size}</p>
                </button>
              )
          )}
        </div>
      </div>
      {/* Quantity */}
      <div className="relative w-full flex justify-between items-start">
        <p className="font-custom text-h4">Quantity</p>
        <div className="flex flex-row justify-start items-center">
          <button
            className="w-8 h-8 flex justify-center items-center border border-black hover:bg-black hover:text-white"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            <p className="text-base font-[500]">-</p>
          </button>
          <p className="text-sm h-8 w-28 text-center border-y border-primary flex justify-center items-center">{quantity}</p>
          <button
            className="w-8 h-8 flex justify-center items-center border border-black hover:bg-black hover:text-white"
            onClick={() => setQuantity((prev) => (prev < product.quantity[selectedSize as keyof typeof product.quantity] ? prev + 1 : prev))}
          >
            <p className="text-base font-[500]">+</p>
          </button>
        </div>
      </div>
      {/* Price */}
      <div className="relative w-full flex justify-between items-start">
        <p className="font-custom text-h4">Price</p>
        <p className="text-base">{product.price} &euro;</p>
      </div>
      {/* Add to cart */}
      <button className="w-full h-12 flex justify-center items-center bg-black text-white hover:bg-white hover:text-black border border-black">
        <p className="text-base font-[500]">Add to cart</p>
      </button>
    </div>
  );
}

export default Details;
