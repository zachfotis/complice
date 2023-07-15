import { StaticImageData } from 'next/image';

type CategoryType = {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
};

enum Sizes {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

type ProductType = {
  id: string;
  title: string;
  type: string;
  description: string;
  sizes: string[];
  quantity: {
    [key: Sizes]: number;
  };
  price: number;
  thumb: string;
  images: string[];
};

type ClothingCategoryType = {
  id: string;
  title: string;
  image: string | StaticImageData;
};

type ShippingAddressType = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  email: string;
};

type OrderProductType = {
  id: string;
  title: string;
  size: string;
  quantity: number;
  price: number;
  thumb: string;
};

type OrderType = {
  id?: string;
  userId?: string;
  products: OrderProductType[];
  shippingAddress: ShippingAddressType;
};
