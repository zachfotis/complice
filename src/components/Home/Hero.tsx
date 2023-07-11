import BannerImage from '@/assets/dummy/main-banner.jpg';
import Image from 'next/image';
import Button from '../common/Button';

function Hero() {
  return (
    <article className="relative w-full">
      <Image
        src={BannerImage}
        alt="Banner"
        width={1680}
        height={600}
        className="w-full object-cover object-center h-[600px]"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <h1 className="mb-4 drop-shadow-lg text-h1 text-primary font-custom">Refined Elegance</h1>
        <p className="mb-8 drop-shadow-lg text-h5 text-primary">Discover Timeless Fashion</p>
        <Button text="Shop Now" variant="sm-light"/>
      </div>
    </article>
  );
}

export default Hero;
