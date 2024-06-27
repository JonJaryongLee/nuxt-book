// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/image"
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      "Noto Sans KR": [400],
    },
  },
  // 파일로 분리하기
  i18n: {
    legacy: false, // Composition API에서 사용하기 위해선 false 값을 주어야함
    defaultLocale: 'ko',  // 기본 locale
    detectBrowserLanguage: false, // 브라우저 쿠키에서 자동으로 검색
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ko',
        name: '한국어',
        file: 'ko.json'
      }
    ],
  },
  image: {
    dir: 'assets/images',
    quality: 80,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    }
  }
})