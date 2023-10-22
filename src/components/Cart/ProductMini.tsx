import Image from 'next/image';

interface ProductMiniProps {
  cartProduct: OrderProductType
}

function ProductMini({ cartProduct }: ProductMiniProps) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-10">
      {/* Image */ }
      <div className="w-full md:w-auto">
        <Image src={ cartProduct.imagesURL.image1 || '' } alt={ cartProduct.title } width={ 700 } height={ 500 } className="w-ful md:w-[350px] h-[200px] object-cover" />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-5 bg-white">
        {/* Title */ }
        <div>
          <h1 className="font-custom text-h3">{ cartProduct.title }</h1>
        </div>
        {/* Size */ }
        <div className="relative flex w-full items-start justify-between gap-10">
          <p className="text-base min-w-[80px]">Size</p>
          <div className="flex flex-row flex-wrap items-center justify-start gap-1 max-w-[80%]">
            <p className="text-base">{ cartProduct.size.replace(/_/g, ' ') }</p>
          </div>
        </div>
        {/* Quantity */ }
        <div className="relative flex w-full items-start justify-between gap-10">
          <p className="text-base min-w-[80px]">Quantity</p>
          <p className="text-base">{ cartProduct.quantity }</p>
        </div>
        {/* Price */ }
        <div className="relative flex w-full items-start justify-between">
          <p className="text-base">Price</p>
          <p
            className="text-base">{ cartProduct.quantity } x { cartProduct.onSale.isOnSale ? (cartProduct.price - cartProduct.onSale.discount * cartProduct.price).toFixed(2) : cartProduct.price } &euro;</p>
        </div>

      </div>
    </div>
  );
}

export default ProductMini;
