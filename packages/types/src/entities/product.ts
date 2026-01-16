export interface Product {
  id: number;
  name: string;
  price: string;
  description?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductId = number;
export type CreateProductInput = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductInput = Partial<CreateProductInput>;
