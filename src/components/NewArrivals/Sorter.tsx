import { useState } from 'react';
import { ProductType } from '../../../typings';

interface SorterProps {
  products: ProductType[];
  setSortedProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

function Sorter({products, setSortedProducts}: SorterProps) {
  const [selectedType, setSelectedType] = useState('All');
  const productTypes = products.map((product) => product.type);
  const uniqueProductTypes = [...new Set(productTypes)];

  return (
    <nav className="flex w-full snap-x items-center justify-start gap-5 overflow-y-auto whitespace-nowrap px-2 py-3 shadow-sm bg-lightGrey md:px-5">
      <p className="hidden md:block">
        <span className="text-base text-secondary">Sort by:</span>
      </p>
      <button
        className={ `text-base font-medium text-secondary p-1 min-w-[50px]
          ${ selectedType === 'All' ? 'border-b-2 border-primary' : 'hover:outline-2 hover:outline-primary hover:outline-dashed' }` }
        onClick={ () => {
          setSortedProducts([]);
          setSelectedType('All');
        } }
      >
        All
      </button>
      {uniqueProductTypes.map((type) => (
        <button
          key={type}
          className={`text-base font-medium text-secondary p-1 min-w-[50px]
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
