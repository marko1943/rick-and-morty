import React from "react";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ListPage } from "./pages/ListPage/ListPage";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./App.module.scss";

const ErrorBoundaryLayout = () => (
  <ErrorBoundary FallbackComponent={ErrorPage}>
    <Outlet />
  </ErrorBoundary>
);

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: "/",
        element: <ListPage />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <div data-testid="App" className={styles.App}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};
