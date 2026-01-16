<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin">
        <UFormGroup label="Email/Username" name="email">
          <UInput v-model="form.usernameOrEmail" type="text" required />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="form.password" type="password" required />
        </UFormGroup>

        <div>
          <UButton type="submit" block :loading="loading">Sign in</UButton>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <NuxtLink
          to="/register"
          class="font-semibold leading-6 text-primary-600 hover:text-primary-500"
        >
          Start a 14 day free trial
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LoginRequest } from '@smoothie_store/contracts';

const { login } = useAuth();
const loading = ref(false);

const form = reactive<LoginRequest>({
  usernameOrEmail: '',
  password: '',
});

async function handleLogin() {
  loading.value = true;
  const success = await login(form);
  loading.value = false;
  if (success) {
    navigateTo('/');
  } else {
    alert('Invalid credentials');
  }
}
</script>
