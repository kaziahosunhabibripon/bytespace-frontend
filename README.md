# ByteSpace — Frontend

> Assessment project for **Doin Tech Limited** — Jr. Software Engineer (Frontend)

Live demo: _coming soon (Vercel)_

---

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **React Router v6** (client-side routing, code-splitting)
- **CSS Modules** (scoped styling)
- **Satoshi** font (custom)

---

## 📄 Pages

| Page | Route |
|---|---|
| Landing Page | `/` |
| Search | `/search` |
| Course Details | `/courses/:id` |
| Creator Profile | `/creators/:id` |
| Login *(bonus)* | `/login` |
| Register *(bonus)* | `/register` |

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## 🔎 Search, filter and sort

`/search` reads every filter from the URL, so any result set is shareable and survives a reload.

| Control | URL param | Behaviour |
|---|---|---|
| Search box | `?q=` | Matches the title, creator, level **or** category. Title hits rank first |
| Category chips | `?category=` | Exact category match |
| Level dropdown | `?level=` | Beginner / Intermediate / Advanced |
| Sort dropdown | `?sort=` | Most relevant / Highest rated / Price low→high / Price high→low |
| Pagination | `?page=` | 18 courses per page |
| Filter button | — | Clears the text, category and level at once |

The same `Level` and `Sort` dropdowns work on the creator profile. Changing any filter returns
to page 1. All of the matching and ordering logic lives in `src/lib/courses.ts` and is unit tested;
the UI only sends a `CourseQuery`.

---

## 🧩 Structure

```
src/
  components/ui/       design-system primitives (Button, Chip, Dropdown, Heading, Tabs, ...)
  components/layout/   Nav, Footer, PageHero, GridSection, Stage/Abs (the 1440px Figma canvas)
  components/course/   CourseCard, CourseList, FilterBar
  features/            one folder per page
  data/                all copy and lists; components only map over these
  services/            CourseRepository interface + mock implementation
  lib/                 pure logic (filtering, sorting, pagination) with unit tests
  styles/              design tokens as CSS variables
```

Content, layout and copy are all arrays in `src/data`, so adding a course, a chip or a nav link
never requires touching a component.

---

## ✅ Tests & checks

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint (typescript-eslint, react-hooks, jsx-a11y)
npm test            # 37 unit + component tests
npm run build       # typecheck + production bundle
```

---

## 🌿 Git Workflow

- `main` → base branch
- `feat/bytespace-landing-page` → the implementation, submitted through a Pull Request

---

## 📦 Deployment

Deployed on **Vercel** (see the submission notes for the live URL). `vercel.json` pins the
framework preset and adds the SPA rewrite so deep links like `/courses/1/reviews` work on refresh.

---

## 📝 Notes for the reviewer

- The design is implemented with **Satoshi** (body) and **Poppins** (headings), self-hosted.
- Sections drawn on the 1440px Figma canvas (hero, growth band, CTA) scale down on narrow screens
  via `Stage` + `Abs`; the rest is fluid.
- Login and register validate the form and route onwards, but there is no backend yet, so they do
  not authenticate. Wiring a real API only means implementing the `CourseRepository` interface.
- Only one course-detail text exists in the design, so every course renders that copy.
