"use client";

import { Divider, IconButton, Toolbar } from '@/node_modules/@mui/material/index';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react';

export default function MenuDrawer({ children, props }) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<>
			<IconButton sx={{ display: { md: "none", zIndex: 1300 }, justifyContent: "start" }} onClick={toggleDrawer} {...props} >
				{isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
			</IconButton>
			<SwipeableDrawer
				anchor={"left"}
				open={isDrawerOpen}
				onClick={toggleDrawer}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}
				sx={{ '& .MuiDrawer-paperAnchorLeft': { width: "100%" } }}
			>
				<Toolbar />
				<Divider />
				{children}
			</SwipeableDrawer>
		</>
	);
}
