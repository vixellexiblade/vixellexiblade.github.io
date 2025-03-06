import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/collections/blog"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    editDate: z.date().nullish()
  })
})

export const collections = { blog };
