"use client";

import { Link } from '@/node_modules/@mui/material/index';
import logo_dark from '@/public/logo_dark.svg';
import logo_light from '@/public/logo_light.svg';
import { useColorScheme } from '@mui/material/styles';
import Image from "next/image";


export default function Logo(props) {
	const { mode, setMode } = useColorScheme();
	return (
		<Link
			href="/"
			{...props}
		>
			<Image src={mode === "dark" ? logo_dark : logo_light} alt="logo" width={54} height={54} />
		</Link>
	);
}
