import "../globals.css";
import "leaflet/dist/leaflet.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata = {
	title:
		"Twin Screw Extruder Machine: Boosting Productivity Efficiently : Testron Engineering",
	description:
		"Unleash the full potential of your production with the precision of the Twin Screw Extruder Machine in plastic processing.",
	other: {
		"format-detection": "telephone=no, email=no",
	},
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	return (
		<html
			lang={locale}
			dir="ltr"
			data-scroll-behavior="smooth"
			suppressHydrationWarning
		>
			<body className="font-poppins antialiased">
				<div className="flex flex-col min-h-screen">
					<NextIntlClientProvider>
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
						<BackToTop />
					</NextIntlClientProvider>
				</div>
			</body>
		</html>
	);
}
