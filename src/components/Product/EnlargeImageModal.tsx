'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiFillCloseSquare } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import LOGO from '@/assets/logo.png';

interface EnlargeImageModalProps {
  imageURL: string;
  setIsModalOpen: (value: boolean) => void;
}

function EnlargeImageModal({ imageURL, setIsModalOpen }: EnlargeImageModalProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === document.querySelector('.enlarge_image_modal')) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [setIsModalOpen]);

  return (
    <motion.div
      className="enlarge_image_modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70
      w-screen h-screen flex items-center justify-center z-50"
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      exit={ { opacity: 0 } }
    >
      <div className="relative bg-white rounded-md p-5 w-fit max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-fit flex flex-col justify-start items-start gap-3">
        { !isLoaded && (
          <div
            className="w-[90vw] md:w-[40vw] h-[30vh] md:h-[40vh] bg-white rounded-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
          </div>
        ) }
        <Image src={ imageURL } alt="Product image" width={ 1920 } height={ 1280 } className="w-full h-full max-h-[70vh] object-contain rounded-sm"
               onLoadingComplete={ () => {setIsLoaded(true);} }
        />
        { isLoaded && (
          <>
            <Image src={ LOGO } alt="Logo" width={ 200 } height={ 200 } className="absolute bottom-7 left-7 w-[100px] " />
            <div className="absolute top-1 right-1 cursor-pointer bg-white">
              <AiFillCloseSquare className="text-4xl text-primary" onClick={ () => setIsModalOpen(false) } />
            </div>
          </>
        ) }
      </div>
    </motion.div>
  );
}

export default EnlargeImageModal;
