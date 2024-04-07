import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

const mocks: MockedResponse[] = [];

test("renders App", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const page = screen.getByTestId("App");
  expect(page).toBeInTheDocument();
});
