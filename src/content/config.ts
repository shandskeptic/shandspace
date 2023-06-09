// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
schema: z.object({
	title: z.string().max(60, "For optimize SEO, provide a title of 60 ch or less"),
	date: z.date(),
	description: z.string().max(160, "For optimize SEO, provide a title of 160 ch or less"),
	author: z.enum(["John Doe"]),
	draft: z.boolean().optional(),
	heroImage: z.object({
		url: z.string().optional(),
		alt: z.string().optional(),
	}),
}),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = { blog };