import MainNavBar from "@/components/navigation/MainNavBar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<MainNavBar />
			{children}
		</>
	);
}
