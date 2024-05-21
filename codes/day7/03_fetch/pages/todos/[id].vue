<script setup>
const route = useRoute();
const { data, status, refresh, error } = await useFetch(
  `/api/todos/${route.params.id}`
);
</script>

<template>
  <div>
    <h2>todo id: {{ route.params.id }}</h2>
    <button @click="refresh">refresh</button>
    <p v-if="status === 'pending'">loading...</p>
    <div v-else-if="status === 'success'">
      <p>id : {{ data.id }}</p>
      <p>userId : {{ data.userId }}</p>
      <p>title : {{ data.title }}</p>
      <p>completed : {{ data.completed }}</p>
    </div>
  </div>
</template>
