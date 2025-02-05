# Nuxt Content V3 on Serverless

This is a demo of deploying [Nuxt Content v3](https://content.nuxt.com) on different serverless platform:
- Vercel: https://content-v3-demo.vercel.app
- Netlify: https://content-v3-demo.netlify.app

As SQLite is used by default on Content v3 and here no configuration for using another database is set, we need to pre-render all our content-related pages.

For this, I setup in the `nuxt.config.ts`:

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  // Pre-render all pages
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  }
})
```

When running `nuxt build`, it will pre-render all the links it can find by following the `<a>` tags from the index page.

> [!IMPORTANT]
> On Vercel & Netlify, please note that if you hit a 404 page (ex: https://content-v3-demo.vercel.app/404), Nuxt content v3 will try to load the SQLite database, throwing a `Failed to execute SQL ...: unable to open database file` on the server.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
