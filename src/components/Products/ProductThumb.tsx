import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineHeart } from 'react-icons/hi2';
import { ProductType } from '../../../typings';

interface ProductThumbProps {
  product: ProductType;
}
function ProductThumb({ product }: ProductThumbProps) {
  return (
    <div className="relative w-full flex flex-col justify-start items-center gap-2 snap-center">
      <Link href={`/products/${product.id}`} className="w-full h-[375px] overflow-hidden">
        <Image
          src={product.thumb}
          alt="Category"
          width={400}
          height={400}
          className="w-full h-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
        />
      </Link>
      <Link href={`/products/${product.id}`} className="w-full flex flex-col justify-start items-start cursor-pointer">
        <h3 className="text-base font-[500] text-center">{product.title}</h3>
        <p className="text-base text-center text-secondary">{product.price} €</p>
      </Link>
      <HiOutlineHeart className="text-2xl absolute top-2 right-2 z-10 text-primary bg-whiteGrey rounded-full p-1 hover:scale-110 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer" />
    </div>
  );
}

export default ProductThumb;
