import { useEffect, useState } from 'react';
import { ProductThumbType } from '../../../typings';
import Size from './Size';
import SortBy from './SortBy';

interface SorterProps {
  products: ProductThumbType[];
  sortedProducts: ProductThumbType[];
  setSortedProducts: React.Dispatch<React.SetStateAction<ProductThumbType[]>>;
}

function Sorter({ products, sortedProducts, setSortedProducts }: SorterProps) {
  const [isSortByExpanded, setIsSortByExpanded] = useState(false);
  const [isSizeExpanded, setIsSizeExpanded] = useState(false);

  useEffect(() => {
    if (isSortByExpanded) {
      setIsSizeExpanded(false);
    }
  }, [isSortByExpanded]);

  useEffect(() => {
    if (isSizeExpanded) {
      setIsSortByExpanded(false);
    }
  }, [isSizeExpanded]);

  return (
    <nav className="w-full bg-lightGrey px-5 py-3 flex justify-start items-center gap-7 shadow-sm">
      <Size
        products={products}
        setSortedProducts={setSortedProducts}
        isSizeExpanded={isSizeExpanded}
        setIsSizeExpanded={setIsSizeExpanded}
      />
      <SortBy
        products={products}
        sortedProducts={sortedProducts}
        setSortedProducts={setSortedProducts}
        isSortByExpanded={isSortByExpanded}
        setIsSortByExpanded={setIsSortByExpanded}
      />
    </nav>
  );
}

export default Sorter;
