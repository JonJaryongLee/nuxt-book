<script setup>
const route = useRoute();
const { data, status, refresh, error } = await useFetch(
  `/api/posts/${route.params.id}`
);
</script>

<template>
  <div>
    <h2>게시글 id: {{ route.params.id }}</h2>
    <button @click="refresh">refresh</button>
    <p v-if="status === 'pending'">loading...</p>
    <div v-else-if="status === 'success'">
      <p>id : {{ data.id }}</p>
      <p>userId : {{ data.userId }}</p>
      <p>title : {{ data.title }}</p>
      <p>completed : {{ data.body }}</p>
    </div>
  </div>
</template>
