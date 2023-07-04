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
  type: string;
  sizes: string[];
  price: number;
  thumb: string | StaticImageData;
  images: string[];
};

type ClothingCategoryThumbType = {
  id: string;
  title: string;
  image: string | StaticImageData;
};
