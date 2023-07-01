import { ClothingCategoryThumbType } from '../../../typings';
import ClothingThumb from './ClothingThumb';

interface ClothingCategoriesProps {
  categories: ClothingCategoryThumbType[];
}

function ClothingCategories({ categories }: ClothingCategoriesProps) {
  return (
    <section className="w-full flex justify-center items-center gap-10 flex-wrap">
      {categories.map((category, index) => (
        <ClothingThumb key={category.id} index={index} category={category} />
      ))}
    </section>
  );
}

export default ClothingCategories;
