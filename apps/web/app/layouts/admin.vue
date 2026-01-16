<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white">
      <div class="flex h-16 items-center px-6">
        <h1 class="text-xl font-bold">Admin Panel</h1>
      </div>
      <nav class="mt-8 px-4">
        <div class="space-y-1">
          <NuxtLink
            to="/admin"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            active-class="bg-gray-800"
          >
            <UIcon name="i-heroicons-home" class="h-5 w-5" />
            Dashboard
          </NuxtLink>
          <NuxtLink
            to="/admin/products"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            active-class="bg-gray-800"
          >
            <UIcon name="i-heroicons-cube" class="h-5 w-5" />
            Products
          </NuxtLink>
          <NuxtLink
            to="/admin/users"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            active-class="bg-gray-800"
          >
            <UIcon name="i-heroicons-users" class="h-5 w-5" />
            Users
          </NuxtLink>
          <NuxtLink
            to="/admin/settings"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            active-class="bg-gray-800"
          >
            <UIcon name="i-heroicons-cog-6-tooth" class="h-5 w-5" />
            Settings
          </NuxtLink>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="pl-64">
      <!-- Top Header -->
      <header class="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div class="flex h-16 items-center justify-between px-6">
          <h2 class="text-lg font-semibold text-gray-900">Admin Dashboard</h2>
          <div class="flex items-center gap-4">
            <span class="text-sm text-gray-600">{{ user?.username ?? 'Admin' }}</span>
            <UButton color="neutral" variant="ghost" @click="logout"> Logout </UButton>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user, logout } = useAuth();

// Protect admin routes
definePageMeta({
  middleware: 'auth',
});
</script>
