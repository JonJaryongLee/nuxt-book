<script setup>
const { locale, setLocale } = useI18n()

const localePath = useLocalePath()
</script>

<template>
  <div>
    <h1>다국어 지원</h1>
    <div>
      <button @click="setLocale('ko')">ko</button>
      <button @click="setLocale('en')">en</button>
      <p>{{ $t('welcome') }}</p>
      <p>{{ $t('introduction') }}</p>
      <footer>{{ $t('footer') }}</footer>
    </div>
  </div>
</template>
