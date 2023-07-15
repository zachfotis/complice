import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import Paginator from '@/components/layout/Paginator';
import NavMap from "@/components/layout/NavMap";
import PageTitle from "@/components/layout/PageTitle";
import Clothing from '@/components/Clothing/Clothing';
import { fetchCategories, fetchProducts } from '@/utils/api';

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = await fetchCategories('clothing');
  return categories.map((category) => ({
    category: category.title
  }))
}

async function Page({ params }: PageProps) {
  const products = await fetchProducts(params.category);

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <NavMap />
        <PageTitle title={ params.category } />
        <Clothing products={ products } />
        <Paginator productsShown={ products.length } totalProducts={ products.length } />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
