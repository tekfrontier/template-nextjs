"use client";

import LanguageChanger from "@/features/i18n/LanguageChanger";
import ThemeSwitcher from "@/features/themes/ThemeSwitcher";
import { Box, Divider, IconButton, Stack, Toolbar } from "@/node_modules/@mui/material/index";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { BoxProps } from "@mui/system";
import { useState } from "react";

interface Props extends BoxProps {
	locale: string;
	children: React.ReactNode;
}

export default function MenuDrawer({ locale, children, ...props }: Props) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<Box {...props}>
			<IconButton sx={{ display: { md: "none", zIndex: 1300 }, justifyContent: "start" }} onClick={toggleDrawer}>
				{isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
			</IconButton>
			<SwipeableDrawer
				anchor={"left"}
				open={isDrawerOpen}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}
				sx={{ "& .MuiDrawer-paperAnchorLeft": { width: "100%" } }}
			>
				<Toolbar>
					<Stack direction="row" spacing={1} alignItems="center" justifyContent="end" sx={{ width: "100%" }}>
						<LanguageChanger locale={locale} />
						<ThemeSwitcher />
					</Stack>
				</Toolbar>
				<Divider />
				<Box onClick={toggleDrawer}>{children}</Box>
			</SwipeableDrawer>
		</Box>
	);
}
