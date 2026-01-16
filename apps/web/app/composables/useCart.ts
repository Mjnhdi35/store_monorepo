export const useCart = () => {
  const cart = useState<{ id: number; name: string; price: string; quantity: number }[]>(
    'cart',
    () => [],
  );

  const addToCart = (product: { id: number; name: string; price: string }) => {
    const existing = cart.value.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0));

  return {
    cart,
    addToCart,
    totalItems,
  };
};
