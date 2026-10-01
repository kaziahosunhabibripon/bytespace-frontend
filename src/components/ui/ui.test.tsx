import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";
import { Chip } from "./Chip";
import { Pagination } from "./Pagination";
import { Tabs } from "./Tabs";

describe("Button", () => {
  it("renders a button that calls onClick", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Search</Button>);
    await userEvent.click(screen.getByRole("button", { name: "Search" }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders a link when given a route", () => {
    render(
      <MemoryRouter>
        <Button to="/register">Join</Button>
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: "Join" })).toHaveAttribute("href", "/register");
  });
});

describe("Chip", () => {
  it("exposes its selected state to assistive technology", () => {
    render(<Chip selected>Featured</Chip>);
    expect(screen.getByRole("button", { name: "Featured" })).toHaveAttribute("aria-pressed", "true");
  });
});

describe("Pagination", () => {
  it("marks the current page and reports page changes", async () => {
    const onPageChange = vi.fn();
    render(<Pagination page={2} pageCount={3} onPageChange={onPageChange} />);
    expect(screen.getByRole("button", { name: "Page 2" })).toHaveAttribute("aria-current", "page");
    await userEvent.click(screen.getByRole("button", { name: "Next page" }));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("disables the previous button on the first page", () => {
    render(<Pagination page={1} pageCount={3} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
  });
});

describe("Tabs", () => {
  it("shows only the selected panel and switches with the keyboard", async () => {
    const onValueChange = vi.fn();
    render(
      <Tabs value="one" onValueChange={onValueChange}>
        <Tabs.List label="Sections">
          <Tabs.Tab value="one">One</Tabs.Tab>
          <Tabs.Tab value="two">Two</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="one">First panel</Tabs.Panel>
        <Tabs.Panel value="two">Second panel</Tabs.Panel>
      </Tabs>,
    );

    expect(screen.getByText("First panel")).toBeInTheDocument();
    expect(screen.queryByText("Second panel")).not.toBeInTheDocument();

    screen.getByRole("tab", { name: "One" }).focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(onValueChange).toHaveBeenCalledWith("two");
  });
});
