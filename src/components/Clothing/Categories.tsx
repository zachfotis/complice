import { CategoryType } from '../../../typings';
import CategoryThumb from './CategoryThumb';

interface ClothingCategoriesProps {
  categories: CategoryType[];
}

function Categories({ categories }: ClothingCategoriesProps) {
  return (
    <section
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
     gap-5 lg:mt-10"
    >
      {categories.map((category, index) => (
        <CategoryThumb key={category.id} index={index} category={category} />
      ))}
    </section>
  );
}

export default Categories;
