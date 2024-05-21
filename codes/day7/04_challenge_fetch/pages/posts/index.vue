<script setup>
const { data, status, refresh, error } = await useFetch("/api/posts");
</script>

<template>
  <div>
    <h2>data fetch</h2>
    <button @click="refresh">refresh</button>
    <p v-if="status === 'pending'">loading...</p>
    <ul v-else-if="status === 'success'">
      <li v-for="post in data" :key="post.id">
        <RouterLink :to="{ path: `/posts/${post.id}` }">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
