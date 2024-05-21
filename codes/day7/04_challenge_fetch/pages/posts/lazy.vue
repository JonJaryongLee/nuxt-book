<script setup>
const { data, status, execute, error } = await useLazyFetch("/api/posts", {
  immediate: false,
});
</script>

<template>
  <div>
    <h2>lazy fetch</h2>
    <button @click="execute">패치 실행</button>
    <p v-if="status === 'idle'">버튼을 클릭하세요</p>
    <p v-else-if="status === 'pending'">loading...</p>
    <ul v-else-if="status === 'success'">
      <li v-for="post in data" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
