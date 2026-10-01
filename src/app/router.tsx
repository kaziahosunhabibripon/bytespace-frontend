import type { ComponentType } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { RouteError } from "@/features/not-found/RouteError";

/** Code-splits each page: its bundle is only fetched when the route is visited. */
const lazyPage = (load: () => Promise<{ default: ComponentType }>) => async () => ({
  Component: (await load()).default,
});

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { index: true, lazy: lazyPage(() => import("@/features/home/HomePage")) },
      { path: "search", lazy: lazyPage(() => import("@/features/search/SearchPage")) },
      { path: "courses/:id", lazy: lazyPage(() => import("@/features/course-details/CourseDetailsPage")) },
      { path: "courses/:id/:tab", lazy: lazyPage(() => import("@/features/course-details/CourseDetailsPage")) },
      { path: "creators/:id", lazy: lazyPage(() => import("@/features/creator/CreatorPage")) },
      { path: "*", lazy: lazyPage(() => import("@/features/not-found/NotFoundPage")) },
    ],
  },
  { path: "login", lazy: lazyPage(() => import("@/features/auth/LoginPage")), errorElement: <RouteError /> },
  { path: "register", lazy: lazyPage(() => import("@/features/auth/RegisterPage")), errorElement: <RouteError /> },
];

export const createRouter = () => createBrowserRouter(routes);
