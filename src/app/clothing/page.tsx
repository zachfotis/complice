import { fetchClothingCategories } from '@/actions/serverApi';
import Categories from '@/components/Clothing/Categories';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import NavMap from '@/components/layout/NavMap';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import NoCategories from '@/components/shared/NoCategories';
import { CategoryType } from '../../../typings';


async function page() {
  const categories: CategoryType[] = await fetchClothingCategories();
  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <NavMap />
        <PageTitle title="Clothing" />
        {!categories.length ? <NoCategories /> : <Categories categories={categories} />}
      </PageBody>
    </PageTemplate>
  );
}

export default page;
