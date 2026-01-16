<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-primary-600">Our Story</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Smoothie Store
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We are dedicated to providing the freshest, most delicious smoothies made from organic
          ingredients. Our mission is to promote health and wellness through nutrition.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600"
              >
                <UIcon name="i-heroicons-globe-alt" class="h-6 w-6 text-white" />
              </div>
              Sustainably Sourced
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              We partner with local farmers to ensure the highest quality fruits and vegetables.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600"
              >
                <UIcon name="i-heroicons-bolt" class="h-6 w-6 text-white" />
              </div>
              Fast Delivery
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              Get your smoothies delivered fresh to your door in under 30 minutes.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
