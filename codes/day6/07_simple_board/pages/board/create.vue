<script setup>
const board = useBoardStore();

const title = ref("");
const content = ref("");

function createHandler() {
  board.addArticle({
    title: title.value,
    content: content.value,
  });
  return navigateTo({
    path: `/board`,
  });
}
</script>

<template>
  <div>
    <h2>글 등록</h2>
    <div>
      <input v-model="title" type="text" placeholder="제목을 입력하세요" />
    </div>
    <div>
      <textarea
        v-model="content"
        cols="30"
        rows="10"
        placeholder="내용을 입력하세요"
      ></textarea>
    </div>
    <div>
      <button @click="createHandler">글 등록</button>
    </div>
  </div>
</template>
