import PRODUCTS from '@/assets/dummy/products.json';
import CATEGORIES from '@/assets/dummy/categories.json';
import { CategoryType, ProductType } from '../../typings';

export const fetchProducts = async (category: string | null = null, isNew: boolean = false, onSale: boolean = false): Promise<ProductType[]> => {
  if (category) {
    return PRODUCTS.filter((item) => item.category === category)
  } else if (isNew) {
    return PRODUCTS.filter((item) => item.isNew)
  } else if (onSale) {
    return PRODUCTS.filter((item) => item.onSale.isOnSale)
  } else {
    return PRODUCTS
  }
};

export const fetchProduct = async (productId: string): Promise<ProductType | undefined> => {
  const product = PRODUCTS.find((item) => item.id === productId)
  return product
};

export const fetchCategories = async (categoryType: string | null = null): Promise<CategoryType[]> => {
  if (categoryType) {
    return CATEGORIES.filter((item) => item.categoryType === categoryType)
  } else {
    return CATEGORIES
  }
}
