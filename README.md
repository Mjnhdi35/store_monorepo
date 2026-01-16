# Smoothie Store Monorepo 🥤

Welcome to the Smoothie Store project! This is a comprehensive Full-Stack application comprising a NestJS Backend and Nuxt 4 Frontend, managed as a **PNPM Workspace**.

## 📚 Documentation

We have detailed documentation available in the `docs` directory:

- [**Setup Guide**](./docs/setup.md): How to install and run the project locally.
- [**Architecture**](./docs/architecture.md): Understanding the Standard Monolith and Request Flow.
- [**Solutions & Recipes**](./docs/solutions.md): Step-by-step guides for adding features.
- [**Coding Standards**](./docs/coding-standards.md): Style guide and conventions.
- [**Library Usage**](./docs/library-usage.md): Quick reference for NestJS, Nuxt, and Knex.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start Database (Docker)
docker-compose up -d

# Run Migrations
pnpm --filter @smoothie_store/api exec knex migrate:latest

# Start Development Server (Both API and Web)
pnpm run dev
```
