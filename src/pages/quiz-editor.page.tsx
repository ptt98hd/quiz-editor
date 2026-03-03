import type { Quiz } from "@/types/quiz";
import { useEffect, useState } from "react";

const createEmptyQuiz = (): Quiz => ({
  name: "",
  description: "",
  questions: [],
});

export function QuizEditorPage() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    // Phase 1: no incoming quiz data yet, always start from an empty quiz.
    setQuiz(createEmptyQuiz());
  }, []);

  if (!quiz) {
    return <div>Loading quiz editor...</div>;
  }

  return (
    <div>
      <h1>Quiz editor</h1>
      <p>Coming soon: form to edit quiz "{quiz.name || "(untitled)"}"</p>
    </div>
  );
}

