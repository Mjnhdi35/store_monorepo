# Coding Standards & Best Practices

## General Rules

1.  **DRY (Don't Repeat Yourself)**: Use Shared Packages (`types`, `contracts`) and Base Classes (`BaseRepository`, `BaseService`) whenever possible.
2.  **Strict Typing**: No `any`. Use specific types or interfaces.
3.  **English Everywhere**: Naming, comments, and commit messages must be in English.

## Naming Conventions

- **Classes**: `PascalCase` (e.g., `UsersService`, `ProductEntity`).
- **Variables/Functions**: `camelCase` (e.g., `findAll`, `userId`).
- **Files**: `kebab-case` (e.g., `users.service.ts`, `create-product.dto.ts`).
- **Databases**: `snake_case` for table names and columns (e.g., `created_at`, `user_id`).

## Project Specifics

### Backend (`apps/api`)

- **Controller**: Should NOT contain business logic. Just validation and mapping.
- **Service**: Must contain ALL business logic.
- **Repository**: Only DB operations. Always return Entities, not raw DB rows (transform `snake_case` -> `camelCase`).
- **DTOs**: Use classes from `@smoothie_store/contracts`.

### Frontend (`apps/web`)

- **Composables**: Use `use` prefix (e.g., `useAuth`). Should handle state (Refs) and side effects.
- **Services**: Stateless classes. Just API calls returning Types.
- **Components**: PascalCase (e.g., `ProductCard.vue`).

### Checksums & Commits

- Lint before commit: `pnpm lint`.
- Format code: `pnpm format`.
