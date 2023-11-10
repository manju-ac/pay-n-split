'use client';
import Image from 'next/image';
import { useState } from 'react';

type AnimatedImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  fill,
  sizes
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      className={`${
        isLoading
          ? 'blur-sm scale-125 grayscale'
          : 'blur-0 scale-100 grayscale-0'
      } transition-all duration-300 object-cover object-center`}
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      onLoad={() => setIsLoading(false)}
    />
  );
};

export default AnimatedImage;
