import Logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import SocialMedia from '../common/SocialMedia';

interface Props {
  setIsMenuOpen: (value: boolean) => void;
}

function Menu({setIsMenuOpen}: Props) {
  const normalClasses =
    'w-full text-h4 text-center font-custom text-primary px-5 py-2 outline outline-1 outline-secondary hover:outline-dashed shadow-lg';

  return (
    <nav
      className="absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-start gap-10 overflow-y-auto overscroll-auto bg-white p-5 bg-opacity"
      onClick={() => setIsMenuOpen(false)}
    >
      {/* Close button */}
      <div className="sticky top-0 right-0 flex w-full items-center justify-end">
        <AiOutlineCloseSquare className="cursor-pointer text-4xl" onClick={() => setIsMenuOpen(false)}/>
      </div>
      <Link href="/">
        <Image alt="logo" src={Logo} width={170} height={50} className="w-[150px]"/>
      </Link>
      <div className="flex w-full flex-col items-center justify-start gap-7 px-5">
        <Link href="/" className={normalClasses}>
          <h3>Home</h3>
        </Link>
        <Link href="/sales" className={normalClasses}>
          <h3>Sales</h3>
        </Link>
        <Link href="/new-arrivals" className={normalClasses}>
          <h3>New Arrivals</h3>
        </Link>
        <Link href="/clothing" className={normalClasses}>
          <h3>Clothing</h3>
        </Link>
        <Link href="/accessories" className={normalClasses}>
          <h3>Accessories</h3>
        </Link>
        <div className="my-5">
          <SocialMedia color="text-black" size="text-3xl" gap="gap-10"/>
        </div>
        <div className="flex w-full items-center justify-center gap-3">
          <Link href="/login" className={normalClasses}>
            <h3>Login</h3>
          </Link>
          <Link href="/register" className={normalClasses}>
            <h3>Register</h3>
          </Link>
        </div>
      </div>
      <div className="mt-auto flex w-full items-center justify-center gap-3 text-base font-custom">
        <Link href="/about">
          <p>About</p>
        </Link>
        <Link href="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
