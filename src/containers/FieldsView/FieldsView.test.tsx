import { render, screen } from "@testing-library/react";
import { FieldsView } from "./FieldsView";
import { BrowserRouter as Router } from "react-router-dom";
import { mockData } from "../../mocks";

const mockFields = [
  { id: "1", name: "name" },
  { id: "2", name: "species" },
];

const mockValues = mockData.data.characters.results;

describe("FieldsView", () => {
  it("renders loading state", () => {
    render(
      <Router>
        <FieldsView
          fields={mockFields}
          values={[]}
          loading={true}
          error={null}
        />
      </Router>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders fields", () => {
    render(
      <Router>
        <FieldsView
          fields={mockFields}
          values={mockValues}
          loading={false}
          error={null}
        />
      </Router>
    );

    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getAllByText("Human").length).toBeGreaterThan(1);
  });

  it("renders error message", () => {
    const mockError = { message: "Something went wrong" };
    render(
      <Router>
        <FieldsView
          fields={mockFields}
          values={[]}
          loading={false}
          error={mockError}
        />
      </Router>
    );
    expect(screen.getByText("Error: Something went wrong")).toBeInTheDocument();
  });
});
