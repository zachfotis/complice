import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import Paginator from '@/components/layout/Paginator';
import NavMap from "@/components/layout/NavMap";
import PageTitle from "@/components/layout/PageTitle";
import Clothing from '@/components/Clothing/Clothing';

interface PageProps {
  params: {
    category: string;
  };
}

const fetchCategoryProducts = async (type: string) => {
  const url = new URL(process.env.host + '/api/products');
  url.searchParams.append('type', type);

  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    return []
  }
  return data;
};

// export async function generateStaticParams() {
//   const url = new URL(process.env.host + '/api/categories');
//   const response = await fetch(url)
//   const data = await response.json() as CategoryType[]
//
//   return data.map((category) => ({
//     category: category.title
//   }))
// }

async function Page({ params }: PageProps) {
  const products = await fetchCategoryProducts(params.category);

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
