# Learn NextJS by building a Blog App

This blog app is created using Next.js, and Markdown files as the data source.

The blog posts are stored in `/posts` as Markdown files with front matter support. To create a new blog post, adding a new Markdown file in there.

For creating the blog posts' contents, this project uses [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then pass it to the page as a prop. The each post metadata is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also passed to the page as props.

## How to run

- Install dependencies with

```
npm start
```

- Run the app with

```
npm run dev
```
