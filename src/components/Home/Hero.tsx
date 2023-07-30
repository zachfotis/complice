import BannerImage from '@/assets/dummy/main-banner.jpg';
import Image from 'next/image';
import Button from '../common/Button';

function Hero() {
  return (
    <article className="relative w-full mx-auto md:px-5 md:max-w-[1680px] -mt-20 md:mt-0">
      <Image
        src={ BannerImage }
        alt="Banner"
        width={ 1680 }
        height={ 1000 }
        className="w-full object-cover object-center h-[70vh] min-h-[400px] md:h-[600px]"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <h1 className="mb-4 drop-shadow-lg text-h1 text-primary font-custom">Refined Elegance</h1>
        <p className="mb-8 drop-shadow-lg text-h5 text-primary">Discover Timeless Fashion</p>
        <Button text="Shop Now" variant="sm-light" />
      </div>
    </article>
  );
}

export default Hero;
