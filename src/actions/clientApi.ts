import { toast } from 'react-toastify';
import { OrderProductType, ProductType } from '../../typings';
import { fetchSingleProduct } from './serverApi';

export const fetchCurrentUser = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseUrl}/auth/currentuser`, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-cache',
    });
    const data = await response.json();
    if (data?.currentUser) {
      return data.currentUser;
    } else {
      return null;
    }
  } catch (e: any) {
    toast.error(e?.message || 'Something went wrong');
  }
};

export const getUpdatedCartProducts = async (cartProducts: OrderProductType[]) => {
  const updatedCartProductsPromises = cartProducts.map(async (cartProduct) => {
    const product = await fetchSingleProduct(cartProduct.id);
    if (product) {
      if (product.quantity[cartProduct.size as keyof ProductType['quantity']] < cartProduct.quantity) {
        toast.warn(`The quantity of ${product.title} has been updated`);
        if (product.quantity[cartProduct.size as keyof ProductType['quantity']] === 0) {
          return null;
        } else {
          return {
            ...cartProduct,
            quantity: product.quantity[cartProduct.size as keyof ProductType['quantity']],
            maxQuantity: product.quantity[cartProduct.size as keyof ProductType['quantity']],
          };
        }
      } else {
        return {
          ...cartProduct,
          maxQuantity: product.quantity[cartProduct.size as keyof ProductType['quantity']],
        };
      }
    } else {
      return null;
    }
  });
  const updatedCartProducts = await Promise.all(updatedCartProductsPromises);
  const filteredCartProducts = updatedCartProducts.filter((cartProduct) => cartProduct !== null) as OrderProductType[];

  if (filteredCartProducts?.length) {
    return filteredCartProducts;
  } else {
    return null;
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseUrl}/auth/signin`, {
      method: 'POST',
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    return data;
  } catch (e: any) {
    toast.error(e?.message || 'Something went wrong');
  }
};

export const signUpUser = async (firstName: string, lastName: string, email: string, password: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    const data = await response.json();
    return data;
  } catch (e: any) {
    toast.error(e?.message || 'Something went wrong');
  }
};

export const verifyEmail = async (email: string, token: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseUrl}/auth/verify-email`, {
      method: 'POST',
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        token,
      }),
    });

    const data = await response.json();
    return data;
  } catch (e: any) {
    toast.error(e?.message || 'Something went wrong');
  }
};

export const buyCoupon = async (discountValue: number) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseUrl}/coupons/buy-coupon`, {
      method: 'POST',
      credentials: 'include',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        discountValue,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    toast.error('Something went wrong!');
  }
};
