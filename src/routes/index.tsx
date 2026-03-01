import { Layout } from '@/layouts/layout';
import { HomePage } from '@/pages/Home.page';
import { createBrowserRouter, type RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
