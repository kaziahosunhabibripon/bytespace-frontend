import { useEffect, useState, type DependencyList } from "react";

export type AsyncResult<T> =
  | { status: "loading"; data: T | undefined }
  | { status: "ready"; data: T }
  | { status: "error"; error: Error; data: T | undefined };

/**
 * Runs `load` whenever `deps` change. While reloading it keeps the previous data,
 * so lists do not flash empty when the user changes page or filter.
 */
export function useAsync<T>(load: () => Promise<T>, deps: DependencyList): AsyncResult<T> {
  const [state, setState] = useState<AsyncResult<T>>({ status: "loading", data: undefined });

  useEffect(() => {
    let active = true;
    setState((previous) => (previous.status === "loading" ? previous : { status: "loading", data: previous.data }));
    load().then(
      (data) => {
        if (active) setState({ status: "ready", data });
      },
      (reason: unknown) => {
        if (active) {
          const error = reason instanceof Error ? reason : new Error(String(reason));
          setState((previous) => ({ status: "error", error, data: previous.data }));
        }
      },
    );
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- the caller owns the dependency list
  }, deps);

  return state;
}
