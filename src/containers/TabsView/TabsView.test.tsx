import { render, screen } from "@testing-library/react";
import { TabsView } from "./TabsView";

const mockTabs = [
  { id: "1", name: "Tab 1", active: true },
  { id: "2", name: "Tab 2", active: false },
  { id: "3", name: "Tab 3", active: false },
];

describe("TabsView", () => {
  it("renders tabs correctly", () => {
    render(<TabsView tabs={mockTabs} handleClick={() => {}} />);

    // Assert that all tabs are rendered
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("highlights the active tab", () => {
    render(<TabsView tabs={mockTabs} handleClick={() => {}} />);
    // Assert that the active tab is highlighted
    // eslint-disable-next-line testing-library/no-node-access
    const activeTab = screen.getByText("Tab 1").closest("div");
    expect(activeTab).toHaveClass("Active");
  });

  it("calls handleClick when a tab is clicked", () => {
    const handleClick = jest.fn();
    render(<TabsView tabs={mockTabs} handleClick={handleClick} />);

    // Simulate a click on the first tab
    const tab1 = screen.getByText("Tab 1");
    tab1.click();

    // Assert that handleClick is called with the correct tab id
    expect(handleClick).toHaveBeenCalledWith("1");
  });
});
