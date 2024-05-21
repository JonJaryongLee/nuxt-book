<script setup>
const name = ref("david");
const age = ref(10);
</script>

<template>
  <div>
    <h1>app</h1>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <BaseChild />
  </div>
</template>
