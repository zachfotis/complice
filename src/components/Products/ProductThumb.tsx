import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineHeart } from 'react-icons/hi2';
import { ProductType } from '../../../typings';

interface ProductThumbProps {
  product: ProductType;
}

function ProductThumb({product}: ProductThumbProps) {
  return (
    <div className="relative flex w-full snap-center flex-col items-center justify-start gap-2">
      <Link href={`/products/${product.id}`} className="w-full overflow-hidden h-[375px]">
        <Image
          src={product.thumb}
          alt="Category"
          width={400}
          height={400}
          className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
        />
      </Link>
      <Link href={`/products/${product.id}`}
            className="flex w-full cursor-pointer flex-col items-start justify-start">
        <h3 className="text-center text-base font-[500]">{product.title}</h3>
        <p className="text-center text-base text-secondary">{product.price} €</p>
      </Link>
      <HiOutlineHeart
        className="absolute top-2 right-2 z-10 cursor-pointer rounded-full p-1 text-2xl transition-all duration-300 ease-in-out text-primary bg-whiteGrey hover:text-primary hover:scale-110"/>
    </div>
  );
}

export default ProductThumb;
