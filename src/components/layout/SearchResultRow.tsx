import Link from 'next/link';

interface Props {
  product: ProductType;
}

export function SearchResultRow({ product }: Props) {
  return (
    <Link href={ `/products/${ product.id }` }
          className="flex w-full items-center justify-start gap-2 bg-white shadow-md outline outline-1 outline-gray-300">
      <img src={ product.thumb } alt={ product.title } className="h-20 w-20 object-cover" />
      <div className="flex flex-col items-start justify-start gap-1 p-2">
        <h1 className="text-sm font-semibold">{ product.title }</h1>
        <h1 className="text-sm font-semibold">{ product.price }</h1>
      </div>
    </Link>
  );
}
