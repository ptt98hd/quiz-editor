import { Layout } from "@/layouts/layout";
import { HomePage } from "@/pages/home.page";
import { QuizEditorPage } from "@/pages/quiz-editor.page";
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
      {
        path: "edit",
        element: <QuizEditorPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
