<script setup>
const route = useRoute();
</script>

<template>
  <div>
    <h2>todo id: {{ route.params.id }}</h2>
  </div>
</template>