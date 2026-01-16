# Project Architecture: Standard Monolith (Monorepo)

## Overview

This project is a Monorepo managed by **PNPM Workspaces**, containing a Full-Stack Javascript application.

- **Structure**:
  - `apps/web`: Frontend (Nuxt 4.2.2)
  - `apps/api`: Backend (NestJS 11.1.12)
  - `packages/types`: Shared TypeScript Interfaces (Entities)
  - `packages/contracts`: Shared API Contracts (Request/Response DTOs)

## Backend Architecture (`apps/api`)

We follow a **Standard Layered Architecture** (Monolith), prioritizing simplicity, strong typing, and Separation of Concerns (SoC). Code is organized by **Modules** (`User`, `Auth`, `Product`).

### Request Lifecycle

`Request` -> `LoggerMiddleware` -> `Guard` -> `Controller` -> `Service` -> `Repository` -> `Database`

1.  **Middleware** (`common/middleware`):
    - `LoggerMiddleware`: Logs every HTTP request (Method, URL, Status, Duration).
2.  **Guards** (`modules/auth/guards`): Handles Authentication (JWT Validation).
3.  **Controller** (`modules/**`): Handles HTTP requests, validation (DTOs), and returns raw data.
    - _Note_: Response is automatically wrapped by `TransformInterceptor` into `{ data: T, statusCode: number }`.
4.  **Service** (`modules/**`): Contains **ALL** Business Logic.
    - Inherits from `BaseService<T>` (optional).
    - Key Logic: Password Hashing is handled by `HashingService` (decoupled from `bcrypt`).
5.  **Repository** (`modules/**`): Direct Database Access via **Knex**.
    - Inherits from `BaseRepository<T>` providing `findAll`, `create`, `update`, `delete`.
    - Responsible for transforming DB `snake_case` to Entity `camelCase`.

### Global Modules

- **DatabaseModule**: Configures Knex + Postgres.
- **HashingModule**: Provides `HashingService` for password security.

## Frontend Architecture (`apps/web`)

Built with **Nuxt 4**, interacting with the backend via a Proxy.

### Layers

1.  **Pages/Components**: UI logic.
2.  **Composables** (`composables/`): State management and business logic hooks (e.g., `useProducts`).
3.  **Services** (`services/`): Pure TypeScript classes handling API communication.
    - Use `$fetch` to call API.

### Proxy Configuration

- Configured in `nuxt.config.ts` -> `routeRules`.
- **Specific Proxies**: We strictly proxy only known API modules to avoid collisions (e.g. `_nuxt_icon`).
  - `/api/auth/**`
  - `/api/users/**`
  - `/api/products/**`
