import { useState } from 'react';
import { ProductType } from '../../../typings';

interface SorterProps {
  products: ProductType[];
  setSortedProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

function Sorter({ products, setSortedProducts }: SorterProps) {
  const [selectedType, setSelectedType] = useState('All');
  const productTypes = products.map((product) => product.type);
  const uniqueProductTypes = [...new Set(productTypes)];

  return (
    <nav className="w-full bg-lightGrey px-5 py-3 flex justify-start items-center gap-7 shadow-sm">
      <p>
        <span className="text-h4 text-secondary">Sort by:</span>
      </p>
      <button
        className={`text-h4 font-medium text-secondary p-1 min-w-[50px]
          ${selectedType === 'All' ? 'border-b-2 border-primary' : 'hover:outline-2 hover:outline-primary hover:outline-dashed'}`}
        onClick={() => {
          setSortedProducts([]);
          setSelectedType('All');
        }}
      >
        All
      </button>
      {uniqueProductTypes.map((type) => (
        <button
          key={type}
          className={`text-h4 font-medium text-secondary p-1 min-w-[50px]
          ${selectedType === type ? 'border-b-2 border-primary' : 'hover:outline-2 hover:outline-primary hover:outline-dashed'}`}
          onClick={() => {
            setSortedProducts(products.filter((product) => product.type === type));
            setSelectedType(type);
          }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </nav>
  );
}

export default Sorter;
