import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const mainFont = DM_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-main",
});

export const metadata: Metadata = {
	title: {
		default: "Edwin Peraza | Portfolio",
		template: "Edwin Peraza | Portfolio",
	},
	description: "Personal portfolio of Edwin Peraza",
	applicationName: "Edwin Peraza Portfolio",
	authors: [{ name: "Edwin Peraza", url: "https://edwinperaza.com" }],
	creator: "Edwin Peraza",
	publisher: "Edwin Peraza",
	keywords: [
		"portfolio",
		"developer",
		"front-end",
		"back-end",
		"full-stack",
		"python",
		"javascript",
		"typescript",
		"react",
		"next.js",
		"tailwind",
		"css",
		"html",
		"swift",
		"firebase",
		"mongodb",
		"django",
		"fastapi",
		"scikit-learn",
		"gcp",
		"aws",
		"docker",
		"bootstrap",
		"html",
		"css",
		"javascript",
		"typescript",
		"react",
		"next.js",
		"tailwind",
		"css",
		"html",
		"swift",
		"firebase",
		"mongodb",
		"django",
		"fastapi",
		"scikit-learn",
		"gcp",
		"aws",
		"docker",
		"bootstrap",
		"software engineering",
		"web development",
		"web design",
		"web developer",
		"web designer",
		"software engineer",
		"software developer",
		"software design",
		"software designer",
		"front-end developer",
		"front-end designer",
		"front-end engineer",
		"back-end developer",
		"back-end designer",
		"back-end engineer",
		"full-stack developer",
		"full-stack designer",
		"full-stack engineer",
		"python developer",
		"javascript developer",
	],
	openGraph: {
		title: "Edwin Peraza | Portfolio",
		description: "Personal portfolio of Edwin Peraza",
		url: "https://edwinperaza.com",
		type: "website",
		locale: "en_US",
		siteName: "Edwin Peraza Portfolio",
		images: [
			{
				url: "https://edwinperaza.com/images/og.png",
				width: 1200,
				height: 630,
				alt: "Edwin Peraza | Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Edwin Peraza | Portfolio",
		description: "Personal portfolio of Edwin Peraza",
		images: [
			{
				url: "https://edwinperaza.com/images/og.png",
				alt: "Edwin Peraza | Portfolio",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${mainFont.className}`}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
			>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
