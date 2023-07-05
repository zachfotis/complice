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

  const sizes = products.map((product) => product.sizes.map((size) => size)).flat();
  const uniqueSizes = [...new Set(sizes)];
  uniqueSizes.sort((a, b) => {
    if (a === 'XS') return -1;
    if (b === 'XS') return 1;
    if (a === 'S') return -1;
    if (b === 'S') return 1;
    if (a === 'M') return -1;
    if (b === 'M') return 1;
    if (a === 'L') return -1;
    if (b === 'L') return 1;
    if (a === 'XL') return -1;
    if (b === 'XL') return 1;
    if (a === 'XXL') return -1;
    if (b === 'XXL') return 1;
    return 0;
  });

  useEffect(() => {
    if (selectedSizes.length === 0) {
      setSortedProducts(products);
    } else {
      const filteredProducts = products.filter((product) => {
        return product.sizes.some((size) => selectedSizes.includes(size));
      });
      setSortedProducts(filteredProducts);
    }
  }, [selectedSizes]);

  return (
    <div className="relative">
      <button className="flex justify-start items-center gap-2" onClick={() => setIsSizeExpanded(!isSizeExpanded)}>
        <p className="text-h4 text-secondary">Filter Size</p>
        <IoIosArrowDown className="text-2xl text-secondary cursor-pointer" />
      </button>
      <div className="absolute top-11 left-0 w-full bg-white shadow-sm py-3 px-5 z-10" style={{ display: isSizeExpanded ? 'block' : 'none' }}>
        {uniqueSizes.map((size) => (
          <div
            key={size}
            className={`flex justify-start items-center gap-2 py-1 cursor-pointer ${selectedSizes.includes(size) ? 'font-[500]' : 'text-secondary'}`}
            onClick={() => {
              if (selectedSizes.includes(size)) {
                setSelectedSizes(selectedSizes.filter((selectedSize) => selectedSize !== size));
              } else {
                setSelectedSizes([...selectedSizes, size]);
              }
            }}
          >
            <input type="checkbox" className="w-4 h-4 border border-secondary rounded-sm" checked={selectedSizes.includes(size)} readOnly />
            <p className="text-base">{size}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Size;
