import React from "react";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ListPage } from "./pages/ListPage/ListPage";
import { ErrorBoundary } from "react-error-boundary";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import styles from "./App.module.scss";

const ErrorBoundaryLayout = () => (
  <ErrorBoundary FallbackComponent={ErrorPage}>
    <Outlet />
  </ErrorBoundary>
);

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: "/",
        element: <ListPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <div data-testid="App" className={styles.App}>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
        </ApolloProvider>
      </React.StrictMode>
    </div>
  );
};
