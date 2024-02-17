import { z } from "zod";

export const formSchema = z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),
  image: z.coerce.string(),
  releaseYear: z.coerce.number().gte(1980).lte(2021),
  price: z.coerce.string(),
  totalPage: z.coerce.number(),
  category: z.coerce.string(),
});
