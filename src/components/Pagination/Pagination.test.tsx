import { render, fireEvent, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  const mockSelectNumber = jest.fn();

  it("renders the correct number of buttons", () => {
    const pages = 5;
    render(
      <Pagination
        pages={pages}
        selectNumber={mockSelectNumber}
        currentPage={1}
      />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(pages);
  });

  it("calls selectNumber with the correct number when a button is clicked", () => {
    const pages = 5;
    render(
      <Pagination
        pages={pages}
        selectNumber={mockSelectNumber}
        currentPage={1}
      />
    );
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[2]);
    expect(mockSelectNumber).toHaveBeenCalledWith(3);
  });

  it("renders the current page with the 'active' class", () => {
    const pages = 5;
    const currentPage = 3;
    render(
      <Pagination
        pages={pages}
        selectNumber={mockSelectNumber}
        currentPage={currentPage}
      />
    );
    const activeButton = screen.getByTestId("active");
    expect(activeButton).toHaveClass("active");
    expect(activeButton.textContent).toBe(currentPage.toString());
  });
});
