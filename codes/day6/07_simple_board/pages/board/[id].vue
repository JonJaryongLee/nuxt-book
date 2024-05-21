<script setup>
const route = useRoute();
const board = useBoardStore();

const article = board.articles.filter(
  (article) => article.id === Number(route.params.id)
)[0];

function deleteHandler() {
  board.deleteArticle(Number(route.params.id));
  return navigateTo({
    path: "/board",
  });
}
</script>

<template>
  <div>
    <h2>{{ article.title }}</h2>
    <p>게시글번호: {{ article.id }}</p>
    <p>{{ article.content }}</p>
    <button @click="deleteHandler">글 삭제</button>
  </div>
</template>
