import { CssBaseline } from '@/node_modules/@mui/material/index';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

export default function ThemeProvider({ children }) {
	return (
		<CssVarsProvider defaultMode="system">
			<CssBaseline />
			{children}
		</CssVarsProvider>
	);
}