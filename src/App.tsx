import { QuizProvider } from "@/components/quiz-provider/quiz-provider";
import { router } from "@/routes";
import { RouterProvider } from "react-router";

function App() {
  return (
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  );
}

export default App;
