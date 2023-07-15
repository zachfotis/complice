import ClothingCategories from '@/components/Clothing/ClothingCategories';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import NavMap from "@/components/layout/NavMap";
import { fetchCategories } from '@/utils/api';

async function page() {
  const clothingCategories = await fetchCategories('clothing');
  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <NavMap />
        <PageTitle title="Clothing" />
        <ClothingCategories categories={ clothingCategories } />
      </PageBody>
    </PageTemplate>
  );
}

export default page;
