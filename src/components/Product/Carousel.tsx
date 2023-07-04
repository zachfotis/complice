'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CarouselProps {
  thumb: string;
  images: string[];
}

function Carousel({ thumb, images }: CarouselProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Check carousel width
  const checkWidth = () => {
    const carousel = document.querySelector('#carousel');
    const carouselWidth = carousel?.clientWidth;
    if (carouselWidth && carouselWidth < 600) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div id="carousel" className="flex-auto w-full flex flex-col justify-start items-center gap-2">
      {!isCollapsed && (
        <div className="w-full h-[400px]">
          <Image src={thumb} alt="Product" width={1680} height={400} className="w-full h-full object-cover object-center" />
        </div>
      )}
      <div className={`w-full ${isCollapsed ? 'flex flex-row justify-start items-center overflow-x-scroll snap-x snap-mandatory' : 'grid grid-cols-4 gap-2'}`}>
        {isCollapsed && <Image src={thumb} alt="Product" width={1680} height={400} className="w-full h-full object-cover object-center snap-center" />}
        {images.map((image, index) => (
          <Image key={index} src={image} alt="Product" width={1680} height={200} className="w-full h-full object-cover object-center snap-center" />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
