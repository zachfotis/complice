'use client';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMagnifyingGlass, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUser, HiSquares2X2 } from 'react-icons/hi2';
import Menu from './Menu';
import SearchBar from '@/components/layout/SearchBar';

function Navbar() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isMobile, setIsMobile ] = useState(false);
  const [ isSearchBarOpen, setIsSearchBarOpen ] = useState(false);

  // Check if mobile on mount and on resize
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    // Add listener on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
    // Remove listener on unmount
    return () => window.removeEventListener('resize', () => {
    });
  }, []);

  // Check if isMenuOpen on mount and on resize
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }

    // Add listener on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    });

    // Remove listener on unmount
    return () => window.removeEventListener('resize', () => {
    });
  }, []);

  // Check if isMenuOpen and prevent scrolling on body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (isSearchBarOpen) {
        setIsSearchBarOpen(false);
      }
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [ isMenuOpen ]);

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-white shadow-md">
      <section className="relative mx-auto flex w-full items-center justify-between p-5 max-w-[1680px]">
        {/* Small Menu */ }
        <h1 className="hidden text-h3 font-custom md:block">About Us</h1>
        {/* Logo */ }
        <div className="flex w-full items-center justify-start gap-3 md:w-fit">
          <HiSquares2X2
            className="transform cursor-pointer text-2xl transition-all hover:rotate-90 hover:scale-110 md:hidden"
            onClick={ () => setIsMenuOpen(!isMenuOpen) }
          />
          <Link href="/">
            <Image alt="logo" src={ Logo } width={ 170 } height={ 50 } className="w-[95px] md:w-[150px]" />
          </Link>
        </div>
        {/*SearchBar*/ }
        { isSearchBarOpen && <SearchBar setIsSearchBarOpen={ setIsSearchBarOpen } /> }
        {/* Menu */ }
        <div className="flex items-center justify-start gap-4 md:gap-5">
          <HiMagnifyingGlass className="cursor-pointer text-xl md:text-2xl" onClick={ () => setIsSearchBarOpen(!isSearchBarOpen) } />
          <HiOutlineUser className="text-xl md:text-2xl" />
          <HiOutlineHeart className="text-xl md:text-2xl" />
          <Link href="/cart">
            <HiOutlineShoppingBag className="text-xl md:text-2xl" />
          </Link>
        </div>
      </section>
      { isMenuOpen && isMobile && <Menu setIsMenuOpen={ setIsMenuOpen } /> }
    </nav>
  );
}

export default Navbar;
