import { z } from "zod";

export const formSchema = z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),
  image: z.coerce.string(),
  releaseYear: z.coerce
    .number({
      invalid_type_error: "Please input the Release Year",
    })
    .gte(1980)
    .lte(2021),
  price: z.coerce
    .number({
      invalid_type_error: "Please input the Price",
    })
    .gte(1000, { message: "Price must be greater than or equal to 1000" })
    .lte(500000, { message: "Price must be greater than or equal to 500000" }),
  totalPage: z.coerce.number({
    invalid_type_error: "Please input the Total Pages",
  }),
  category: z.coerce.string(),
});
