'use client';

import { AiFillCloseSquare } from 'react-icons/ai';

interface VideoBannerProps {
  isVideoOpen: boolean;
  setIsVideoOpen: (value: boolean) => void;
}

export function VideoBanner({ isVideoOpen, setIsVideoOpen }: VideoBannerProps) {
  if (!isVideoOpen) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsVideoOpen(false);
    }
  };

  return (
    <div
      className="fixed w-full h-full flex justify-center items-center top-0 p-2 left-0 z-50 bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div className="relative w-full max-w-[800px] p-5 text-center bg-black">
        <video controls autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://complice.fra1.cdn.digitaloceanspaces.com/video/complice.mp4" type="video/mp4" />
        </video>
        <AiFillCloseSquare
          className="absolute top-2 right-2 text-white text-3xl cursor-pointer"
          onClick={() => setIsVideoOpen(!isVideoOpen)}
        />
      </div>
    </div>
  );
}
