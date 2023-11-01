import initTranslations from "@/app/i18n";

export default async function Home({ params: { locale } }) {
	const { t, options } = await initTranslations(locale, ["home"]);
	return (
		<>
			<main>
				<h1>{t("banner")}</h1>
			</main>
		</>
	);
}
