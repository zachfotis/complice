import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../assets/hero.jpg';
import Button from '../common/Button';

function Hero() {
  return (
    <article className="relative w-full mx-auto flex justify-center items-center bg-black md:p-1 md:max-w-[1680px] -mt-20 md:mt-0">
      <Image
        src={HeroImage}
        alt="Banner"
        width={1920}
        height={1080}
        className="w-full flex-1 object-cover object-center brightness-[70%] contrast-[75%] h-[600px]"
      />
      <div className="absolute w-full p-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <h1 className="mb-4 drop-shadow-lg text-h1 text-whiteGrey font-custom whitespace-pre-wrap">
          The Complice Team
        </h1>
        <p className="mb-8 drop-shadow-lg text-h5 text-whiteGrey">Discover Timeless Fashion</p>
        <Link href="/new-arrivals">
          <Button text="Shop Now" variant="sm-black" />
        </Link>
      </div>
    </article>
  );
}

export default Hero;
