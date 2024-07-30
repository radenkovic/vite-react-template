import { it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "@/App";

it("Increases the count", async () => {
  render(<App name="Tester" />);
  fireEvent.click(screen.getByRole("button"));
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button", { name: /count is 2/ }));
});

it("Renders the name", async () => {
  render(<App name="Test App" />);
  expect(screen.getByText("Test App"));
});
