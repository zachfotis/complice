import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import NavMap from '@/components/layout/NavMap';
import Categories from '@/components/Clothing/Categories';

const fetchCategories = async () => {
  const BASE_URL = process.env.API_URL;
  const res = await fetch(`${ BASE_URL }/categories/get-category/clothing`);
  const data = await res.json();
  return data;
};

async function page() {
  const categories: CategoryType[] = await fetchCategories();
  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <NavMap />
        <PageTitle title="Clothing" />
        <Categories categories={ categories } />
      </PageBody>
    </PageTemplate>
  );
}

export default page;
