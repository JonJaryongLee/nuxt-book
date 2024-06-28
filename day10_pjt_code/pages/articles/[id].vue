<script setup>
const route = useRoute()

const { data, status } = await useFetch(`/api/v1/articles/${route.params.id}`)
console.log('data = ', data);
console.log('status = ', status);
</script>

<template>
    <h1>{{ route.params.id }}번 째</h1>
    <p>제목: {{ data.title }}</p>
    <p>내용: {{ data.content }}</p>
</template>