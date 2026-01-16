# Project Status & Roadmap

## ✅ Completed Features

### Core Infrastructure

- **Monorepo**: Standardized structure with `apps/api` and `apps/web`.
- **Database**: PostgreSQL setup with Docker Compose.
- **CI/CD**: Simplified GitHub Actions pipelines (Check Code strategy: Lint/Test/Build).
- **Documentation**: Comprehensive guides for Setup, Developer, Frontend, and Database.

### Backend (`apps/api`)

- **Framework**: NestJS + Express 5.
- **ORM**: Knex.js.
- **Environment**: Configured via `.env` files.
- **Modules**:
  - `DatabaseModule`: Connection pooling and configuration.
  - `ProductsModule`: API endpoints (`GET /products`, `POST /products`) connected to DB.
- **Testing**: End-to-End (E2E) tests implemented (currently verifying via simplified Unit tests in CI).

### Frontend (`apps/web`)

- **Framework**: Nuxt 4 (Vue 3).
- **Directory Structure**: Modern `app/` folder structure.
- **Routing**: File-system routing with Layouts.
- **UI System**:
  - **Nuxt UI** & **TailwindCSS** integrated.
  - Global CSS and Tailwind Config setup.
- **Features**:
  - **Home Page**: Server-Side Rendered (SSR).
  - **Products Page**: Incremental Static Regeneration (ISR).
  - **Product Card**: Reusable component.
  - **Cart Logic**: Simple `useCart` composable.

## 📅 Roadmap (Next Steps)

### Phase 1: Feature Completeness

- [ ] **Authentication**: User Signup/Login (JWT).
- [ ] **Cart**: Full shopping cart functionality (Add/Remove/Update).
- [ ] **Checkout**: Order creation flow.
- [ ] **Admin Panel**: Manage products (CRUD).

### Phase 2: DevOps & Scaling

- [ ] **Production Deployment**: Setup VPS with Docker/PM2.
- [ ] **Image Optimization**: Enhance `nuxt/image` usage.
- [ ] **Caching Strategy**: Redis for API caching.

### Phase 3: Advanced Features

- [ ] **Payment Gateway Integration**.
- [ ] **Real-time Notifications** (WebSockets/SSE).
