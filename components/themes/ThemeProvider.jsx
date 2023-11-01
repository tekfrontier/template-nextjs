"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children, themeProps }) {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark" {...themeProps}>{children}</NextThemesProvider>
		</NextUIProvider>
	);
}
