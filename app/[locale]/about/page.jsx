import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/i18n/TranslationProvider";

export default async function About({ params: { locale } }) {
	const { t, options } = await initTranslations(locale, ["about"]);
	return (
		<>
			<main>
				<h1>{t("banner")}</h1>
			</main>
		</>
	);
}
