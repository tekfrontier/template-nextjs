const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
	...withPWA({
		dest: "public",
		register: true,
		skipWaiting: true,
	}),
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};

module.exports = nextConfig;
