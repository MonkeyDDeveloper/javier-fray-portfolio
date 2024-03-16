// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', "@nuxtjs/google-fonts", "@nuxt/ui", "@nuxtjs/tailwindcss"],
  i18n: {
    locales: ["en", "es"],
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      redirectOn: 'all',
      alwaysRedirect: true,
    },
    vueI18n: "./i18n.config.ts",
  },
  googleFonts: {
    families: {
      Raleway: {
        wght: '200..900',
        ital: '200..900'
      },
    }
  },
})