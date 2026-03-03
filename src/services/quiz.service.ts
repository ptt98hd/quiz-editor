import type { Option } from "@/types/option";
import type { Question } from "@/types/question";
import type { Quiz } from "@/types/quiz";

export async function getQuizList() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return Array.from({ length: 4 }).map<Quiz>((_, index) => {
    const questions: Question[] = Array.from({ length: 8 }).map<Question>(
      (_, index) => {
        const options = Array.from({ length: 4 }).map<Option>((_, index) => {
          return {
            label: `Option ${index + 1}`,
            value: `option-${index + 1}`,
            sortOrder: index,
          };
        });

        return {
          name: `Question ${index + 1}`,
          description: `Question description ${index + 1}`,
          sortOrder: index,
          options,
          answers: [],
        };
      },
    );

    return {
      name: `Quiz name ${index + 1}`,
      description: `Quiz description ${index + 1}`,
      questions,
    };
  });
}
