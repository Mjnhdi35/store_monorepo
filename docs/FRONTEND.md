# Frontend Guide

This project uses **Nuxt 4** with **Nuxt UI** and **TailwindCSS**.

## 📂 Directory Structure

The project follows the Nuxt 4 `app/` directory convention:

- **`app/pages/`**: File-system based routing. Each file becomes a route.
  - `index.vue` -> `/`
  - `products.vue` -> `/products`
- **`app/layouts/`**: Reusable page layouts.
  - `default.vue`: Contains the common Header and Footer.
- **`app/components/`**: Reusable UI components.
  - `ProductCard.vue`: Displays individual product details.
- **`app/composables/`**: Auto-imported logic/state.
  - `useCart.ts`: Manages cart state.

## 🚀 Nuxt 4 Concepts

### Routing

Nuxt automatically generates the router configuration based on the `pages` directory. You don't need to manually configure routes.

### Auto-imports

Components and Composables in their respective directories are auto-imported. You can use `<ProductCard />` or `useCart()` without importing them.

## 🎨 UI System

We use **Nuxt UI**, which is built on **TailwindCSS**.

- Pre-built components like `UButton`, `UCard`, `UContainer`.
- Customizable via `app.config.ts` (if added) or Tailwind classes.

### Styling

- **Global CSS**: `app/assets/css/main.css` (Contains Tailwind setup).
- **Configuration**: `tailwind.config.ts`.

## ⚡ Rendering Modes

We configured different rendering strategies for different routes in `nuxt.config.ts`:

### SSR (Server-Side Rendering)

- **Route**: `/`
- **Behavior**: The page is rendered on the server for every request.
- **Why**: Good for SEO and ensuring the latest content (though for a static home page, SSG could also work).

### ISR (Incremental Static Regeneration)

- **Route**: `/products`
- **Config**: `isr: 60`
- **Behavior**: The page is cached on the server (or CDN). It is revalidated (re-fetched from API and re-rendered) at most once every 60 seconds.
- **Why**: Reduces load on the backend while keeping product prices/details relatively fresh.
