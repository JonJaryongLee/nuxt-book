<script setup>
const userInput = ref("");
</script>

<template>
  <div>
    <input type="text" placeholder="A B C" v-model="userInput" />
    <p v-if="userInput === 'A'">A</p>
    <p v-else-if="userInput === 'B'">B</p>
    <p v-else-if="userInput === 'C'">C</p>
    <p v-else>A B C 가 아닙니다</p>
  </div>
</template>
