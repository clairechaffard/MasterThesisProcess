# Master Thesis Archive

A personal research space for notes, references, visual archives and moodboards.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Push this project to the repository's `main` branch.
3. In `astro.config.mjs`, set `site` to your GitHub Pages URL and `base` to `/<repository-name>` (unless using a `username.github.io` repository).
4. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the source.
5. The included workflow builds and deploys the site on every push to `main`.

## Add content

- Notes: add a `.md` file in `src/content/notes/`
- References: add a `.md` file in `src/content/references/`
- Moodboards: add a `.md` file in `src/content/moodboards/`
- Images: place image files in `public/images/` and refer to them with `/images/filename.jpg`

Each Markdown file needs frontmatter. See the example files.

## Customize

Edit `src/styles/global.css`, the navigation in `src/components/Navigation.astro`, and the homepage in `src/pages/index.astro`.
