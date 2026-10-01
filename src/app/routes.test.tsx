import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { routes } from "@/app/router";
import { CourseRepositoryProvider } from "@/services/CourseRepositoryContext";

// The first visit to a route loads its code-split chunk, which can take a while on a cold test run.
const slow = { timeout: 10_000 };
const NOT_FOUND = /The page you are looking/;

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  return render(
    <CourseRepositoryProvider>
      <RouterProvider router={router} />
    </CourseRepositoryProvider>,
  );
}

describe("routes", () => {
  it("renders the home page", { timeout: 20_000 }, async () => {
    renderAt("/");
    expect(await screen.findByRole("heading", { level: 1, name: /Get Access to Hundreds/ }, slow)).toBeInTheDocument();
  });

  it("renders the search page and lists courses", { timeout: 20_000 }, async () => {
    renderAt("/search");
    expect(await screen.findByRole("heading", { level: 1, name: "Find Your Next Course" }, slow)).toBeInTheDocument();
    expect((await screen.findAllByRole("link", { name: /Learn Figma from Basic/ }, slow)).length).toBeGreaterThan(0);
  });

  it("renders a course with its tabs", { timeout: 20_000 }, async () => {
    renderAt("/courses/2/reviews");
    expect(await screen.findByRole("tab", { name: "Reviews", selected: true }, slow)).toBeInTheDocument();
    expect(await screen.findByText("Individual Reviews:", {}, slow)).toBeInTheDocument();
  });

  it("falls back to the not-found page for unknown urls", { timeout: 20_000 }, async () => {
    renderAt("/definitely-not-a-page");
    expect(await screen.findByRole("heading", { level: 1, name: NOT_FOUND }, slow)).toBeInTheDocument();
  });

  it("shows not-found for an unknown course tab", { timeout: 20_000 }, async () => {
    renderAt("/courses/2/unknown");
    expect(await screen.findByRole("heading", { level: 1, name: NOT_FOUND }, slow)).toBeInTheDocument();
  });
});
