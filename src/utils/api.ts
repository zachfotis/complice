import PRODUCTS from '@/assets/dummy/products.json';
import CATEGORIES from '@/assets/dummy/categories.json';

export const fetchProducts = async (type: string | null = null) => {
  if (type) {
    return PRODUCTS.filter((item) => item.type === type)
  } else {
    return PRODUCTS
  }
};

export const fetchProduct = async (productId: string) => {
  const product = PRODUCTS.find((item) => item.id === productId)
  return product
};

export const fetchCategories = async (categoryType: string | null = null) => {
  if (categoryType) {
    return CATEGORIES.filter((item) => item.categoryType === categoryType)
  } else {
    return CATEGORIES
  }
}
