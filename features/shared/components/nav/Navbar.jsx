import LanguageChanger from "@/features/i18n/LanguageChanger";
import initTranslations from "@/features/i18n/i18n";
import ThemeSwitcher from "@/features/themes/ThemeSwitcher";
import { AppBar, Stack, Toolbar, Typography } from "@/node_modules/@mui/material/index";
import Logo from "./Logo";
import MenuDrawer from "./MenuDrawer";
import NavTabs from "./NavTabs";

export default async function Navbar({ locale }) {
	const { t, options } = await initTranslations(locale, ["default"]);

	return (
		<AppBar position="static" color="primary" enableColorOnDark>
			<Toolbar >
				<Stack direction="row" justifyContent="space-between" spacing={1} sx={{ width: "100%" }}>
					<MenuDrawer sx={{ display: { md: "none" }, justifyContent: "start" }} aria-label={t("aria_menu")}>
						<NavTabs variant="fullWidth" locale={locale} textColor="secondary" indicatorColor="secondary" orientation="vertical" />
					</MenuDrawer>
					<Stack direction="row" spacing={1} flex={1} alignItems="center" sx={{ justifyContent: { xs: "center", md: "start" } }}>
						<Logo />
						<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
							{t("company_name")}
						</Typography>
					</Stack>
					<NavTabs locale={locale} textColor="secondary" indicatorColor="secondary" sx={{ flex: 2, display: { xs: "none", md: "flex" } }} />
					<Stack direction="row" spacing={1} alignItems="center" justifyContent="end" sx={{ flex: { xs: 0, md: 1 } }}>
						<LanguageChanger locale={locale} />
						<ThemeSwitcher />
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}
