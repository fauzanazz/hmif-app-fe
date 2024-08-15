import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';

function isGreater(date1: string, date2: string): boolean {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  console.log(firstDate);
  console.log(secondDate);
  console.log(firstDate > secondDate);
  return firstDate > secondDate;
}

export const eventSchema = z
  .object({
    calendarGroupId: z.string().min(1, { message: 'Choose a valid group' }),
    courseId: z.string().min(1, { message: 'Choose a valid course' }),
    title: z
      .string()
      .min(1, { message: "Headline can't be empty" })
      .max(50, { message: "Headline can't be longer than 50 characters" }),
    description: z.string().optional(),
    category: z.string().min(1, { message: 'Choose a valid category' }),
    start: z.string(),
    end: z.string(),
  })
  .refine((data) => isGreater(data.end, data.start), {
    message: 'End date must be greater than the start date.',
    path: ['end'],
  });

export type ComponentProps = {
  form: UseFormReturn<EventSchema>;
};

export type EventSchema = z.infer<typeof eventSchema>;