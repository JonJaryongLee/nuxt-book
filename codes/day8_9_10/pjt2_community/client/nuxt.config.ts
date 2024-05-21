// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@pinia/nuxt", "@element-plus/nuxt"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    serverUrl: "",
  },
});
