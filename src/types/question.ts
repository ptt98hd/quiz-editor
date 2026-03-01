import { OptionSchema } from '@/types/option';
import z from 'zod';

export const QuestionSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  sortOrder: z.coerce.number<number>().nonnegative(),
  options: z.array(OptionSchema).min(2),
});

export type Question = z.infer<typeof QuestionSchema>;
