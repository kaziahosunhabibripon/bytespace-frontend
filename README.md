<div align="center">

# ByteSpace — Frontend

**Landing page, login and register built from the Figma design**

React 18 · TypeScript · Vite · React Router 6 · CSS Modules

[![Live demo](https://img.shields.io/badge/live%20demo-ByteSpace-blue)](https://bytespace-frontend-sable.vercel.app)
[![Tests](https://img.shields.io/badge/tests-37%20passing-brightgreen)](https://github.com/kaziahosunhabibripon/bytespace-frontend)
[![PR](https://img.shields.io/badge/PR-2%20merged-purple)](https://github.com/kaziahosunhabibripon/bytespace-frontend/pull/2)

**Live:** <https://bytespace-frontend-sable.vercel.app>

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Architecture](#architecture)
- [Data Flow](#data-flow)
- [Search, Filter and Sort](#search-filter-and-sort)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [Quality Checks](#quality-checks)
- [Git Workflow](#git-workflow)
- [Deployment](#deployment)
- [Reviewer Notes](#reviewer-notes)

---

## Overview

A front-end implementation of the **ByteSpace "New"** Figma design — an online course marketplace.
The landing page is the required deliverable; login and register are the bonus pages. Search,
course details, creator profile and a 404 route are included to show the patterns being reused
across pages.

The project is written to be **data-driven** and **reusable**: no copy, list or layout constant is
hard-coded in a component, and every page is assembled from the same small set of primitives.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| UI | React 18 + TypeScript (strict) | typed domain model end to end |
| Build | Vite 5 | fast builds, native ESM |
| Routing | React Router 6 | lazy, code-split routes |
| Styling | CSS Modules | scoped styles, zero runtime |
| Fonts | Satoshi + Poppins | self-hosted, no external requests |
| Tests | Vitest + Testing Library | 37 unit and component tests |
| Lint | ESLint | `typescript-eslint`, `react-hooks`, `jsx-a11y` |

---

## Pages

| Page | Route | Status |
|---|---|---|
| Landing | `/` | required |
| Login | `/login` | bonus |
| Register | `/register` | bonus |
| Search | `/search` | extra |
| Course details — About / Lessons / Reviews | `/courses/:id` · `/courses/:id/:tab` | extra |
| Creator profile | `/creators/:id` | extra |
| Not found | `*` | extra |

---

## Architecture

Dependencies point in one direction only — `features` may use `components`, `components` may use
`ui`, and nothing lower ever imports a higher layer.

```mermaid
graph TD
    subgraph app["app — router and shell"]
        Router["router.tsx<br/>lazy routes"]
        App["App.tsx<br/>providers"]
    end

    subgraph features["features — one folder per page"]
        Home["HomePage"]
        Auth["LoginPage / RegisterPage"]
        Search["SearchPage"]
        Details["CourseDetailsPage"]
        Creator["CreatorPage"]
        NF["NotFoundPage"]
    end

    subgraph components["components — reusable pieces"]
        Layout["layout<br/>Nav · Footer · Stage · Abs"]
        Course["course<br/>CourseCard · CourseList · FilterBar"]
        Cards["cards<br/>Progress · Tag · HappyStudents"]
        UI["ui<br/>Button · Chip · Dropdown · Tabs"]
    end

    subgraph services["services — data access"]
        Repo["CourseRepository<br/>interface"]
        Mock["mockCourseRepository"]
    end

    subgraph lib["lib — pure logic"]
        Courses["courses.ts<br/>match · sort"]
        Paging["pagination.ts"]
        Paths["paths.ts"]
    end

    Data["data — copy, lists, layout"]
    Types["types — domain model"]

    Router --> Home & Auth & Search & Details & Creator & NF
    Home --> Layout & Cards & UI
    Home --> Repo
    Search --> Course & Repo
    Search --> lib
    Creator --> Course & Repo
    Details --> UI
    Course --> UI
    Repo -.implemented by.-> Mock
    Mock --> Courses & Paging
    features --> Data
    Repo & lib & Data & UI -.typed by.-> Types

    classDef layer fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
    classDef data fill:#f0fdf4,stroke:#16a34a,color:#14532d
    class Router,App,Home,Auth,Search,Details,Creator,NF,Layout,Course,Cards,UI layer
    class Repo,Mock,Courses,Paging,Paths,Data,Types data
```

### Layer responsibilities

| Layer | May know about | Must not know about |
|---|---|---|
| `features/` | components, services, lib, data | — |
| `components/ui/` | only itself | the domain, routing, data |
| `services/` | lib, types | React components |
| `lib/` | types | React, services, data |
| `data/` | types | everything else |

### Data-driven by design

Copy, lists and layout constants live in `src/data` as arrays. Components only map over them, so
adding a course, a nav link or a testimonial never requires touching a component.

```mermaid
flowchart LR
    S1["data/site.ts<br/>navLinks"] --> Nav["layout/Nav"]
    S2["data/floatingCards.ts"] --> Cards["cards/*"]
    S3["data/courses.ts"] --> CC["course/CourseCard"]
    S4["data/taxonomy.ts"] --> DD["ui/Dropdown"]

    style S1 fill:#f0fdf4,stroke:#16a34a,color:#14532d
    style S2 fill:#f0fdf4,stroke:#16a34a,color:#14532d
    style S3 fill:#f0fdf4,stroke:#16a34a,color:#14532d
    style S4 fill:#f0fdf4,stroke:#16a34a,color:#14532d
    style Nav fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
    style Cards fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
    style CC fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
    style DD fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
```

---

## Data Flow

Features never import the mock directly. They depend on the `CourseRepository` interface, provided
through React context — so swapping in a real API touches one file.

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant SP as SearchPage
    participant H as useCourseSearch
    participant R as CourseRepository
    participant M as mockCourseRepository
    participant L as lib/courses.ts

    U->>SP: types a query
    SP->>SP: write it to the URL
    SP->>H: new query
    H->>R: search
    R->>M: implementation
    M->>L: filterCourses and sort
    L-->>M: Course array
    M-->>R: one page of courses
    R-->>H: Page of courses
    H-->>SP: status ready with data
    SP-->>U: re-rendered grid

    Note over SP,L: swapping in HTTP means<br/>implementing CourseRepository only
```

`useAsync` keeps the previous page on screen while a new one loads, so the grid never flashes empty.

---

## Search, Filter and Sort

Every filter on `/search` lives in the URL, so any result set is shareable and survives a reload.

| Control | Param | Behaviour |
|---|---|---|
| Search box | `?q=` | Matches title, creator, level **or** category; title hits rank first |
| Category chips | `?category=` | Exact category match |
| Level dropdown | `?level=` | Beginner / Intermediate / Advanced |
| Sort dropdown | `?sort=` | Most relevant / Highest rated / Price low→high / Price high→low |
| Pagination | `?page=` | 18 courses per page |
| Filter button | — | Clears text, category and level at once |

Changing any filter returns to page 1. `Level` and `Sort` also work on the creator profile.

```mermaid
flowchart TD
    Q["CourseQuery<br/>text · category · level · sort · page"]
    Q --> M{"matchesQuery"}
    M -->|no match| Out["filtered out"]
    M -->|match| R["relevance()<br/>title 3 over category 2 over creator 1"]
    R --> S["comparators by sort"]
    S --> P["paginate()"]
    P --> Grid["CourseList"]

    style Q fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
    style M fill:#fffbeb,stroke:#d97706,color:#78350f
    style Out fill:#fef2f2,stroke:#dc2626,color:#7f1d1d
    style R fill:#f0fdf4,stroke:#16a34a,color:#14532d
    style S fill:#f0fdf4,stroke:#16a34a,color:#14532d
    style P fill:#f0fdf4,stroke:#16a34a,color:#14532d
    style Grid fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
```

All matching and ordering lives in `src/lib/courses.ts` as pure functions, so it is tested without
React.

---

## Design System

Figma values are extracted into CSS variables in `src/styles/tokens.css` and consumed everywhere
else — no hard-coded colours or spacing in components.

| Token | Value | Used for |
|---|---|---|
| `--color-blue` | `#003BE2` | Primary actions, brand |
| `--color-lime` | `#D4FB20` | Highlights, selected states |
| `--color-ink` | `#040819` | Headings |
| `--color-text-subtle` | `#82868E` | Secondary text |
| `--container-width` | `1200px` | Content width |
| `--design-width` | `1440px` | Figma canvas width |

### Responsive strategy

Sections drawn on the 1440px Figma canvas use `Stage` + `Abs`: children are positioned in design
pixels and the whole canvas scales down on narrow screens, so those frames keep their proportions.
Everything else is fluid.

```mermaid
flowchart LR
    W{"viewport width"}
    W -->|wider than 980| Abs["Stage and Abs<br/>design pixels, scaled"]
    W -->|980 and below| Fluid["Fluid CSS<br/>stacked, auto height"]
    Abs --> Both["Same components,<br/>same DOM"]
    Fluid --> Both

    style W fill:#fffbeb,stroke:#d97706,color:#78350f
    style Abs fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
    style Fluid fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
    style Both fill:#f0fdf4,stroke:#16a34a,color:#14532d
```

---

## Getting Started

Requires Node 18+.

```bash
npm install
npm run dev          # http://localhost:5173
```

| Script | Purpose |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck + production bundle |
| `npm run preview` | Serve the production build locally |
| `npm test` | Vitest, single run |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format` | Prettier |

No environment variables are required — the app is fully static.

---

## Quality Checks

```bash
npm run typecheck   # tsc --noEmit, strict
npm run lint        # typescript-eslint, react-hooks, jsx-a11y
npm test            # 37 unit + component tests
npm run build       # typecheck + production bundle
```

All four pass, and **every commit in the history builds on its own** — each was verified with
`npm run build` in isolation.

Coverage includes the filtering and sorting rules, pagination, URL parsing, the route table, the
repository contract and the UI primitives.

---

## Git Workflow

Work was developed on a feature branch and merged through a Pull Request rather than committed
straight to `main`.

```mermaid
gitGraph
    commit id: "chore: initialize ByteSpace project"
    branch feat/bytespace-landing-page
    commit id: "feat: add design tokens, assets, types and UI primitives"
    commit id: "feat: add layout primitives, shapes and course components"
    commit id: "feat: add the course repository and pure search logic"
    commit id: "feat: build the landing page and app shell"
    commit id: "feat: add login, register, search and profile pages"
    commit id: "fix(search): make search, filters and sort actually work"
    commit id: "docs: document the architecture with Mermaid diagrams"
    checkout main
    commit id: "squash merge (#2)"
```

| Branch | Purpose |
|---|---|
| `main` | Scaffold base, receives merged work |
| `feat/bytespace-landing-page` | The implementation |

---

## Deployment

Live at <https://bytespace-frontend-sable.vercel.app>, connected to the `main` branch so every merge
rebuilds automatically.

`vercel.json` pins the framework preset and adds the SPA rewrite, so deep links such as
`/courses/1/reviews` survive a page refresh:

```json
"rewrites": [{ "source": "/((?!assets/|fonts/|img/).*)", "destination": "/index.html" }]
```

Routes are also code-split with `React.lazy`, so the landing page does not download the code for
course details or the creator profile.

---

## Reviewer Notes

- **Fonts and assets** are the originals from the Figma file — photos, avatars, logos and 3D shapes
  are served from `public/`.
- **Icons** were redrawn as a single SVG registry (`components/ui/Icon.tsx`) because Figma's vector
  data is not retrievable without a Figma login. Every icon inherits `currentColor`.
- **Login and register** validate the form and route onwards, but there is no backend yet, so they
  do not authenticate. Wiring a real API means implementing `CourseRepository` — no component
  changes.
- **Course data** is generated from seeds in `src/data/courses.ts`; the design provides one
  course-detail text, so every course renders that copy.
- **A few Figma frames are internally inconsistent** (the Lessons tab starts 17px lower than About;
  the first testimonial is set tighter than the other two). Those quirks are kept deliberately and
  expressed as data or small variants rather than magic numbers.