<script setup>
const isActive = ref(false);
</script>

<template>
  <div>
    <button @click="isActive = !isActive">토글 버튼</button>
    <p v-if="isActive">짠</p>
  </div>
</template>
