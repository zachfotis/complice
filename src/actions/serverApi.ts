'use server';

export const fetchAllCategories = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/categories/get-categories`);
    const data = await res.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchClothingCategories = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/categories/get-category/clothing`);
    const data = await res.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchAccessoriesCategories = async () => {
  const BASE_URL = process.env.API_URL;
  const res = await fetch(`${BASE_URL}/categories/get-category/accessories`);
  const data = await res.json();
  if (!data?.errors) {
    return data;
  } else {
    return null;
  }
};

export const fetchProductsPerCategory = async (category: string) => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/get-products/${category}`);
    const data = await res.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchBestSellers = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/best-sellers`);
    const data = await res.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchNewArrivals = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/new-arrivals`);
    const data = await res.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchOnSaleProducts = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/on-sale`);
    const data = await res.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchSimilarProducts = async (category: string, productId: string) => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/get-similar-products/${category}/${productId}`);
    const data = await res.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchSingleProduct = async (productId: string) => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/get-product/${productId}`);
    const data = await res.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchAllProducts = async () => {
  try {
    const BASE_URL = process.env.API_URL;
    const res = await fetch(`${BASE_URL}/products/get-products`);
    const data = await res.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchShippingCountries = async () => {
  try {
    const baseUrl = process.env.API_URL;
    const response = await fetch(`${baseUrl}/shipping/get-shipping-countries`);
    const data = await response.json();
    if (!data?.errors) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

