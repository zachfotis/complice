'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import EnlargeImageModal from '@/components/Product/EnlargeImageModal';

interface CarouselProps {
  thumb: string;
  images: string[];
}

function Carousel({ thumb, images }: CarouselProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showingImage, setShowingImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedImageURL, setClickedImageURL] = useState('');

  const checkWidth = () => {
    const carousel = document.querySelector('#carousel');
    const carouselWidth = carousel?.clientWidth;
    if (carouselWidth && carouselWidth < 600) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  const getImagesOffset = () => {
    const carousel = document.querySelector('#carousel');
    const startingX = carousel?.getBoundingClientRect().left || 0;

    const images = document.querySelectorAll('img[id^="carousel__img_"]');
    images.forEach((image, index) => {
      const offset = image.getBoundingClientRect().left;
      if (offset <= startingX && offset >= 0) {
        setShowingImage(index);
      }
    });
  };

  useEffect(() => {
    const carouselImages = document.querySelector('#carousel__images');
    getImagesOffset();
    carouselImages?.addEventListener('scroll', getImagesOffset);

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
      carouselImages?.removeEventListener('scroll', getImagesOffset);
    };
  }, []);

  useEffect(() => {
    if (clickedImageURL) {
      setIsModalOpen(true);
    }
  }, [clickedImageURL]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      setClickedImageURL('');
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);
  
  const handleImageClick = (event: any) => {
    const url = event.target.src.split('?url=')[1];
    // URL decode
    const decodedURL = decodeURIComponent(url);
    setClickedImageURL(decodedURL);
  };

  return (
    <div id="carousel" className="relative flex-auto flex w-full flex-col items-center justify-start gap-2">
      { !isCollapsed && (
        <div className="w-full h-[300px] md:h-[400px]">
          <Image src={ thumb } alt="Product" width={ 1680 } height={ 800 }
                 className="h-full w-full object-cover object-center cursor-pointer"
                 onClick={ handleImageClick }
          />
        </div>
      ) }
      <div
        id="carousel__images"
        className={ `w-full ${ isCollapsed ? 'h-full flex flex-row justify-start items-center overflow-x-scroll snap-x snap-mandatory' : 'grid grid-cols-4 gap-2' }` }
      >
        { isCollapsed && <Image id="carousel__img_0" src={ thumb } alt="Product" width={ 1680 } height={ 800 }
                                className="h-[300px] md:h-[400px] w-full min-w-full snap-center object-cover object-center cursor-pointer"
                                onClick={ handleImageClick } /> }
        { images.map((image, index) => (
          <Image
            id={ `carousel__img_${ index + 1 }` }
            key={ index }
            src={ image }
            alt="Product"
            width={ 1680 }
            height={ 800 }
            className={ `${ isCollapsed ? 'w-full min-w-full h-[300px] md:h-[400px]' : 'h-full max-h-[150px]' } snap-center object-cover object-center cursor-pointer` }
            onClick={ handleImageClick }
          />
        )) }
        {/* Bullets*/ }
        { isCollapsed && (
          <div className="absolute bottom-6 left-0 flex w-full items-center justify-center gap-3">
            { Array.from({ length: images.length + 1 }).map((_, index) => (
              <div key={ index }
                   className={ `w-4 h-4 rounded-full ${ showingImage === index ? 'bg-black border-2 border-white' : 'bg-white border border-black' }` } />
            )) }
          </div>
        ) }
      </div>
      { isModalOpen && <EnlargeImageModal imageURL={ clickedImageURL } setIsModalOpen={ setIsModalOpen } /> }
    </div>
  );
}

export default Carousel;
