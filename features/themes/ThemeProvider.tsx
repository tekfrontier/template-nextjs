"use client";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./theme";

interface Props {
	children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
	return (
		<CssVarsProvider defaultMode="system" theme={theme}>
			{children}
		</CssVarsProvider>
	);
}
