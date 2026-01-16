# Library Usage & Quick Reference

## NestJS (v11.x)

- **Modules**: The building blocks. Every feature needs a `*.module.ts`.
- **Dependency Injection**: Use constructor injection.
  ```typescript
  constructor(private readonly service: MyService) {}
  ```
- **Pipes**: `ValidationPipe` is global. Use class-validator decorators in DTOs.
- **Hashing**: Inject `HashingService` instead of using `bcrypt` directly.
  ```typescript
  await this.hashingService.hash(password);
  ```

## Nuxt (v4.x) & Nitro

- **Data Fetching**: Use `$fetch` in Services for pure API calls. Use `useFetch` or `useAsyncData` in Composables/Pages for SSR-friendly data.
- **Proxy**: Configured in `nuxt.config.ts`. Always use `process.env.NUXT_API_BASE` for target.
- **State**: Use `useState` for shared state across components (SSR safe).

## Knex (Query Builder)

- **Querying**: `this.knex('table_name').where({ id }).first()`.
- **BaseRepository**: Provides `create`, `update`, `delete` wrappers automatically.
- **Optimized Queries**:
  ```typescript
  // OR condition
  this.knex('users').where({ email }).orWhere({ username }).first();
  ```

* **Migrations (CLI)**:
  - Create: `pnpm --filter @smoothie_store/api exec knex migrate:make migration_name -x ts`
  - Run: `pnpm --filter @smoothie_store/api exec knex migrate:latest`
  - Rollback: `pnpm --filter @smoothie_store/api exec knex migrate:rollback`

## Shared Packages

- **Types**: Pure TS interfaces (`packages/types`).
- **Contracts**: DTOs for API logic (`packages/contracts`).
- _Workflow_: Modify shared package -> `pnpm install` (monorepo link) -> Use in App.
