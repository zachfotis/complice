export const revalidate = 60 * 60 * 12;

import { fetchAccessoriesCategories, fetchClothingCategories, fetchProductsPerCategory } from '@/actions/serverApi';
import CategoryProducts from '@/components/Clothing/CategoryProducts';
import Button from '@/components/common/Button';
import CategoriesMenu from '@/components/layout/CategoriesMenu';
import NavMap from '@/components/layout/NavMap';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import NoProducts from '@/components/shared/NoProducts';
import commonUtils from '@/utils/commonUtils';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { CategoryType, ProductType } from '../../../../typings';

export async function generateStaticParams() {
  const categories: CategoryType[] = await fetchClothingCategories();
  return categories.map((category) => ({
    category: category.title,
  }));
}

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const categories: CategoryType[] = await fetchAccessoriesCategories();
  const currentCategory = categories.find((category) => category.title === params.category);

  return {
    title: `${commonUtils.toTitleCase(params.category)}`,
    description: currentCategory?.description,
  };
}

async function Page({ params }: PageProps) {
  const products: ProductType[] = await fetchProductsPerCategory(params.category);

  return (
    <PageTemplate>
      <PageBody>
        <CategoriesMenu />
        <NavMap />
        <PageTitle title={params.category} />
        {!products.length ? (
          <div className="flex flex-col justify-center items-center gap-10">
            <NoProducts />
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
