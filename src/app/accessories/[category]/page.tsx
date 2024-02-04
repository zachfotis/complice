export const revalidate = 60 * 60 * 12;

import CategoryProducts from '@/components/Clothing/CategoryProducts';
import Button from '@/components/common/Button';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import NavMap from '@/components/layout/NavMap';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import Link from 'next/link';
import { CategoryType } from '../../../../typings';

interface PageProps {
  params: {
    category: string;
  };
}

const fetchCategories = async () => {
  const BASE_URL = process.env.API_URL;
  const res = await fetch(`${BASE_URL}/categories/get-category/clothing`);
  const data = await res.json();
  return data;
};

const fetchProducts = async (category: string) => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/get-products/${category}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
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
        <PageTitle title={params.category} />
        {products.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-center">No products found</p>
            <Link href="/accessories" className="flex justify-center">
              <Button text="Go back" />
            </Link>
          </div>
        ) : (
          <CategoryProducts products={products} />
        )}
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
