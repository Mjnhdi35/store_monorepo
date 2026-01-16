# Architecture

## Tech Stack

### Backend (`apps/api`)

- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: PostgreSQL
- **Query Builder**: [KnexJS](https://knexjs.org/)

### Frontend (`apps/web`)

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue.js)

## Database Schema

### Products Table

The core entity for the store is the Product.

| Column | Type    | Description           |
| ------ | ------- | --------------------- |
| id     | Integer | Primary Key           |
| name   | String  | Name of the smoothie  |
| price  | Decimal | Price of the smoothie |

## Infrastructure

The project uses Docker Compose to run the PostgreSQL database locally.
