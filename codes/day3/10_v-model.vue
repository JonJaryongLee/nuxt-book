<script setup>
const message = ref("");
</script>

<template>
  <div>
    <p>message: {{ message }}</p>
    <input type="text" v-model="message" />
  </div>
</template>
