import {FaSortAmountDownAlt, FaSortAmountUp} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io';
import {ProductType} from '../../../typings';

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
      <button className="flex items-center justify-start gap-2" onClick={() => setIsSortByExpanded(!isSortByExpanded)}>
          <p className="text-h4 text-secondary">Sort by</p>
          <IoIosArrowDown className="cursor-pointer text-2xl text-secondary"/>
      </button>
        <div className="absolute top-11 left-0 z-10 border bg-white shadow-sm w-[200px] border-whiteGrey"
             style={{display: isSortByExpanded ? 'block' : 'none'}}>
            {sortByLabels.map((label) => (
                <div
                    key={label}
                    className="flex cursor-pointer items-center justify-start gap-2 px-5 py-3 hover:bg-lightGrey"
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
                    <p className="cursor-pointer text-base">{label}</p>
            {label === 'Newest' ? null : label === 'Price: Low to High' ? (
                <FaSortAmountDownAlt className="cursor-pointer text-xl text-secondary"/>
            ) : (
                <FaSortAmountUp className="cursor-pointer text-xl text-secondary"/>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortBy;
