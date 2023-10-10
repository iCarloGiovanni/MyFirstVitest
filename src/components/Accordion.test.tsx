import Accordion from "./Accordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="Hello">
        <p>Some Content</p>
      </Accordion>
    );
  });

  test("Should show the accordion component ", () => {
    expect(screen.getByText("Hello")).toBeDefined();
  });

  test("Should show title all the time", () => {
    expect(screen.getByText("Hello")).toBeDefined();
  });

  test("should not show content at start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test("should show the content when title is clicked", () => {
    const button = screen.getByText('+');
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test("should hide the content when title is clicked", () => {
    const button = screen.getByText('+');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
