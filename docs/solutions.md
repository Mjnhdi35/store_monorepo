# Solutions & Recipes

## How to: Add a New Feature (e.g., "Categories")

1.  **Define Domain Model (`packages/types`)**
    - Create `src/entities/category.ts`: `export interface Category { id: string; name: string; ... }`
    - Export in `index.ts`.

2.  **Define Contracts (`packages/contracts`)**
    - Create `src/api/categories/requests.ts`: `CreateCategoryRequest`, `UpdateCategoryRequest`.
    - Create `src/api/categories/responses.ts`.
    - Export in `index.ts`.

3.  **Backend Implementation (`apps/api`)**
    - **Repository**: Create `modules/categories/categories.repository.ts`.
      ```typescript
      export class CategoriesRepository extends BaseRepository<Category> {
         // Implement abstract transform() method
         protected transform(row: any): Category { ... }
      }
      ```
    - **Service**: Create `modules/categories/categories.service.ts`.
      - Extend `BaseService<Category>`.
      - Inject Repository.
    - **Controller**: Create `modules/categories/categories.controller.ts`.
      - Return raw data (Entity or DTO). Do NOT wrap in `{ data: ... }` manually.
    - **Module**: Register all in `CategoriesModule` and import into `AppModule`.

4.  **Frontend Implementation (`apps/web`)**
    - **Service**: Create `app/services/categories.service.ts` (API calls).
    - **Composable**: Create `app/composables/useCategories.ts` (State).
    - **Page**: `app/pages/categories.vue` (UI).

## Troubleshooting

### "Hydration Mismatch"

- **Cause**: Server HTML != Client HTML.
- **Fix**:
  1.  Ensure data is fetched consistently (use `await`).
  2.  Wrap client-only components in `<ClientOnly>`.
  3.  Avoid random IDs/Dates during render.

### "404 Not Found" on API

- **Cause**: Proxy configuration or missing Global Prefix.
- **Fix**:
  1.  Check `nuxt.config.ts` -> `routeRules`. Ensure your module path (e.g. `/api/categories/**`) is added to proxy.
  2.  Check Backend Global Prefix (`app.setGlobalPrefix('api')`).

### "Type not found"

- **Fix**: Run `pnpm build` in root to rebuild shared packages.
