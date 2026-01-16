<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white"
      >
        Create an account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleRegister">
        <UFormGroup label="Username" name="username">
          <UInput v-model="form.username" type="text" required />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="form.email" type="email" required />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="form.password" type="password" required />
        </UFormGroup>

        <div>
          <UButton type="submit" block :loading="loading">Sign Up</UButton>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <NuxtLink
          to="/login"
          class="font-semibold leading-6 text-primary-600 hover:text-primary-500"
        >
          Sign In
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RegisterRequest } from '@smoothie_store/contracts';

const { register } = useAuth();
const loading = ref(false);

const form = reactive<RegisterRequest>({
  username: '',
  email: '',
  password: '',
});

async function handleRegister() {
  loading.value = true;
  const success = await register(form);
  loading.value = false;
  if (success) {
    navigateTo('/login');
  } else {
    alert('Registration failed');
  }
}
</script>
