<script setup>
const route = useRoute();
</script>

<template>
  <div>
    <h2>{{ route.params.id }}번 페이지</h2>
  </div>
</template>