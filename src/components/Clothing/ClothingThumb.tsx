import Image from 'next/image';
import Link from 'next/link';
import { ClothingCategoryThumbType } from '../../../typings';

interface ClothingThumbProps {
  index: number;
  category: ClothingCategoryThumbType;
}

function ClothingThumb({ index, category }: ClothingThumbProps) {
  const isFullWidth = index % 3 === 0 || index === 0;

  return (
    <Link
      href={`/clothing/${category.title}`}
      className={`relative ${isFullWidth ? 'flex-auto w-full' : 'flex-auto'} h-[300px] shadow-md group`}
    >
      <div className="w-full h-[300px] overflow-hidden">
        <Image
          src={category.image}
          width={1680}
          height={300}
          alt={category.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <p className="absolute bottom-0 left-0 w-full text-primary text-h3 font-medium px-5 py-4 bg-white bg-opacity-50 backdrop-blur-lg">
        {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
      </p>
    </Link>
  );
}

export default ClothingThumb;
