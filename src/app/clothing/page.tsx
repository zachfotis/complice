import ClothingCategories from '@/components/Clothing/ClothingCategories';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import {ClothingCategoryType} from '../../../typings';

function page() {
  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <PageTitle title="Clothing" />
        <ClothingCategories categories={clothingCategoryType} />
      </PageBody>
    </PageTemplate>
  );
}

export default page;

const clothingCategoryType: ClothingCategoryType[] = [
  {
    id: '1',
    title: 't-shirts',
    image: 'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3772&q=80',
  },
  {
    id: '2',
    title: 'jeans',
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3818&q=80',
  },
  {
    id: '3',
    title: 'shorts',
    image: 'https://images.unsplash.com/photo-1583195295498-bf846ae68dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80',
  },
];
