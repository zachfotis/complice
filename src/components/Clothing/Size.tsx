import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { ProductType } from '../../../typings';

interface SizeProps {
  products: ProductType[];
  setSortedProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  isSizeExpanded: boolean;
  setIsSizeExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

function Size({ products, setSortedProducts, isSizeExpanded, setIsSizeExpanded }: SizeProps) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [uniqueSizes, setUniqueSizes] = useState<string[]>([]);

  useEffect(() => {
    const updatedUniqueSizes = products.reduce((acc: string[], product) => {
      const { quantity }: { quantity: { [key: string]: number; } } = product;
      const sizes = Object.keys(quantity).filter(size => quantity[size] > 0);
      return [...acc, ...sizes];
    }, []);
    setUniqueSizes([...new Set(updatedUniqueSizes)]);
  }, [products]);

  useEffect(() => {
    if (selectedSizes.length === 0) {
      setSortedProducts(products);
    } else {
      const filteredProducts = products.filter((product: ProductType) => {
        return Object.keys(product.quantity).some((size) =>
          selectedSizes.includes(size) && product.quantity[size as unknown as keyof typeof product.quantity] > 0,
        );
      });
      setSortedProducts(filteredProducts);
    }
  }, [selectedSizes]);

  return (
    <div className="relative">
      <button className="flex items-center justify-start gap-2" onClick={ () => setIsSizeExpanded(!isSizeExpanded) }>
        <p className="text-base text-secondary">Filter Size</p>
        <IoIosArrowDown className="cursor-pointer text-lg text-secondary" />
      </button>
      <div className="absolute top-11 left-0 z-10 w-fit bg-white px-5 py-3 shadow-lg"
        style={ { display: isSizeExpanded ? 'block' : 'none' } }>
        { uniqueSizes.map((size) => (
          <div
            key={ size }
            className={ `flex justify-start items-center gap-2 py-1 cursor-pointer ${ selectedSizes.includes(size) ? 'font-[500]' : 'text-secondary' }` }
            onClick={ () => {
              if (selectedSizes.includes(size)) {
                setSelectedSizes(selectedSizes.filter((selectedSize) => selectedSize !== size));
              } else {
                setSelectedSizes([...selectedSizes, size]);
              }
            } }
          >
            <input type="checkbox" className="h-4 w-4 rounded-sm border border-secondary"
              checked={ selectedSizes.includes(size) } readOnly />
            <p className="text-sm whitespace-nowrap">{ size.replace(/_/g, ' ') }</p>
          </div>
        )) }
      </div>
    </div>
  );
}

export default Size;
