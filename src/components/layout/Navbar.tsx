import Logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { HiMagnifyingGlass, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2';

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 bg-white w-full shadow-md z-50">
      <section className="w-full mx-auto max-w-[1680px] flex justify-between items-center p-5">
        {/* Small Menu */}
        <h1 className="text-h3 font-custom">About Us</h1>
        {/* Logo */}
        <Link href="/">
          <Image alt="logo" src={Logo} width={170} height={50}></Image>
        </Link>
        {/* Menu */}
        <div className="flex justify-start items-center gap-5">
          <HiMagnifyingGlass className="text-2xl" />
          <HiOutlineUser className="text-2xl" />
          <HiOutlineHeart className="text-2xl" />
          <HiOutlineShoppingBag className="text-2xl" />
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
