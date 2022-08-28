import * as z from "zod";

export const RestSingleBookResponseSchema = z.object({
  author: z.string(),
  cover: z.string(),
  rating: z.string(),
  slug: z.string(),
  synopsis: z.string(),
  title: z.string(),
  upvoted: z.boolean(),
  upvotes: z.number()
});
export type RestSingleBookResponse = z.infer<typeof RestSingleBookResponseSchema>;

export const RestArrayBookResponseSchema = z.object({
  books: z.array(RestSingleBookResponseSchema)
});
export type RestArrayBookResponse = z.infer<typeof RestArrayBookResponseSchema>;
