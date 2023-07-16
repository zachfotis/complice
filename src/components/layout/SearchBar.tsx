import { AiOutlineCloseSquare } from "react-icons/ai";
import { SearchResultRow } from '@/components/layout/SearchResultRow';
import { useEffect, useRef, useState } from 'react';
import { ProductType } from '../../../typings';
import DATA from '@/assets/dummy/products.json';

interface Props {
  setIsSearchBarOpen: (value: boolean) => void;
}

function SearchBar({ setIsSearchBarOpen }: Props) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const searchBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (searchValue.trim().length >= 3) {
      const results = DATA.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      if (results.length > 0) {
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }

    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  const handleClickOutside = (event: MouseEvent) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
      setIsSearchBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ searchBarRef } className="flex flex-col justify-start items-start absolute top-[80%] right-1/2 transform translate-x-1/2 lg:translate-x-0
       lg:right-[130px] z-50 w-[95%] lg:w-[450px] lg:max-w-[80%]">
      <div className={ `w-full rounded-t-md ${ searchResults.length === 0 && 'rounded-b-md' } bg-white shadow-md outline outline-1 outline-gray-300 p-1` }>
        <input autoFocus type="text" placeholder="Search" className="w-full p-3 pr-10 outline-0" value={ searchValue } onChange={ (e) => setSearchValue(e.target.value) } />
        <AiOutlineCloseSquare className="absolute top-4 right-4 cursor-pointer text-2xl text-gray-600" onClick={ () => setIsSearchBarOpen(false) } />
      </div>
      { searchResults.length > 0 && searchValue !== '' && (
        <div className="flex w-full flex-col items-start justify-start gap-2 rounded-b-md bg-white pt-0 shadow-lg outline outline-1 outline-gray-300 overflow-hidden"
             onClick={ () => setIsSearchBarOpen(false) }
        >
          { searchResults.map((product) => (
            <SearchResultRow key={ product.id } product={ product } />
          )) }
        </div>
      ) }
    </div>
  );
}

export default SearchBar;
