# Smoothie Store

## Overview

This project is a monorepo for the Smoothie Store e-commerce platform. It contains a backend API and a frontend web application.

## Documentation

- [Setup Guide](./SETUP.md) - Instructions for setting up and running the project locally.
- [Architecture](./ARCHITECTURE.md) - Details about the tech stack and system design.
- [Frontend Guide](./FRONTEND.md) - Nuxt 4 structure, routing, and UI system.
- [Backend/Database](./DATABASE.md) - Database schema and Knex usage.
- [Developer Guide](./DEVELOPER.md) - Onboarding and workflow.
- [Status & Roadmap](./APP_STATUS.md) - Completed features and future plans.

## Project Structure

- `apps/api` - NestJS backend application.
- `apps/web` - Nuxt 4 frontend application.

## CI/CD

This project uses GitHub Actions for continuous integration:

- `.github/workflows/api-ci.yml`: Runs on changes to `apps/api`.
- `.github/workflows/web-ci.yml`: Runs on changes to `apps/web`.
