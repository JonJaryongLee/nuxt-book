<script setup>
const text1 = ref("???");
let text2 = "???";
</script>

<template>
  <div>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
    <button @click="text1 = '짜잔'">text1 변경</button>
    <button @click="text2 = '짜잔'">text2 변경</button>
  </div>
</template>
