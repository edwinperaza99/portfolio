import MainNavBar from "@/components/navigation/MainNavBar";
import SimpleFooter from "@/components/SimpleFooter";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<MainNavBar />
			{children}
			<SimpleFooter />
		</>
	);
}
