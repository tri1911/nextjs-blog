import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

/**
 * LoadMDX takes a `slug` parameter and return the MDX module
 *
 * WARNING: This only works in SSG scenario (maybe SSR but not sure)
 * and the slug must be returned from loadSlugs.
 *
 * - there's dynamic `import` since Node 13.2 but it returns `Promise<Module>`
 *   - it requires `React.lazy` + `Suspense`
 *   - since we don't worry about compile time in SSG, we can use synchronous
 *   `require` to dynamically load the module
 */
export function LoadMDX(slug: string) {
  // NOTE: This doesn't seem to break live-reload in dev
  return require(`./${slug}.mdx`).default;
}

export function loadSlugs() {
  // Extract the path `/posts/mdx` from `import.meta.url`
  const parsed = path.parse(fileURLToPath(import.meta.url));

  // Read all the files inside `/posts/mdx`
  const files = fs.readdirSync(parsed.dir);

  // Filter only the files ending in `.mdx` and only keep the name
  const mdxFileNames = files
    .filter((f) => /\.mdx$/.test(f))
    .map((fileName) => path.parse(fileName).name);

  return mdxFileNames;
}
