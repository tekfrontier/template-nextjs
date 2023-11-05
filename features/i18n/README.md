# i18n Info

By default this project uses [i18nexus](https://app.i18nexus.com/) with [i18nexus-cli](https://www.npmjs.com/package/i18nexus-cli) to manage translation strings. In addition to the files in this folder, there is a [middleware.js](../../middleware.js) file that is required for functioning i18n. To continue with `i18nexus` add a `.env` file in this project's root folder and add a api key entry:

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
