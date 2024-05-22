<script setup>
const props = defineProps({
  backgroundColor: String,
  bannerText: String,
});
</script>

<template>
  <div class="banner" :style="{ backgroundColor: backgroundColor }">
    <h1 class="banner-text">{{ bannerText }}</h1>
  </div>
</template>

<style scoped>
.banner {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-text {
  font-size: 2rem;
  font-weight: 400;
  color: white;
}
</style>
