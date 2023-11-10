'use client';

import React, { PropsWithChildren } from 'react';

type ModalProps = PropsWithChildren & {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <>
      <div
        className='hidden md:block fixed top-0 left-0 h-screen w-screen backdrop-blur-sm'
        onClick={onClose}
      ></div>
      <div className='fixed py-10 px-6 bg-white border w-full h-screen top-0 left-0 md:h-auto md:rounded-lg md:shadow-sm md:w-8/12 md:max-w-3xl md:mx-auto md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]'>
        <span
          className='absolute font-light w-6 aspect-square top-2 right-2 text-xl text-center cursor-pointer hover:opacity-70 transition-opacity'
          onClick={onClose}
        >
          &times;
        </span>
        {children}
      </div>
    </>
  );
};

export default Modal;
