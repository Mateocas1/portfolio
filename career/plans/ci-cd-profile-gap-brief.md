# CI/CD Profile Gap Brief

## Decision

Use **GitHub Actions CI/CD** as a real, defensible career signal only where it is implemented and verifiable.

## Why this gap matters

The target CV positioning is traditional and transferable:

- TypeScript
- React / Next.js
- Node.js
- SQL / PostgreSQL
- Testing
- Debugging
- Git / GitHub
- CI/CD

Right now, **Mena Nails / `Mateocas1/test-kimi` already proves CI/CD strongly**, but `ofertaSUPER` and `invent-stock` need small validation workflows before the claim can be used broadly.

## Current evidence

| Project | Repo | Current CI/CD evidence | Safe claim today |
| --- | --- | --- | --- |
| Mena Nails | `Mateocas1/test-kimi` | `.github/workflows/ci.yml` with lint, type check, Vitest, Playwright and Vercel deploy gate | GitHub Actions CI/CD, automated tests, E2E checks |
| ofertasSUPER | `Mateocas1/ofertaSUPER` | Scripts exist for `build`, `test`, `lint`, `typecheck`; no workflow verified | Testing, linting, type checking, data/audit scripts |
| InventStock | `Mateocas1/invent-stock` | Scripts exist for `build`, `lint`, `typecheck`, `format:check`, `test:smoke`; no workflow verified | Backend quality checks, smoke tests, TypeScript validation |

## Target improvement

Add MVP GitHub Actions workflows to:

1. `Mateocas1/ofertaSUPER`
2. `Mateocas1/invent-stock`

This closes the CV/profile gap without pretending the projects have enterprise-grade deployment pipelines.

## CV-safe wording after implementation

English:

> Built full-stack and backend projects with TypeScript, React/Next.js, Node.js, SQL, automated tests, linting, type checking, and GitHub Actions CI workflows.

Spanish:

> Desarrollé proyectos full-stack y backend con TypeScript, React/Next.js, Node.js, SQL, tests automatizados, linting, type checking y workflows de CI con GitHub Actions.

## What not to claim

- Do not claim “production-grade CI/CD” unless deploy, rollback, environment gates and monitoring are truly implemented.
- Do not claim “CI/CD across all projects” unless every featured project has a working workflow.
- Do not claim “all tests pass” unless checked on the current commit.
- Do not claim “full deployment automation” for repos that only run validation workflows.

## Recommended order

1. Add CI MVP to `ofertaSUPER`.
2. Add CI MVP to `invent-stock`.
3. Run each workflow on GitHub and confirm green checks.
4. Update CV wording only after both workflows are merged and passing.
