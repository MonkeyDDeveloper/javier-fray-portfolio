import { HomePageLocales } from "./locales";

export default defineI18nConfig(() => ({
    legacy: false,
    messages: {
        en: {
            homePage: HomePageLocales.En
        },
        es: {
            homePage: HomePageLocales.Es
        },
    },
}));