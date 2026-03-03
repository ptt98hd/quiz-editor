import { OptionSchema } from "@/types/option";
import z from "zod";

export const QuestionSchema = z
  .object({
    name: z.string().nonempty(),
    description: z.string().optional().nullable(),
    sortOrder: z.coerce.number<number>().nonnegative(),
    options: z.array(OptionSchema).min(2),
    answers: z.array(z.string()).min(1),
  })
  .superRefine((data, ctx) => {
    const { options, answers } = data;
    for (const answer of answers) {
      if (!options.some((opt) => opt.value === answer)) {
        ctx.addIssue({
          code: "custom",
          message: `Answer "${answer}" does not match any option value.`,
        });
      }
    }
  });

export type Question = z.infer<typeof QuestionSchema>;
