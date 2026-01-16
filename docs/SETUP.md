# Setup Guide

## Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/) & Docker Compose

## Getting Started

### 1. Install Dependencies

Run the following command in the root directory:

```bash
pnpm install
```

### 2. Start Database

Start the PostgreSQL container:

```bash
docker-compose up -d
```

### 3. Running the Applications

#### Backend (API)

1.  **Configure Environment**:
    The `.env` file should be auto-created or copy from `.env.example`:

    ```bash
    cp apps/api/.env.example apps/api/.env
    ```

2.  **Run Migrations**:

    ```bash
    pnpm --filter @smoothie_store/api exec knex migrate:latest
    ```

3.  **Start Server**:
    ```bash
    pnpm start:api
    ```

#### Frontend (Web)

```bash
pnpm start:web
```

## Testing & Verification

- **API Tests**: `pnpm --filter @smoothie_store/api test`
- **E2E Tests**: `pnpm --filter @smoothie_store/api test:e2e`
