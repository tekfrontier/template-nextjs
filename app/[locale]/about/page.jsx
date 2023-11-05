import initTranslations from "@/features/i18n/i18n";

export default async function About({ params: { locale } }) {
	const { t, options } = await initTranslations(locale, ["about"]);
	return (
		<>
			<h1>{t("banner")}</h1>
		</>
	);
}
