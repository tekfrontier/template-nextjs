"use client";

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import theme from './theme';

export default function ThemeProvider({ children }) {

	return (
		<CssVarsProvider defaultMode="system" theme={theme}>
			{children}
		</CssVarsProvider>
	);
}