import { CategoryType } from '../../../typings';
import CategoryThumb from './CategoryThumb';

interface CategoriesThumbProps {
  categories: CategoryType[];
}

function CategoriesThumb({ categories }: CategoriesThumbProps) {
  return (
    <section className="w-full flex justify-between items-stretch gap-5 md:gap-10 overflow-y-auto snap-x pb-5">
      {categories.map((category, index) => (
        <CategoryThumb key={index} category={category} />
      ))}
    </section>
  );
}

export default CategoriesThumb;
