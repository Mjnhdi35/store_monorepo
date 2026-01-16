# Developer Guide

Welcome to the Smoothie Store project! This guide will help you understand the codebase and how to contribute effectively.

## 🚀 Onboarding

1.  **Prerequisites**: Ensure you have Node.js, pnpm, and Docker installed.
2.  **Setup**: Follow the instructions in [SETUP.md](./SETUP.md) to get the environment running.
3.  **Environment**: Make sure you have configured your `.env` file in `apps/api`.

## 🏗 Code Structure

The project is a monorepo managed by pnpm.

- **`apps/api`**: Two-tier architecture NestJS backend.
  - **Controller**: Handles incoming HTTP requests and responses.
  - **Service**: Contains business logic and interacts with the database via Knex.
  - **Modules**: Group related controllers and services (e.g., `ProductsModule`).

- **`apps/web`**: Nuxt 3 frontend (Vue.js).

## 🔄 Workflow

### Adding a New Feature

1.  **Database Migration**:
    If your feature requires a new table or schema change, create a migration:

    ```bash
    pnpm --filter @smoothie_store/api exec knex migrate:make migration_name -x ts
    ```

    Then run the migration:

    ```bash
    pnpm --filter @smoothie_store/api exec knex migrate:latest
    ```

2.  **Create Module**:
    Generate a new module (manually or via Nest CLI if configured) in `apps/api/src`.
    - Create `feature.module.ts`
    - Create `feature.controller.ts`
    - Create `feature.service.ts`

3.  **Register Module**:
    Import and add your new module to the `imports` array in `apps/api/src/app.module.ts`.

4.  **Implement Logic**:
    - Define endpoints in the Controller.
    - Implement business logic and DB queries in the Service.

5.  **Testing**:
    - Add E2E tests in `apps/api/test`.
    - Run tests to ensure stability.

## 🛠 Useful Commands

- `pnpm install`: Install dependencies.
- `pnpm build`: Build all apps and libs.
- `pnpm lint`: Lint code.
- `pnpm --filter @smoothie_store/api start:dev`: Start API in dev mode.
