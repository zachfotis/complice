import { CategoryType } from '../../../typings';
import CategoryThumb from './CategoryThumb';

interface ClothingCategoriesProps {
  categories: CategoryType[];
}

function Categories({ categories }: ClothingCategoriesProps) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-10">
      {categories.map((category, index) => (
        <CategoryThumb key={category.id} index={index} category={category} />
      ))}
    </section>
  );
}

export default Categories;
