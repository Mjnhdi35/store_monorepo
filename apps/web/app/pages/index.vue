<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-linear-to-r from-primary-600 to-primary-800 text-white">
      <UContainer class="py-24 sm:py-32">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
            Fresh Smoothies Delivered to Your Door
          </h1>
          <p class="mt-6 text-lg leading-8 text-primary-100">
            Organic, delicious, and packed with nutrients. Start your healthy lifestyle today with
            our premium smoothie selection.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <UButton to="/products" size="xl" color="primary" variant="solid">
              Browse Products
            </UButton>
            <UButton to="/about" size="xl" color="primary" variant="outline"> Learn More </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section class="py-24 sm:py-32">
      <UContainer>
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-primary-600">Why Choose Us</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a healthy lifestyle
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <UIcon name="i-heroicons-sparkles" class="h-6 w-6 text-white" />
                </div>
                100% Organic
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">
                  All our ingredients are sourced from certified organic farms. No pesticides, no
                  chemicals, just pure nutrition.
                </p>
              </dd>
            </div>
            <div class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <UIcon name="i-heroicons-bolt" class="h-6 w-6 text-white" />
                </div>
                Fast Delivery
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">
                  Get your smoothies delivered fresh within 30 minutes. We guarantee freshness with
                  every order.
                </p>
              </dd>
            </div>
            <div class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <UIcon name="i-heroicons-heart" class="h-6 w-6 text-white" />
                </div>
                Health First
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">
                  Crafted by nutritionists to provide maximum health benefits. Each smoothie is a
                  perfect blend of taste and wellness.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary-50">
      <UContainer class="py-16 sm:py-24">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to start your healthy journey?
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join thousands of satisfied customers who have transformed their lives with our premium
            smoothies.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <UButton to="/register" size="xl" color="primary"> Get Started </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// Landing page is SSR for SEO
</script>
