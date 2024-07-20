'use client';
import Logo from '@/assets/logo.png';
import SearchBar from '@/components/layout/SearchBar';
import useLocalStorage from '@/hooks/useLocalStorage';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMagnifyingGlass, HiOutlineShoppingBag, HiOutlineUser, HiSquares2X2 } from 'react-icons/hi2';
import { OrderProductType } from '../../../typings';
import Menu from './Menu';
import { VideoBanner } from './VideoBanner';
import { VideoButton } from './VideoButton';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<OrderProductType[]>([]);
  const [isVideoOpen, setIsVideoOpen] = useLocalStorage<boolean>('isVideoOpen', true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if mobile on mount and on resize + check if cartProductsLocalStorage has changed
  useEffect(() => {
    // Check if cartProductsLocalStorage has changed
    const interval = setInterval(() => {
      const cartProductsLocalStorage = window.localStorage.getItem('cartProducts');

      if (cartProductsLocalStorage) {
        const parsedCartProductsLocalStorage = JSON.parse(cartProductsLocalStorage);
        setCartProducts(parsedCartProductsLocalStorage);
      }
    }, 1000);

    if (window.innerWidth < 768) {
      setIsMobile(true);
    }

    const resizeListener = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add listener on resize
    window.addEventListener('resize', resizeListener);

    // Remove listener on unmount
    return () => {
      window.removeEventListener('resize', resizeListener);
      clearInterval(interval);
    };
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
    return () => window.removeEventListener('resize', () => {});
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
  }, [isMenuOpen]);

  if (!isClient) return null;

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-white shadow-md">
      <section className="relative mx-auto flex w-full items-center justify-between p-5 max-w-[1680px]">
        {/* Small Menu */}
        <Link href="/about" className="hidden text-h3 font-custom md:block">
          About Us
        </Link>
        {/* Logo */}
        <div className="flex w-full items-center justify-start gap-3 md:w-fit">
          <HiSquares2X2
            className="transform cursor-pointer text-2xl transition-all hover:rotate-90 hover:scale-110 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Link href="/">
            <Image alt="logo" src={Logo} width={170} height={50} className="w-[95px] md:w-[150px]" />
          </Link>
        </div>
        {/*SearchBar*/}
        {isSearchBarOpen && <SearchBar setIsSearchBarOpen={setIsSearchBarOpen} />}
        {/* Menu */}
        <div className="flex items-center justify-start gap-4 md:gap-5">
          <HiMagnifyingGlass className="cursor-pointer text-2xl" onClick={() => setIsSearchBarOpen(!isSearchBarOpen)} />
          <VideoButton isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} />
          <Link href="/account">
            <HiOutlineUser className="text-2xl" />
          </Link>
          <Link href="/cart" className="relative">
            <HiOutlineShoppingBag className="text-2xl" />
            {cartProducts && cartProducts.length > 0 && (
              <p
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary text-whiteGrey text-xs
                font-custom rounded-full flex justify-center items-center"
              >
                {cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}
              </p>
            )}
          </Link>
        </div>
      </section>
      {isMenuOpen && isMobile && <Menu setIsMenuOpen={setIsMenuOpen} />}
      <VideoBanner isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} />
    </nav>
  );
}

export default Navbar;
