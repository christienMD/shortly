import { z } from "zod";

export const urlSchema = z.object({
  url: z
    .string()
    .min(1, { message: "Please add a link" })
    .url({ message: "Please enter a valid URL" })
});

export type UrlFormData = z.infer<typeof urlSchema>;