<script setup>
const { articles } = useBoardStore();
</script>

<template>
  <div>
    <h2>게시판</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <RouterLink :to="{ path: `/board/${article.id}` }">
          {{ article.id }} - {{ article.title }}
        </RouterLink>
      </li>
    </ul>
    <RouterLink :to="{path:'/board/create'}">글 등록</RouterLink>
  </div>
</template>
