'use client';

import { useEffect, useState } from 'react';
import { OrderProductType, ProductType } from '../../../typings';
import useLocalStorage from '@/hooks/useLocalStorage';
import { toast } from 'react-toastify';

interface DetailsProps {
  product: ProductType;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

function Details({ product, setIsModalOpen }: DetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes.find((size) => product.quantity[size as keyof typeof product.quantity] > 0) || '');
  const [quantity, setQuantity] = useState(1);
  const [cartProducts, setCartProducts] = useLocalStorage<OrderProductType[]>('cartProducts', []);

  useEffect(() => {
    setQuantity(1);
  }, [selectedSize]);

  const handleAddToCart = () => {
    const productIndex = cartProducts.findIndex((cartProduct) => cartProduct.id === product.id && cartProduct.size === selectedSize);

    if (productIndex === -1) {
      const newCartProducts: OrderProductType[] = [
        ...cartProducts,
        {
          id: product.id,
          title: product.title,
          size: selectedSize,
          quantity,
          maxQuantity: product.quantity[selectedSize as keyof typeof product.quantity],
          price: product.price,
          onSale: product.onSale,
          thumb: product.thumb
        }
      ];
      setCartProducts(newCartProducts);
    } else {
      if (cartProducts[productIndex].quantity + quantity > cartProducts[productIndex].maxQuantity) {
        toast.error('Quantity exceeds the stock available');
        return;
      }
      const newCartProducts: OrderProductType[] = [
        ...cartProducts.slice(0, productIndex),
        {
          ...cartProducts[productIndex],
          quantity: cartProducts[productIndex].quantity + quantity
        },
        ...cartProducts.slice(productIndex + 1)
      ];
      setCartProducts(newCartProducts);
    }
    setIsModalOpen(true);
    toast.success('Product added to cart');
  }

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
        <div className="flex items-center justify-center gap-2">
          <p className="text-center text-base text-secondary opacity-70 line-through">{ product.price } &euro;</p>
          <p className="text-center text-base text-primary">{ (product.price - product.onSale.discount * product.price).toFixed(2) } &euro;</p>
        </div>
      </div>
      {/* Add to cart */}
      <button
        className="flex h-12 w-full items-center justify-center border border-black bg-black text-white hover:bg-white hover:text-black"
        onClick={ handleAddToCart }
      >
        <p className="text-base font-[500]">Add to cart</p>
      </button>
    </div>
  );
}

export default Details;
