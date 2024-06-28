// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    // 환경변수: NUXT_ 를 제외하고 camelcase
    serverUrl: "",
  }
})