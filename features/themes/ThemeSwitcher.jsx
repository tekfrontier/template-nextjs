"use client";

import CircleIcon from '@mui/icons-material/Circle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { mode, setMode } = useColorScheme();
	const { t } = useTranslation();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleClick = () => mode === "dark" ? setMode("light") : setMode("dark");

	const getIcon = () => {
		if (!mounted)
			return <CircleIcon />
		else if (mode === "light")
			return <DarkModeIcon />
		else
			return <LightModeIcon />
	}

	return (
		<IconButton aria-label={t("aria_change_theme")} onClick={handleClick}>
			{getIcon()}
		</IconButton>
	);
}
