import Image from 'next/image';
import { HiOutlineHeart } from 'react-icons/hi2';
import { ProductThumbType } from '../../../typings';

interface ProductThumbProps {
  product: ProductThumbType;
}
function ProductThumb({ product }: ProductThumbProps) {
  return (
    <div className="relative flex-1 min-w-[250px] flex flex-col justify-start items-center gap-2 snap-center">
      <div className="w-full h-[315px] overflow-hidden">
        <Image
          src={product.image}
          alt="Category"
          width={300}
          height={300}
          className="w-full h-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start cursor-pointer">
        <h3 className="text-base font-[500] text-center">{product.title}</h3>
        <p className="text-base text-center text-secondary">{product.price} €</p>
      </div>
      <HiOutlineHeart className="text-2xl absolute top-2 right-2 text-primary bg-whiteGrey rounded-full p-1 hover:scale-110 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer" />
    </div>
  );
}

export default ProductThumb;
