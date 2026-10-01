import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// jsdom has no ResizeObserver; Stage uses it to scale the design canvas.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver;

// jsdom ships its own AbortSignal, which Node's fetch `Request` refuses. React Router's data router passes
// one when it starts a navigation, so drop it here: the tests never abort a navigation.
const NativeRequest = globalThis.Request;
class RequestWithoutSignal extends NativeRequest {
  constructor(input: RequestInfo | URL, init?: RequestInit) {
    if (init?.signal) {
      const rest: RequestInit = { ...init };
      delete rest.signal;
      super(input, rest);
    } else {
      super(input, init);
    }
  }
}
globalThis.Request = RequestWithoutSignal as typeof Request;

// React Router's <ScrollRestoration> calls window.scrollTo, which jsdom only stubs with a console error.
window.scrollTo = () => {};

afterEach(() => cleanup());
