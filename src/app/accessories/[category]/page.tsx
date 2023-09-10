import CategoriesMenu from '@/components/layout/CategoriesMenu';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import Paginator from '@/components/layout/Paginator';
import NavMap from '@/components/layout/NavMap';
import PageTitle from '@/components/layout/PageTitle';
import CategoryProducts from '@/components/Clothing/CategoryProducts';
import { fetchProducts } from '@/utils/api';

interface PageProps {
  params: {
    category: string;
  };
}

const fetchCategories = async () => {
  const BASE_URL = process.env.API_URL;
  const res = await fetch(`${ BASE_URL }/categories/get-category/accessories`);
  const data = await res.json();
  return data;
};

export async function generateStaticParams() {
  const categories: CategoryType[] = await fetchCategories();
  return categories.map((category) => ({
    category: category.title,
  }));
}

async function Page({ params }: PageProps) {
  const products = await fetchProducts(params.category);

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <NavMap />
        <PageTitle title={ params.category } />
        <CategoryProducts products={ products } />
        <Paginator productsShown={ products.length } totalProducts={ products.length } />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
