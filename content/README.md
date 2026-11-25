# Posts

News and blog posts are Markdown files. Add one and it shows up on the site automatically
(list pages, the home page sections and its own page at `/news/<slug>` or `/blog/<slug>`).

Create a post:

    npm run new:news -- "Title of the news item"
    npm run new:blog -- "Title of the blog post"

Or copy any existing `.md` file in `content/news` or `content/blog`.

Top-of-file fields: `title`, `date` (YYYY-MM-DD), `category`, `excerpt`, and optionally
`source` (news), `image` (optional, a file under `public/`; no image is shown if omitted), `draft: true`.
The text below the second `---` is the post, in Markdown (headings, lists, tables, links, images).
