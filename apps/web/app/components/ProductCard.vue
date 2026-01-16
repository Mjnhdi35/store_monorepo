<template>
  <UCard class="hover:ring-2 hover:ring-primary-500 transition-all h-full flex flex-col">
    <template #header>
      <h2 class="text-xl font-semibold truncate">{{ product.name }}</h2>
    </template>

    <div class="mt-auto flex justify-between items-center pt-4">
      <span class="text-2xl font-bold text-green-600">${{ product.price }}</span>
      <UButton color="primary" variant="soft" @click="$emit('add-to-cart', product)">
        Add to Cart
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    id: number;
    name: string;
    price: string;
  };
}>();

defineEmits(['add-to-cart']);
</script>
