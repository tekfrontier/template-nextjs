import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
	colorSchemes: {
		light: {
			// palette for light mode
			palette: {
				primary: {
					main: "#fed000",
				},
				secondary: {
					main: "#56565a",
				},
			},
		},
		dark: {
			// palette for dark mode
			palette: {
				primary: {
					main: "#fed000",
				},
				secondary: {
					main: "#56565a",
				},
			},
		},
	},
});

export default theme;
