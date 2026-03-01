import { QuestionSchema } from '@/types/question';
import z from 'zod';

export const QuizSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  questions: z.array(QuestionSchema).min(1),
});

export type Quiz = z.infer<typeof QuizSchema>;
