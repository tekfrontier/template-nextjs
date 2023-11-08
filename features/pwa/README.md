# Progressive Web App

## Description

1. An existing [manifest.json](../../public/manifest.json) file is provided along with icons in the `public` folder.
2. The [next-pwa](https://www.npmjs.com/package/next-pwa) npm package is added and used to generate a service worker, and configuration is provided in [next.config.js](../../next.config.js).
3. metadata is configured in [layout.js](../../components/layout.js) in the `metadata` and `viewport` constants.

## Customize

* Create your own manifest.json file using a generator like [this one](https://progressier.com/pwa-manifest-generator), and add it to the `public` folder.
* Add any relevant metadata values to the `metadata` constant in [layout.js](../../components/layout.js).
