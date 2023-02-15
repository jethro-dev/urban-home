import { Product, Variant } from "@prisma/client";

export interface ShoppingCartItem {
  id: string;
  product: Product;
  variant: Variant;
  quantity: number;
}

export interface ShoppingCartState {
  items: ShoppingCartItem[];
}

export interface Banner {
  img: string;
  title: string;
  description: string;
}
