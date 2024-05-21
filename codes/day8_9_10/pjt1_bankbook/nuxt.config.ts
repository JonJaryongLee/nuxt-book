// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/google-fonts",
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      "Noto Sans KR": [400],
    },
  },
});
