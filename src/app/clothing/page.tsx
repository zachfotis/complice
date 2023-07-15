import ClothingCategories from '@/components/Clothing/ClothingCategories';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import NavMap from "@/components/layout/NavMap";

const fetchClothingCategories = async (categoryType: string) => {
  const url = new URL(process.env.host + '/api/categories');
  url.searchParams.append('categoryType', categoryType);

  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    return []
  }
  return data;
};

async function page() {
  const clothingCategories = await fetchClothingCategories('clothing');
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
