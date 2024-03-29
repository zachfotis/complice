import Image from 'next/image';
import Link from 'next/link';
import { MdDelete } from 'react-icons/md';
import { OrderProductType } from '../../../typings';

interface ProductProps {
  cartProduct: OrderProductType;
  cartProducts: OrderProductType[];
  setCartProducts: (value: OrderProductType[]) => void;
}

function Product({ cartProduct, cartProducts, setCartProducts }: ProductProps) {

  // Decrease quantity
  const decreaseQuantity = () => {
    const cartProductsCopy = [...cartProducts];
    const index = cartProductsCopy.findIndex((p) => p.id === cartProduct.id && p.size === cartProduct.size);
    if (index !== -1) {
      if (cartProductsCopy[index].quantity <= 1) return;
      cartProductsCopy[index].quantity--;
      setCartProducts(cartProductsCopy);
    }
  };

  // Increase quantity up to maxQuantity
  const increaseQuantity = () => {
    const cartProductsCopy = [...cartProducts];
    const index = cartProductsCopy.findIndex((p) => p.id === cartProduct.id && p.size === cartProduct.size);
    if (index !== -1) {
      if (cartProductsCopy[index].quantity >= cartProductsCopy[index].maxQuantity) return;
      cartProductsCopy[index].quantity++;
      setCartProducts(cartProductsCopy);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-5 md:gap-10">
      {/* Image */ }
      <Link href={ `/products/${ cartProduct.id }` } className="w-full md:w-auto">
        <Image src={ cartProduct.imagesURL.image1 || '' } alt={ cartProduct.title } width={ 700 } height={ 500 } className="w-full md:w-[350px] h-[200px] object-cover" />
      </Link>
      <div className="relative flex w-full flex-col items-start justify-start gap-5 bg-white">
        {/* Title */ }
        <div>
          <Link href={ `/products/${ cartProduct.id }` } className="font-custom text-h3">{ cartProduct.title }</Link>
        </div>
        {/* Size */ }
        <div className="relative flex w-full items-start justify-between gap-10">
          <p className="text-base min-w-[80px]">Size</p>
          <div className="flex flex-row flex-wrap items-center justify-start gap-1 max-w-[80%]">
            <div
              className="py-1 w-20 flex justify-center items-center border border-black bg-white text-primary">
              <p className="text-sm">{ cartProduct.size.replace(/_/g, ' ') }</p>
            </div>
          </div>
        </div>
        {/* Quantity */ }
        <div className="relative flex w-full items-start justify-between gap-10">
          <p className="text-base min-w-[80px]">Quantity</p>
          <div className="flex flex-row items-center justify-start">
            <button
              className="flex h-8 w-8 items-center justify-center border border-black hover:bg-black hover:text-white"
              onClick={ decreaseQuantity }
            >
              <p className="text-base font-[500]">-</p>
            </button>
            <p className="flex h-8 w-28 items-center justify-center border-y text-center text-sm border-primary">{ cartProduct.quantity }</p>
            <button
              className="flex h-8 w-8 items-center justify-center border border-black hover:bg-black hover:text-white"
              onClick={ increaseQuantity }
            >
              <p className="text-base font-[500]">+</p>
            </button>
          </div>
        </div>
        {/* Price */ }
        <div className="relative flex w-full items-start justify-between">
          <p className="text-base">Price</p>
          <div className="flex items-center justify-center gap-2">
            { cartProduct.onSale.isOnSale && (
              <p className="text-center text-base text-secondary opacity-70 line-through">{ cartProduct.price } &euro;</p>
            ) }
            <p className="text-center text-base text-primary">{ (cartProduct.price - cartProduct.onSale.discount * cartProduct.price).toFixed(2) } &euro;</p>
          </div>
        </div>
        {/*  Close Button */ }
        <MdDelete className="absolute top-1 right-0 text-xl text-red-300 hover:text-red-600 cursor-pointer" onClick={ () => {
          const cartProductsCopy = [...cartProducts];
          const index = cartProductsCopy.findIndex((p) => p.id === cartProduct.id);
          if (index !== -1) {
            cartProductsCopy.splice(index, 1);
            setCartProducts(cartProductsCopy);
          }
        } } />
      </div>
    </div>
  );
}

export default Product;
