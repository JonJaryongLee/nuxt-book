<script setup>
const text = ref("???");
</script>

<template>
  <div>
    <p>{{ text }}</p>
    <button @click="text = '짜잔'">클릭</button>
  </div>
</template>
