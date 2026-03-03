import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/card/card";
import { useQuizsContext } from "@/components/quiz-provider/quiz-provider";
import "./quiz-list.page.css";

export function QuizListPage() {
  const { quizs } = useQuizsContext();
  return (
    <div className="content">
      <div className="list">
        {quizs.map((quiz, index) => (
          <Card key={index}>
            <CardContent>
              <CardTitle>{quiz.name}</CardTitle>
              <CardDescription>{quiz.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
