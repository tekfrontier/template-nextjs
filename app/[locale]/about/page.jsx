import initTranslations from "@/features/i18n/i18n";

export const metadata = {
	title: "About",
	description: "The template app about page",
};

export default async function About({ params: { locale } }) {
	const { t, options } = await initTranslations(locale, ["about"]);
	return (
		<>
			<h1>{t("banner")}</h1>
		</>
	);
}
