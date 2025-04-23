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
        path:    '/marvel',
        element: <Main />,
        children: [
          {
            index: true,
            path:    'all',
            element: <Main />,
          },
          {
            index: true,
            path:    'comic',
            element: <Main />,
          },
          {
            index: true,
            path:    'magazine',
            element: <Main />,
          },
          {
            index: true,
            path:    'digital',
            element: <Main />,
          },
        ]
      },
    ],
  },
]);

const App = () => (
    <RouterProvider router={router} />
);

export default App;
