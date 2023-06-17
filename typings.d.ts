import { StaticImageData } from 'next/image';

type CategoryThumbType = {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
};

type ProductThumbType = {
  id: string;
  title: string;
  price: number;
  image: string | StaticImageData;
};
