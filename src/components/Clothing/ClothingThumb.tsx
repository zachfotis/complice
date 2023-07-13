import Image from 'next/image';
import Link from 'next/link';
import { ClothingCategoryType } from '../../../typings';

interface ClothingThumbProps {
  index: number;
  category: ClothingCategoryType;
}

function ClothingThumb({index, category}: ClothingThumbProps) {
  const isFullWidth = index % 3 === 0 || index === 0;

  return (
    <Link href={`/clothing/${category.title}`} className={`relative ${isFullWidth ? 'flex-auto w-full' : 'flex-auto'} shadow-md group`}>
      <div className="w-full overflow-hidden h-[400px]">
        <Image
          src={category.image}
          width={1680}
          height={300}
          alt={category.title}
          className="h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <p className="absolute bottom-0 left-0 w-full bg-white bg-opacity-50 px-5 py-4 font-medium backdrop-blur-lg text-primary text-h3">
        {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
      </p>
    </Link>
  );
}

export default ClothingThumb;
