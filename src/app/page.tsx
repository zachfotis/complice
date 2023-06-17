import ImageThumb4 from '@/assets/dummy/caps_categorie.jpg';
import ImageThumb2 from '@/assets/dummy/shorts_categorie.jpg';
import ImageThumb3 from '@/assets/dummy/socks_categorie.jpg';
import ProductThumb1 from '@/assets/dummy/tshirt-example1.jpg';
import ProductThumb2 from '@/assets/dummy/tshirt-example2.jpg';
import ProductThumb3 from '@/assets/dummy/tshirt-example3.jpg';
import ImageThumb from '@/assets/dummy/tshirt_categorie.jpg';
import Banner from '@/components/Home/Banner';
import CategoriesThumb from '@/components/Home/CategoriesThumb';
import Hero from '@/components/Home/Hero';
import Products from '@/components/Products/Products';
import StayTuned from '@/components/common/StayTuned';
import Categories from '@/components/layout/Categories';
import Footer from '@/components/layout/Footer';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { CategoryThumbType, ProductThumbType } from '../../typings';

export default function Home() {
  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <Hero />
        <CategoriesThumb categories={categoryThumbData} />
        <Banner />
      </PageBody>
      <PageBody>
        <Products products={productThumbData} />
        <StayTuned />
      </PageBody>
      <Footer />
    </PageTemplate>
  );
}

// TODO: Fetch data from API
const categoryThumbData: CategoryThumbType[] = [
  {
    id: '1',
    title: 'T-Shirt',
    description: 'Lorem ipsum dolor sit amet.',
    image: ImageThumb,
  },
  {
    id: '2',
    title: 'Shorts',
    description: 'Lorem ipsum dolor sit amet.',
    image: ImageThumb2,
  },
  {
    id: '3',
    title: 'Socks',
    description: 'Lorem ipsum dolor sit amet.',
    image: ImageThumb3,
  },
  {
    id: '4',
    title: 'Caps',
    description: 'Lorem ipsum dolor sit amet.',
    image: ImageThumb4,
  },
];

const productThumbData: ProductThumbType[] = [
  {
    id: '1',
    title: 'Iron Gym T-Shirt',
    price: 15.99,
    image: ProductThumb1,
  },
  {
    id: '2',
    title: 'Waterproof Shorts',
    price: 24.99,
    image: ProductThumb2,
  },
  {
    id: '3',
    title: 'Black Socks',
    price: 9.99,
    image: ProductThumb3,
  },
];
