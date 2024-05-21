// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 추가된 부분
  runtimeConfig: {
    serverUrl: "",
  },
});
