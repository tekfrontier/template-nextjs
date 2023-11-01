"use client";

import { useTranslation } from 'react-i18next';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const { t } = useTranslation();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const handleClick = () => theme === "dark" ? setTheme("light") : setTheme("dark");

	return (
		<IconButton aria-label={t("aria_change_theme")} onClick={handleClick} color="black" sx={{ mx: 1 }}>
			{theme === "light" ? (<DarkModeIcon />) : (<LightModeIcon />)}
		</IconButton>
	);
}
