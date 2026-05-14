import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'ar', 'fr', 'ru', 'es'],
    defaultLocale: 'en',
    localePrefix: 'never'
})