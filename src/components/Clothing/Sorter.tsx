import { useEffect, useState } from 'react';
import Size from './Size';
import SortBy from './SortBy';

interface SorterProps {
  products: ProductType[];
  sortedProducts: ProductType[];
  setSortedProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

function Sorter({products, sortedProducts, setSortedProducts}: SorterProps) {
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
    <nav className="z-20 flex w-full snap-x items-center justify-start gap-7 px-5 py-3 shadow-sm bg-lightGrey">
      <Size products={ products } setSortedProducts={ setSortedProducts } isSizeExpanded={ isSizeExpanded }
            setIsSizeExpanded={ setIsSizeExpanded } />
      <SortBy
        products={ products }
        sortedProducts={ sortedProducts }
        setSortedProducts={ setSortedProducts }
        isSortByExpanded={ isSortByExpanded }
        setIsSortByExpanded={ setIsSortByExpanded }
      />
    </nav>
  );
}

export default Sorter;
