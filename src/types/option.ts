import z from 'zod';

export const OptionSchema = z.object({
  value: z.string().nonempty(),
  label: z.string().nonempty(),
  sortOrder: z.coerce.number<number>().nonnegative(),
});

export type Option = z.infer<typeof OptionSchema>;
