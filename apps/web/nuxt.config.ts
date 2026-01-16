// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/api/**': { proxy: 'http://localhost:3000/**' },
    '/': { ssr: true },
    '/products': { isr: 60 },
  },
});
