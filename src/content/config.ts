// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
schema: z.object({
	title: z.string(),
	pubDate: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val)),
	updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
	description: z.string(),
	heroImage: z.string().optional(),
	author: z.enum(["ShanD","Test"]),
	category: z.array(z.string()),
	draft: z.boolean().default(false),
}),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = { blog };