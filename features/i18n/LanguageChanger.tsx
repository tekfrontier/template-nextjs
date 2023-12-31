"use client";

import { Box, BoxProps, Button, Menu, MenuItem } from "@/node_modules/@mui/material/index";
import TranslateIcon from "@mui/icons-material/Translate";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import i18nConfig from "./i18nConfig";

interface Props extends BoxProps {
	locale: string;
}

export default function LanguageChanger({ locale, ...props }: Props) {
	const router = useRouter();
	const currentPathname = usePathname();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const setLocaleCookie = (locale: string) => {
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
	};

	const redirectToLocale = (locale: string, newLocale: string) => {
		if (locale !== newLocale) router.push(currentPathname.replace(`/${locale}`, `/${newLocale}`));
		router.refresh();
	};

	const handleClickMenu = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (event: any, newLocale: any) => {
		setAnchorEl(null);
		setLocaleCookie(newLocale);
		redirectToLocale(locale, newLocale);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box {...props}>
			<Button
				startIcon={<TranslateIcon />}
				size="small"
				variant="contained"
				onClick={handleClickMenu}
				aria-label={locale}
			>
				{locale}
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "lock-button",
					role: "listbox",
				}}
			>
				{i18nConfig.locales.map((localeItem, index) => (
					<MenuItem
						key={localeItem}
						selected={localeItem === locale}
						onClick={(event) => handleMenuItemClick(event, localeItem)}
					>
						{i18nConfig.languages[index]}
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}
