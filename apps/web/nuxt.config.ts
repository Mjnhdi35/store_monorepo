// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    apiBase: process.env.NUXT_API_BASE || 'http://localhost:3000',
  },
  routeRules: {
    '/api/auth/**': {
      proxy: `${process.env.NUXT_API_BASE || 'http://localhost:3000'}/api/auth/**`,
    },
    '/api/users/**': {
      proxy: `${process.env.NUXT_API_BASE || 'http://localhost:3000'}/api/users/**`,
    },
    '/api/products/**': {
      proxy: `${process.env.NUXT_API_BASE || 'http://localhost:3000'}/api/products/**`,
    },
    '/': { ssr: true },
    '/products/**': { ssr: false },
    '/admin/**': { ssr: false },
    '/login': { ssr: false },
    '/register': { ssr: false },
    '/about': { prerender: true },
  },
});
