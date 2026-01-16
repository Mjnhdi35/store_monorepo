import type { Product } from '@smoothie_store/types';

export const useCart = () => {
  const items = useState<Product[]>('cart_items', () => []);

  const addToCart = (product: Product) => {
    items.value.push(product);
  };

  const removeFromCart = (productId: number) => {
    items.value = items.value.filter((item) => item.id !== productId);
  };

  const totalItems = computed(() => items.value.length);

  return {
    items,
    addToCart,
    removeFromCart,
    totalItems,
  };
};
