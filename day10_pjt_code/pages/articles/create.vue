<script setup>
const title = ref('')
const content = ref('')

async function createHandler() {
    const result = await $fetch('/api/v1/articles', {
        method: 'post',
        body: {
            title: title.value,
            content: content.value
        }
    })
    console.log('result = ', result);
}
</script>

<template>
    <h1>게시글 생성</h1>
    <label for="title">제목: </label>
    <input type="text" v-model="title" class="border-2 mb-1">
    <br>

    <label for="title">내용: </label>
    <input type="text" v-model="content" class="border-2">

    <br>
    <button @click="createHandler">생성하기</button>
</template>