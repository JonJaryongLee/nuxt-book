<script setup>
const userInput = ref("");

async function createHandler() {
  const result = await $fetch(`/api/todos`, {
    method: "post",
    body: {
      userInput: userInput.value,
    },
  });
  console.log(result);
}
</script>

<template>
  <div>
    <h2>todo 생성</h2>
    <input
      v-model="userInput"
      type="text"
      placeholder="할 일을 입력하세요"
    />
    <button @click="createHandler">생성</button>
  </div>
</template>
