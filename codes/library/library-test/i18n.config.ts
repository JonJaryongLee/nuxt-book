export default defineI18nConfig(() => ({
  lazy: true,
  locale: 'ko',
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
}))