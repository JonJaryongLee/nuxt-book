<script setup>
const { data, status, refresh, error } = await useFetch("/api/todos");
</script>

<template>
  <div>
    <h2>data fetch</h2>
    <button @click="refresh">refresh</button>
    <p v-if="status === 'pending'">loading...</p>
    <ul v-else-if="status === 'success'">
      <li v-for="todo in data" :key="todo.id">
        <RouterLink :to="{ path: `/todos/${todo.id}` }">
          {{ todo.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
