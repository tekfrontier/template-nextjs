import initTranslations from "@/features/i18n/i18n";
import NotificationButton from "@/features/shared/components/example/NotificationButton";

export default async function Home({ params: { locale } }) {
	const { t, options } = await initTranslations(locale, ["home"]);

	return (
		<>
			<h1>{t("banner")}</h1>
			<NotificationButton />
		</>
	);
}
