'use client';

import { useEffect } from 'react';
import Button from '@/components/common/Button';

interface ConfirmationModalProps {
  title: string;
  message: string;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  onConfirm: () => void;
}

function ConfirmationModal({ title, message, isModalOpen, setIsModalOpen, onConfirm }: ConfirmationModalProps) {

  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = 'unset';
    }

    return () => {
      // Enable scrolling
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // If user clicks outside the modal, close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === document.querySelector('#confirmation-modal')) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [setIsModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div id="confirmation-modal" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70
     w-screen h-screen flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-5 w-[500px] max-w-[90%] flex flex-col justify-start items-start gap-3">
        <h2 className="text-h3 font-custom">{ title }</h2>
        <p className="text-base">{ message }</p>
        <div className="flex flex-row items-center justify-end w-full mt-5 gap-5">
          <Button text="Cancel" variant="sm-light" onClick={ () => {
            setIsModalOpen(false);
          } } />
          <Button text="Confrim" variant="sm-black" onClick={ () => {
            onConfirm();
            setIsModalOpen(false);
          } } />
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
