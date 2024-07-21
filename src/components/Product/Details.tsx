'use client';

import { fetchSingleProduct } from '@/actions/serverApi';
import NotFound from '@/app/not-found';
import useLocalStorage from '@/hooks/useLocalStorage';
import commonUtils from '@/utils/commonUtils';
import { useEffect, useState } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { OrderProductType, ProductType } from '../../../typings';

interface DetailsProps {
  product: ProductType;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

function Details({ product, setIsModalOpen }: DetailsProps) {
  const [selectedSize, setSelectedSize] = useState(
    Object.keys(product.quantity).find((size) => product.quantity[size as keyof typeof product.quantity] > 0) || ''
  );
  const [quantity, setQuantity] = useState(1);
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>(product);
  const [cartProducts, setCartProducts] = useLocalStorage<OrderProductType[]>('cartProducts', []);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetchSingleProduct(product.id);
      if (data) {
        setCurrentProduct(data);
        setSelectedSize(
          Object.keys(data.quantity).find((size) => data.quantity[size as keyof typeof data.quantity] > 0) || ''
        );
      } else {
        setCurrentProduct(null);
      }
    };

    if (product.id) {
      fetchProduct();
    }
  }, [product]);

  useEffect(() => {
    setQuantity(1);
  }, [selectedSize]);

  const handleAddToCart = () => {
    if (!currentProduct) return;

    const productIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === currentProduct.id && cartProduct.size === selectedSize
    );

    if (productIndex === -1) {
      const newCartProducts: OrderProductType[] = [
        ...cartProducts,
        {
          id: currentProduct.id,
          title: currentProduct.title,
          size: selectedSize,
          quantity,
          maxQuantity: currentProduct.quantity[selectedSize as keyof typeof currentProduct.quantity],
          price: currentProduct.price,
          onSale: currentProduct.onSale,
          imagesURL: currentProduct.imagesURL,
        },
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
          quantity: cartProducts[productIndex].quantity + quantity,
        },
        ...cartProducts.slice(productIndex + 1),
      ];
      setCartProducts(newCartProducts);
    }
    setIsModalOpen(true);
    toast.success('Product added to cart');
  };

  if (!currentProduct) return <NotFound />;
  return (
    <div className="flex w-full flex-col items-start justify-start gap-5 md:gap-8 bg-white lg:max-w-[600px]">
      {/* Title and ID */}
      <div>
        <h1 className="font-custom text-h3">{commonUtils.toTitleCase(currentProduct.title)}</h1>
      </div>
      {/* Description */}
      <p className="text-justify text-base">{currentProduct.description}</p>
      {/* Size */}
      <div className="relative flex w-full items-start justify-between">
        <p className="font-custom text-h4">Size</p>
        <div className="flex flex-row flex-wrap items-center justify-end gap-1 max-w-[80%]">
          {Object.keys(currentProduct.quantity).map((size, index) => (
            <button
              key={index}
              className={`py-1 w-20 flex justify-center items-center border border-black cursor-pointer hover:bg-black hover:text-white 
                ${size === selectedSize ? 'bg-black text-white' : 'bg-white text-black'} 
                disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-400`}
              onClick={() => setSelectedSize(size)}
              disabled={currentProduct.quantity[size as keyof typeof currentProduct.quantity] === 0}
              title={currentProduct.quantity[size as keyof typeof currentProduct.quantity] === 0 ? 'Out of stock' : ''}
            >
              <p className="text-sm">{size.replace(/_/g, ' ')}</p>
            </button>
          ))}
        </div>
      </div>
      {/* Quantity */}
      <div className="relative flex w-full justify-between items-center">
        <p className="font-custom text-h4">Quantity</p>
        {Object.values(currentProduct.quantity).some((quantity: any) => quantity > 0) ? (
          <div className="flex flex-row items-center justify-start">
            <button
              className="flex h-8 w-8 items-center justify-center border border-black hover:bg-black hover:text-white"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
            >
              <p className="text-base font-[500]">-</p>
            </button>
            <p className="flex h-8 w-28 items-center justify-center border-y text-center text-sm border-primary">
              {quantity}
            </p>
            <button
              className="flex h-8 w-8 items-center justify-center border border-black hover:bg-black hover:text-white"
              onClick={() =>
                setQuantity((prev) =>
                  prev < currentProduct.quantity[selectedSize as keyof typeof currentProduct.quantity] ? prev + 1 : prev
                )
              }
            >
              <p className="text-base font-[500]">+</p>
            </button>
          </div>
        ) : (
          <div className="flex -center justify-start gap-2">
            <AiOutlineWarning className="text-orange-500 text-xl" />
            <p className="text-sm text-orange-500">out of stock</p>
          </div>
        )}
      </div>
      {/* Price */}
      <div className="relative flex w-full items-center justify-between">
        <p className="font-custom text-h4">Price</p>
        <div className="flex items-center justify-center gap-2">
          {currentProduct.onSale.discount > 0 && (
            <p className="text-center text-base text-secondary opacity-70 line-through">
              {currentProduct.price} &euro;
            </p>
          )}
          <p className="text-center text-base text-primary">
            {(currentProduct.price - currentProduct.onSale.discount * currentProduct.price).toFixed(2)} &euro;
          </p>
        </div>
      </div>
      {/* Add to cart */}
      {Object.values(currentProduct.quantity).some((quantity: any) => quantity > 0) && (
        <button
          className="flex h-12 w-full items-center justify-center border border-black bg-black text-white hover:bg-white hover:text-black"
          onClick={handleAddToCart}
        >
          <p className="text-base font-[500]">Add to cart</p>
        </button>
      )}
    </div>
  );
}

export default Details;
