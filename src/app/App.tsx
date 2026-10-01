import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { CourseRepositoryProvider } from "@/services/CourseRepositoryContext";
import { createRouter } from "./router";

export function App() {
  // Created once per mount so hot reloads and tests never share router state.
  const [router] = useState(createRouter);
  return (
    <CourseRepositoryProvider>
      <RouterProvider router={router} />
    </CourseRepositoryProvider>
  );
}
