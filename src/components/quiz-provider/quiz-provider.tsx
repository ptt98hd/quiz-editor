import { getQuizList } from "@/services/quiz.service";
import type { Quiz } from "@/types/quiz";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type PropsWithChildren,
} from "react";

type QuizsContext = {
  quizs: Quiz[];
  setQuizs: Dispatch<React.SetStateAction<Quiz[]>>;
};

const quizsContext = createContext<QuizsContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useQuizsContext() {
  const context = useContext(quizsContext);
  if (!context) {
    throw new Error("useQuizsContext must be used within a QuizProvider");
  }
  return context;
}

type QuizsProviderProps = PropsWithChildren;

export function QuizProvider({ children }: QuizsProviderProps) {
  const [quizs, setQuizs] = useState<Quiz[]>([]);

  useEffect(() => {
    getQuizList().then((quizs) => setQuizs(quizs));
  }, []);

  return (
    <quizsContext.Provider value={{ quizs, setQuizs }}>
      {children}
    </quizsContext.Provider>
  );
}
