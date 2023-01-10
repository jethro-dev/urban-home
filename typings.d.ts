export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  img?: string | null;
  createdBy: Date;
  updatedBy: Date;
};

export type Category = {
  id: string;
  name: string;
  createdBy: Date;
  updatedBy: Date;
};
