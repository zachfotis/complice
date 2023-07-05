import { FaSortAmountDownAlt, FaSortAmountUp } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { ProductType } from '../../../typings';

interface SortByProps {
  products: ProductType[];
  sortedProducts: ProductType[];
  setSortedProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  isSortByExpanded: boolean;
  setIsSortByExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

function SortBy({ products, sortedProducts, setSortedProducts, isSortByExpanded, setIsSortByExpanded }: SortByProps) {
  const sortByLabels = ['Newest', 'Price: Low to High', 'Price: High to Low'];

  return (
    <div className="relative">
      <button className="flex justify-start items-center gap-2" onClick={() => setIsSortByExpanded(!isSortByExpanded)}>
        <p className="text-h4 text-secondary">Sort by</p>
        <IoIosArrowDown className="text-2xl text-secondary cursor-pointer" />
      </button>
      <div className="absolute top-11 left-0 w-[200px] bg-white shadow-sm z-10 border border-whiteGrey" style={{ display: isSortByExpanded ? 'block' : 'none' }}>
        {sortByLabels.map((label) => (
          <div
            key={label}
            className="flex justify-start items-center gap-2 cursor-pointer py-3 px-5 hover:bg-lightGrey"
            onClick={() => {
              setIsSortByExpanded(false);
              if (label === 'Newest') {
                if (sortedProducts.length > 0) {
                  setSortedProducts(sortedProducts);
                } else {
                  setSortedProducts(products);
                }
              } else if (label === 'Price: Low to High') {
                if (sortedProducts.length > 0) {
                  const sortedProductsByPrice = [...sortedProducts].sort((a, b) => a.price - b.price);
                  setSortedProducts(sortedProductsByPrice);
                } else {
                  const productsByPrice = [...products].sort((a, b) => a.price - b.price);
                  setSortedProducts(productsByPrice);
                }
              } else if (label === 'Price: High to Low') {
                if (sortedProducts.length > 0) {
                  const sortedProductsByPrice = [...sortedProducts].sort((a, b) => b.price - a.price);
                  setSortedProducts(sortedProductsByPrice);
                } else {
                  const productsByPrice = [...products].sort((a, b) => b.price - a.price);
                  setSortedProducts(productsByPrice);
                }
              }
            }}
          >
            <p className="text-base cursor-pointer">{label}</p>
            {label === 'Newest' ? null : label === 'Price: Low to High' ? (
              <FaSortAmountDownAlt className="text-xl text-secondary cursor-pointer" />
            ) : (
              <FaSortAmountUp className="text-xl text-secondary cursor-pointer" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortBy;
