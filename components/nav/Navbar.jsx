import initTranslations from "@/app/i18n";
import { AppBar, Box, Stack, Toolbar, Typography } from "@/node_modules/@mui/material/index";
import Logo from "./Logo";
import NavTabs from "./NavTabs";
import LanguageChanger from "../i18n/LanguageChanger";
import ThemeSwitcher from "../themes/ThemeSwitcher";

export default async function Navbar({ locale }) {
	const { t, options } = await initTranslations(locale, ["default"]);

	return (
		<AppBar position="static">
			<Toolbar>
				<Box sx={{ display: "flex", width: "100%" }}>
					<Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
						<Logo />
						<Typography variant="h6" component="div" sx={{ ml: 2 }}>
							{t("company_name")}
						</Typography>
					</Box>
					<Box sx={{ flex: 2 }}>
						<NavTabs textColor="secondary" indicatorColor="secondary" sx={{ width: "100%" }} />
					</Box>
					<Stack direction="row" spacing={1} alignItems="center" flex={1} justifyContent="end">
						<LanguageChanger locale={locale} />
						<ThemeSwitcher />
					</Stack>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
