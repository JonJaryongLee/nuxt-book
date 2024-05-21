<script setup>
const userInput = ref("");

async function createHandler() {
  const result = await $fetch(`/api/posts`, {
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
    <h2>게시글 생성</h2>
    <input
      v-model="userInput"
      type="text"
      placeholder="게시글 제목을 입력하세요"
    />
    <button @click="createHandler">생성</button>
  </div>
</template>
