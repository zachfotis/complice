import Link from 'next/link';
import { ProductType } from '../../../typings';
import Image from 'next/image';

interface Props {
  product: ProductType;
}

export function SearchResultRow({ product }: Props) {
  return (
    <Link href={ `/products/${ product.id }` }
      className="flex w-full p-4 items-center justify-start gap-4 bg-white shadow-md outline outline-1 outline-gray-300">
      <Image src={ product.imagesURL.image1 || '' } alt={ product.title } width={ 80 } height={ 80 } className="h-14 w-14 object-cover" />
      <div className="flex flex-col items-start justify-start gap-1 p-2">
        <h1 className="text-sm font-semibold">{ product.title }</h1>
        { product.onSale.discount > 0 ? (
          <div className="flex items-center justify-start gap-1">
            <p className="text-xs line-through text-gray-500">{ product.price.toFixed(2) } €</p>
            <p className="text-xs text-primary">{ (product.price - product.onSale.discount).toFixed(2) } €</p>
          </div>
        ) : (
          <p className="text-xs">{ product.price.toFixed(2) } €</p>
        ) }
      </div>
    </Link>
  );
}
