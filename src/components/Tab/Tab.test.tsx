import { render, fireEvent } from "@testing-library/react";
import { Tab } from "./Tab";
import { screen } from "@testing-library/react";

describe("Tab", () => {
  const mockTab = {
    id: "1",
    name: "Tab 1",
    active: true,
    setTab: jest.fn(),
  };

  it("renders the tab name", () => {
    render(<Tab {...mockTab} />);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
  });

  it("sets id when setTab is clicked", () => {
    render(<Tab {...mockTab} />);
    fireEvent.click(screen.getByText("Tab 1"));
    expect(mockTab.id).toBe("1");
  });

  it("adds 'Active' class name when tab is active", () => {
    render(<Tab {...mockTab} />);
    const tabElement = screen.getByTestId("tab-testid");
    expect(tabElement).toHaveClass("Active");
  });
  it("does not add 'Active' class name when tab is not active", () => {
    render(<Tab {...mockTab} active={false} />);
    const tabElement = screen.getByTestId("tab-testid");
    expect(tabElement).not.toHaveClass("Active");
  });
});
