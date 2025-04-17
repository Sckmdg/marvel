import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Main, ErrorPage } from 'pages';
import { Layout } from 'components';

const router = createBrowserRouter([
  {
    path:         '/',
    element:      <Layout />,
    errorElement: <ErrorPage />,
    children:     [
      {
        index:   true,
        path:    '/',
        element: <Main />,
      },
      {
        index:   true,
        path:    '/marvel/',
        element: <Main />,
      },
      {
        index:   true,
        path:    '/marvel/all',
        element: <Main />,
      },
      {
        index:   true,
        path:    '/marvel/comic',
        element: <Main />,
      },
      {
        index:   true,
        path:    '/marvel/magazine',
        element: <Main />,
      },
      {
        index:   true,
        path:    '/marvel/digital',
        element: <Main />,
      },
    ],
  },
]);

const App = () => (
    <RouterProvider router={router} />
);

export default App;
