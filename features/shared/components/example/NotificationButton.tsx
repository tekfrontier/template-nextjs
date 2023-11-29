"use client";

import { Button } from "@/node_modules/@mui/material/index";

export default function NotificationButton() {

	const games = [
		{
			name: "Fallout Shelter",
			author: "Bethesda Game Studios",
			slug: "fallout-shelter",
		},
		{
			name: "Monument Valley",
			author: "Ustwo games",
			slug: "monument-valley",
		},
	];

	function randomNotification() {
		const randomItem = Math.floor(Math.random() * games.length);
		const notifTitle = games[randomItem].name;
		const notifBody = `Created by ${games[randomItem].author}.`;
		const notifImg = `data/img/${games[randomItem].slug}.jpg`;
		const options = {
			body: notifBody,
			icon: notifImg,
		};
		new Notification(notifTitle, options);
	}

	const handleClick = () => {
		Notification.requestPermission().then((result) => {
			if (result === "granted") {
				randomNotification();
			}
		});
	}
	return (
		<Button variant="contained" color="primary" onClick={handleClick}>
			receive notifications
		</Button>
	);
}