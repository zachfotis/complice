import {CategoryType} from '../../../typings';
import CategoryThumb from './CategoryThumb';

interface CategoriesThumbProps {
  categories: CategoryType[];
}

function CategoriesThumb({ categories }: CategoriesThumbProps) {
  return (
    <section className="flex w-full snap-x items-stretch justify-between gap-5 overflow-y-auto pb-5 md:gap-10">
        {categories.map((category, index) => (
            <CategoryThumb key={index} category={category}/>
        ))}
    </section>
  );
}

export default CategoriesThumb;
