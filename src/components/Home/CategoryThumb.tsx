import Image from 'next/image';
import { CategoryThumbType } from '../../../typings';

interface CategoryThumbProps {
  category: CategoryThumbType;
}
function CategoryThumb({ category }: CategoryThumbProps) {
  return (
    <div className="flex-1 min-w-[250px] flex flex-col justify-start items-center gap-2 snap-center">
      <div className="w-full h-[400px] overflow-hidden">
        <Image
          src={category.image}
          alt="Category"
          width={300}
          height={300}
          className="w-full h-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="w-full flex flex-col justify-start items-center">
        <h3 className="text-h3 font-custom text-center">{category.title}</h3>
        <p className="text-base text-center">{category.description}</p>
      </div>
    </div>
  );
}

export default CategoryThumb;
