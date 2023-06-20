'use client';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMagnifyingGlass, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUser, HiSquares2X2 } from 'react-icons/hi2';
import Menu from './Menu';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    return () => window.removeEventListener('resize', () => {});
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
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 left-0 bg-white w-full shadow-md z-50">
      <section className="w-full mx-auto max-w-[1680px] flex justify-between items-center p-5">
        {/* Small Menu */}
        <h1 className="text-h3 font-custom hidden md:block">About Us</h1>
        {/* Logo */}
        <div className="w-full md:w-fit flex justify-start items-center gap-3">
          <HiSquares2X2
            className="text-2xl md:hidden cursor-pointer hover:scale-110 hover:rotate-90 transform transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Link href="/">
            <Image alt="logo" src={Logo} width={170} height={50} className="w-[95px] md:w-[150px]" />
          </Link>
        </div>
        {/* Menu */}
        <div className="flex justify-start items-center gap-4 md:gap-5">
          <HiMagnifyingGlass className="text-xl md:text-2xl" />
          <HiOutlineUser className="text-xl md:text-2xl" />
          <HiOutlineHeart className="text-xl md:text-2xl" />
          <HiOutlineShoppingBag className="text-xl md:text-2xl" />
        </div>
      </section>
      {isMenuOpen && isMobile && <Menu setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
}

export default Navbar;
