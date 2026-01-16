import type { ProductListResponse, ProductResponse } from '@smoothie_store/contracts';
import type { Product } from '@smoothie_store/types';

export class ProductsService {
  async findAll(): Promise<Product[]> {
    const response = await $fetch<ProductListResponse>('/api/products');
    return response.data;
  }

  async findById(id: number): Promise<Product | null> {
    const response = await $fetch<ProductResponse>(`/api/products/${id}`);
    return response.data;
  }
}
