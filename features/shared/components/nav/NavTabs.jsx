"use client"

import { Tab, Tabs } from "@/node_modules/@mui/material/index";
import { usePathname, useRouter } from "@/node_modules/next/navigation";
import { useMemo, useState } from "react";

export default function NavTabs({ locale, children, ...props }) {
	const [value, setValue] = useState(0);
	const router = useRouter();
	const pathName = usePathname();
	const navLinks = [
		{
			value: 0,
			label: "Home",
			href: `/${locale}`,
		},
		{
			value: 1,
			label: "About",
			href: `/${locale}/about`,
		},
	];

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (href) => (event) => {
		router.push(href);
		router.refresh();
	};

	useMemo(() => {
		const activeTab = Math.max(navLinks.findIndex((navLink) => navLink.href === pathName), 0);
		setValue(activeTab);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathName]);


	return (
		<Tabs value={value} onChange={handleChange} centered {...props} >
			{navLinks.map((navLink) => (
				<Tab key={navLink.label} label={navLink.label} onClick={handleClick(navLink.href)} />
			))}
		</Tabs>
	);
}
