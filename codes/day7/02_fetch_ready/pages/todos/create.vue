<script setup>
const userInput = ref("");

function createHandler() {
  console.log(userInput.value);
}
</script>

<template>
  <div>
    <h2>todo 생성</h2>
    <input v-model="userInput" type="text" placeholder="할 일을 입력하세요" />
    <button @click="createHandler">생성</button>
  </div>
</template>
