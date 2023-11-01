"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from 'next-themes'
import logo_light from '@/public/logo_light.svg'
import logo_dark from '@/public/logo_dark.svg'


export default function Logo() {
	const { theme, setTheme } = useTheme()
	return (
		<Link
			href="/"
		>
			<Image src={theme === "dark" ? logo_dark : logo_light} alt="logo" width={54} height={54} />
		</Link>
	);
}
