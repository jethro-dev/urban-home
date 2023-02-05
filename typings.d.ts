export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  img?: string | null;
  createdBy: Date;
  updatedBy: Date;
};

export interface Color {
  name: string;
  hexCode: string;
}

export interface ShoppingCartItem {
  id: number;
  product: Product;
  quantity: number;
}

export interface ShoppingCartState {
  items: ShoppingCartItem[];
}

export interface Feature {
  description: string;
}

export interface ProductCare {
  instructions: string;
}

export interface ShippingAndReturns {
  policy: string;
}

export interface Warranty {
  details: string;
  period: number;
}

export interface ProductDetails {
  features: Feature[];
  productCare: ProductCare;
  shippingAndReturns: ShippingAndReturns;
  warranty: Warranty;
}

export interface Banner {
  img: string;
  title: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  img: string;
  slug: string;
  // createdBy: Date;
  // updatedBy: Date;
}
