import { render, fireEvent } from "@testing-library/react";
import { Action } from "./Action";
import { screen } from "@testing-library/react";

describe("Action", () => {
  const mockTakeAction = jest.fn();

  it("renders the action text", () => {
    render(<Action takeAction={mockTakeAction} />);
    expect(screen.getByText("View")).toBeInTheDocument();
  });

  it("calls takeAction when action is clicked", () => {
    render(<Action takeAction={mockTakeAction} />);
    fireEvent.click(screen.getByText("View"));
    expect(mockTakeAction).toHaveBeenCalled();
  });
});
