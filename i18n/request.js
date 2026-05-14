import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale;
	const locale = hasLocale(routing.locales, requested)
		? requested
		: routing.defaultLocale;

	const menus = (await import(`../public/locales/${locale}/menus.json`))
		.default;

	const home = (await import(`../public/locales/${locale}/home.json`)).default;

	const about = (await import(`../public/locales/${locale}/about.json`))
		.default;

	return {
		locale,
		messages: {
			menus,
			home,
			about,
		},
	};
});
