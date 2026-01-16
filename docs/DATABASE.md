# Database Guide

This project uses **PostgreSQL** as the relational database and **Knex.js** as the query builder.

## 🐘 PostgreSQL

The database is invoked via Docker Compose.

- **Service Name**: `postgres`
- **Port**: `5432`
- **Default Config**:
  - User: `user`
  - Password: `password`
  - DB: `db`

## 🔧 Knex.js

Knex is a SQL query builder for Node.js. It allows writing queries in a JavaScript-fluent API.

### Configuration

The configuration is located in `apps/api/knexfile.ts`. It loads environment variables from `.env`.

### Common Patterns

#### Select

```typescript
this.knex('table_name').select('*').where({ id: 1 });
```

#### Insert

```typescript
this.knex('table_name').insert({ name: 'Item', price: 10 }).returning('*');
```

#### Update

```typescript
this.knex('table_name').where({ id: 1 }).update({ price: 12 });
```

## 📦 Migrations

Migrations are managed with Knex CLI (via pnpm scripts).

### Create a Migration

To create a new migration file:

```bash
pnpm --filter @smoothie_store/api exec knex migrate:make migration_name -x ts
```

### Run Migrations

To apply the latest changes to the database:

```bash
pnpm --filter @smoothie_store/api exec knex migrate:latest
```

### Rollback

To undo the last batch of migrations:

```bash
pnpm --filter @smoothie_store/api exec knex migrate:rollback
```

## 📝 Schema Example (Products)

The `products` table was created with the following schema:

```typescript
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('price').notNullable();
  });
}
```
