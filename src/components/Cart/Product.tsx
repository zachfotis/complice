import { OrderProductType } from '../../../typings';
import Image from 'next/image';
import { MdDelete } from "react-icons/md";

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
  }

  // Increase quantity up to maxQuantity
  const increaseQuantity = () => {
    const cartProductsCopy = [...cartProducts];
    const index = cartProductsCopy.findIndex((p) => p.id === cartProduct.id && p.size === cartProduct.size);
    if (index !== -1) {
      if (cartProductsCopy[index].quantity >= cartProductsCopy[index].maxQuantity) return;
      cartProductsCopy[index].quantity++;
      setCartProducts(cartProductsCopy);
    }
  }

  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-5 md:gap-10">
      {/* Image */ }
      <Image src={ cartProduct.thumb } alt={ cartProduct.title } width={ 700 } height={ 500 } className="w-full md:w-[250px] min-h-[200px] object-cover" />
      <div className="relative flex w-full flex-col items-start justify-start gap-5 bg-white">
        {/* Title */ }
        <div>
          <h1 className="font-custom text-h3">{ cartProduct.title }</h1>
          <p className="text-sm">{ cartProduct.id }</p>
        </div>
        {/* Size */ }
        <div className="relative flex w-full items-start justify-between gap-10">
          <p className="text-base min-w-[80px]">Size</p>
          <div className="flex flex-row flex-wrap items-center justify-start gap-1 max-w-[80%]">
            <div
              className="py-1 w-20 flex justify-center items-center border border-black bg-white text-primary">
              <p className="text-sm">{ cartProduct.size }</p>
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
          <p className="text-base">{ cartProduct.quantity } x { cartProduct.price } &euro;</p>
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
