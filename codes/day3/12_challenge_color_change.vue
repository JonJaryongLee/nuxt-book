<script setup>
const selectedColor = ref("");
</script>

<template>
  <div>
    <h1 :style="{ color: selectedColor }">color</h1>
    <input type="text" v-model="selectedColor" />
  </div>
</template>
