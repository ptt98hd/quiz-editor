import { Layout } from "@/layouts/layout";
import { HomePage } from "@/pages/home.page";
import { QuizListPage } from "@/pages/quiz-list.page";
import { createBrowserRouter, type RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "list",
        element: <QuizListPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
