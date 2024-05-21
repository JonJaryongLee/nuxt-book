<script setup>
const message = ref("글자를 지워보자");
</script>

<template>
  <div>
    <input type="text" v-model="message" />
    <input type="text" :value="message" />
  </div>
</template>
