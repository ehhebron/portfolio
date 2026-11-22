# Portfolio — Design Engineer

Personal portfolio built with React, TypeScript, and Vite.

## Develop

```sh
pnpm install
pnpm dev      # start dev server
pnpm build    # type-check + production build
pnpm lint
```

## Structure

```
src/
  data/
    site.ts        # name, tagline, nav, links, skills
    projects.ts    # case studies + lab experiments
  components/      # one component per page section
  styles/
    tokens.css     # design tokens (color, type, space, motion)
    global.css     # reset, layout, component styles
```

Most content changes only require editing files in `src/data/`.
Project images go in `public/work/` and are referenced via the `image` field.
