<script setup>
const props = defineProps({
  error: Object
})
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">홈으로 돌아가기</NuxtLink>
  </div>
</template>