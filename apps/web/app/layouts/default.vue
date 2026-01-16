<script setup lang="ts">
const { token, user, logout } = useAuth();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white border-b border-gray-200">
      <UContainer class="flex justify-between items-center h-16">
        <NuxtLink to="/" class="text-xl font-bold text-primary-600"> Smoothie Store </NuxtLink>
        <nav class="flex gap-4">
          <NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink>
          <NuxtLink to="/products" class="hover:text-primary-600">Products</NuxtLink>
          <NuxtLink to="/about" class="hover:text-primary-600">About</NuxtLink>
        </nav>
        <div class="flex items-center gap-4">
          <UButton v-if="!token" to="/login" variant="ghost">Sign In</UButton>
          <div v-else class="flex items-center gap-4">
            <span v-if="user" class="text-sm">Hi, {{ user.username }}</span>
            <UButton color="error" variant="ghost" @click="logout">Sign Out</UButton>
          </div>
        </div>
      </UContainer>
    </header>

    <main class="grow">
      <slot />
    </main>

    <footer class="bg-gray-50 border-t border-gray-200 py-8 text-center text-gray-500">
      <UContainer> © 2026 Smoothie Store. All rights reserved. </UContainer>
    </footer>
  </div>
</template>
