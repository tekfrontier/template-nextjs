"use client"

import { Tab, Tabs } from "@/node_modules/@mui/material/index";
import { useState } from "react";

export default function NavTabs(props) {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Tabs value={value} onChange={handleChange} centered {...props} >
			<Tab label="Item One" />
			<Tab label="Item Two" />
			<Tab label="Item Three" />
		</Tabs>
	);
}
