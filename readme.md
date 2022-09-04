# rakkas SEO

This project fork [next-seo](https://github.com/garmeeh/next-seo)

## Install

```
npm i rakkas-seo
```

## Usage

First, add this code in your `vite.config.ts`.

```ts
export default defineConfig({
  ssr: { noExternal: ["rakkas-seo"] }, // add this
});

```

Then.

```tsx
import { Seo } from "rakkas-seo";
```

It's used in the same way as NextSeo. Enjoy.