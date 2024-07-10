import Image from 'next/image';
import Link from 'next/link';
import { CategoryType } from '../../../typings';

interface ClothingThumbProps {
  index: number;
  category: CategoryType;
}

function CategoryThumb({ index, category }: ClothingThumbProps) {
  return (
    <Link
      href={`/${category.categoryType}/${category.title}`}
      className="relative min-w-[300px] flex-1 shadow-md group"
    >
      <div className="w-full overflow-hidden h-[400px]">
        <Image
          src={category.imageURL}
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

export default CategoryThumb;
