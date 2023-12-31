// ======== CATEGORIES ========
type CategoryType = {
  id: string;
  title: string;
  categoryType: string;
  description: string;
  imageURL: string;
};

// ======== PRODUCTS ========

type ProductType = {
  id: string;
  title: string;
  category: string;
  description: string;
  quantity: {
    [key: Sizes]: number;
  };
  price: number;
  imagesURL: {
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
  }
  isNew: boolean;
  onSale: {
    isOnSale: boolean;
    discount: number;
  }
};

enum Sizes {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
};

// ======== ORDERS ========

type OrderProductType = {
  id: string;
  title: string;
  size: string;
  quantity: number;
  maxQuantity: number;
  price: number;
  onSale: {
    isOnSale: boolean;
    discount: number;
  };
  imagesURL: {
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
  }
};

type OrderType = {
  id?: string;
  userId?: string;
  date: Date;
  total: number;
  status: string;
  products: OrderProductType[];
  shippingAddress: ShippingAddressType;
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

type ShippingCountryType = {
  id: string;
  name: string;
  cost: number;
};

// ======== USER ========

type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate?: Date;
  discount?: number;
  address?: ShippingAddressType;
  ranking: {
    current: RankingNamesEnum | null;
    next: RankingNamesEnum | null;
    progress: number;
    moneyToNextRanking: number;
  }
};

type UpdateUserType = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  email: string;
  birthDate?: Date;
}

enum RankingNamesEnum {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PLATINUM = 'Platinum',
}

type RankingType = {
  name: RankingNamesEnum;
  min: number;
  max: number;
  discount: number;
};
