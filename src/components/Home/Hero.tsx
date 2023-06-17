import BannerImage from '@/assets/dummy/main-banner.jpg';
import Image from 'next/image';
import Button from '../common/Button';
function Hero() {
  return (
    <article className="w-full relative">
      <Image
        src={BannerImage}
        alt="Banner"
        width={1680}
        height={600}
        className="w-full h-[600px] object-cover object-center"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-h1 text-primary font-custom mb-4 drop-shadow-lg">Refined Elegance</h1>
        <p className="text-h5 text-primary mb-8 drop-shadow-lg">Discover Timeless Fashion</p>
        <Button text="Shop Now" variant="sm-light" />
      </div>
    </article>
  );
}

export default Hero;
