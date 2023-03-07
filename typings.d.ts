import {
  Product as ProductType,
  Variant,
  Color,
  Category,
  Collection,
} from "@prisma/client";

export interface ShoppingCartItem {
  id: string;
  product: ProductType;
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

interface Product extends ProductType {
  category: Category[];
  collection: Collection[];
  variants: Variant[];
  color: Color[];
}
