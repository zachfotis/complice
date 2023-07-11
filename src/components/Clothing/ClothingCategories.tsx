import {ClothingCategoryType} from '../../../typings';
import ClothingThumb from './ClothingThumb';

interface ClothingCategoriesProps {
  categories: ClothingCategoryType[];
}

function ClothingCategories({categories}: ClothingCategoriesProps) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-10">
      {categories.map((category, index) => (
        <ClothingThumb key={category.id} index={index} category={category}/>
      ))}
    </section>
  );
}

export default ClothingCategories;
