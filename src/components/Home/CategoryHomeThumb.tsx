import commonUtils from '@/utils/commonUtils';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryType } from '../../../typings';

interface CategoryThumbProps {
  category: CategoryType;
}

function CategoryHomeThumb({ category }: CategoryThumbProps) {
  return (
    <Link
      href={`/${category.categoryType}/${category.title}`}
      className="flex flex-1 snap-center flex-col items-center justify-start gap-2 min-w-[250px]"
    >
      <div className="w-full overflow-hidden h-[400px]">
        <Image
          src={category.imageURL}
          alt="Category"
          width={300}
          height={300}
          className="h-full w-full object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-start">
        <h3 className="text-center text-h3 font-custom">{commonUtils.toTitleCase(category.title)}</h3>
        <p className="text-center text-base">{category.description}</p>
      </div>
    </Link>
  );
}

export default CategoryHomeThumb;
