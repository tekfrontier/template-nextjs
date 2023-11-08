import TranslationsProvider from "@/features/i18n/TranslationProvider";
import initTranslations from "@/features/i18n/i18n";
import Navbar from "@/features/shared/components/nav/Navbar";
import ThemeProvider from "@/features/themes/ThemeProvider";
import { Box, CssBaseline } from "@/node_modules/@mui/material/index";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./globals.css";

export const metadata = {
	title: {
		template: "Template App - %s",
		default: "Template App - Home",
	},
	description: "The template app home page",
	manifest: "./manifest.json",
	icons: "./icon512_maskable.png",
};

export const viewport = {
	themeColor: "#fed000",
}

export default async function RootLayout({ children, params: { locale } }) {
	const { options } = await initTranslations(locale, ["default"]);

	return (
		<ThemeProvider>
			<CssBaseline />
			<html lang="en" suppressHydrationWarning>
				<head />
				<body>
					<TranslationsProvider namespaces={options.ns || "default"} locale={locale}>
						<Navbar locale={locale} />
						<Box component="main">
							{children}
						</Box>
					</TranslationsProvider>
				</body>
			</html>
		</ThemeProvider>
	);
}
