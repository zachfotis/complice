import { CategoryType } from '../../../typings';
import CategoryHomeThumb from './CategoryHomeThumb';

interface CategoriesThumbProps {
  categories: CategoryType[];
}

function CategoriesHomeThumb({ categories }: CategoriesThumbProps) {
  return (
    <section className="flex w-full snap-x items-stretch justify-between gap-5 overflow-y-auto py-5 md:px-5 md:gap-10">
      {categories.map((category, index) => (
        <CategoryHomeThumb key={index} category={category} />
      ))}
    </section>
  );
}

export default CategoriesHomeThumb;
