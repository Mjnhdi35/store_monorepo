<template>
  <UContainer class="py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Our Products</h1>
      <UBadge size="lg" color="primary" variant="subtle"> Cart: {{ totalItems }} items </UBadge>
    </div>

    <div v-if="status === 'pending'" class="flex justify-center py-12">
      <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl text-primary-500" />
    </div>

    <div v-else-if="error" class="text-center py-12">
      <UAlert
        icon="i-heroicons-exclamation-triangle"
        color="error"
        variant="soft"
        title="Error loading products"
        :description="error.message"
      />
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  price: string;
}

const { data: products, status, error } = await useFetch<Product[]>('/api/products');
const { addToCart, totalItems } = useCart();
</script>
