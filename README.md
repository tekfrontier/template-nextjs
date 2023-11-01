This is a [Next.js](https://nextjs.org/) template project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with dark/light mode theme and i18n implemented.

## Getting Started

after installing your node dependency manager of choice, run the development server (e.g.):

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

in VSCode you can run the `Next.js: debug client` launch config

### i18n

This project uses [i18nexus](https://app.i18nexus.com/) with [i18nexus-cli](https://www.npmjs.com/package/i18nexus-cli) to manage translation strings. To continue with `i18nexus` add a `.env` file in this project's root folder and add a api key entry:

```text
I18NEXUS_API_KEY="yourapikey"
```

You can choose another provider of your choice, or manage translation strings manually with the following folder structure:

```text
locales
	├── [ISO 639-1 lang code]
		├── [namespace].json
```

For example:

```text
locales
	├── en
		├── default.json
		├── home.json
	├── es
		├── default.json
		├── home.json
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
