# App Info

This is a [Next.js](https://nextjs.org/) template project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with dark/light mode, i18n, and custom theme implemented.

## Getting Started

after installing your node dependency manager of choice, run the development server (e.g.):

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

in VSCode you can run the `Next.js: debug client` launch config

### Adapting for your Project

After copying/cloning this repo, you should do the following:

- Run `pnpm i` to install dependencies
- Run `pnpm up --latest` to update to latest dependencies
- follow instructions in [i18n readme](./features/i18n/README.md)
  - edit existing translations in [locales](./locales) and by searching globally for "`t(`" in the project
- follow instructions in the [theming readme](./features/themes/README.md)
- edit the metadata in [layout.jsx](./app/[locale]/layout.jsx) and each `page.jsx` file
- follow the directions in the [spoofing readme](./spoofing/README.md) to set up local https and domain spoofing

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

A free and easy way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
