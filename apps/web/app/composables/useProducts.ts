import type { Product } from '@smoothie_store/types';
import { ProductsService } from '../services/products.service';

export const useProducts = () => {
  const productService = new ProductsService();

  const products = ref<Product[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;
    try {
      products.value = await productService.findAll();
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
  };
};
