<script setup>
const url = ref("");
function setUrl(newUrl) {
  url.value = newUrl;
}
</script>

<template>
  <div>
    <a :href="url">어디로 갈까</a>
    <div>
      <button @click="setUrl('https://naver.com')">네이버</button>
      <button @click="setUrl('https://google.com')">구글</button>
    </div>
  </div>
</template>
