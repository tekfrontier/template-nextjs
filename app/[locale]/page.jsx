import initTranslations from "@/features/i18n/i18n";
import { Link, Paper } from "@/node_modules/@mui/material/index";

export default async function Home({ params: { locale } }) {
	const { t, options } = await initTranslations(locale, ["home"]);
	return (
		<>
			<h1>{t("banner")}</h1>
			<Paper>
				<div>paper content</div>
				<div>
					<Link href="/[locale]/page">paper link</Link>
				</div>
				<a href="/[locale]/page">a paper link</a>
			</Paper>
			<div>regular content</div>
			<div>
				<Link href="/[locale]/page">regular link</Link>
			</div>
			{/* <ThemeLink href="/[locale]/page" as={`/${locale}/page`}>theme link</ThemeLink> */}
			<Link href="#" sx={{ color: "red-500", }}>theme link</Link>
		</>
	);
}
