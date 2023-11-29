"use client";

import { Box } from '@/node_modules/@mui/material/index';
import { useRouter } from '@/node_modules/next/navigation';
import logo_dark from '@/public/logo_dark.svg';
import logo_light from '@/public/logo_light.svg';
import { useColorScheme } from '@mui/material/styles';
import { BoxProps } from '@mui/system';
import Image from "next/image";

interface Props extends BoxProps {
	locale: string;
}

export default function Logo({ locale, ...props }: Props) {
	const { mode, setMode } = useColorScheme();
	const router = useRouter();

	return (
		<Box
			onClick={() => { router.push(`/${locale}`); }}
			{...props}
		>
			<Image src={mode === "dark" ? logo_dark : logo_light} alt="logo" width={54} height={54} />
		</Box>
	);
}
