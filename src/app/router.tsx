import type { ComponentType } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

/** Code-splits each page: its bundle is only fetched when the route is visited. */
const lazyPage = (load: () => Promise<{ default: ComponentType }>) => async () => ({
  Component: (await load()).default,
});

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [{ index: true, lazy: lazyPage(() => import("@/features/home/HomePage")) }],
  },
];

export const createRouter = () => createBrowserRouter(routes);
