<script setup>
// useFetch: 파일이 열리자마자 조회
// useLazyFetch: 특정 조건(button 등)
// $fetch: 나머지 Method(POST, DELETE)
// 아래처럼 직접 url 로 요청을 보내도 괜찮지만,
// 실제 서비스에서는 아래처럼 코드가 깔끔하게 안나온다!
// server 쪽 코드를 따로 관리한다!
// const url = 'http://localhost:9999/articles'
const { data, status } = await useFetch("/api/v1/articles");
console.log("data =", data);
console.log("status = ", status);

function goDetail(id) {
  return navigateTo({
    path: `/articles/${id}`
  })
}
</script>

<template>
  <h1>게시판</h1>
  <table class="table-auto">
    <thead>
      <tr>
        <th>ID</th>
        <th>제목</th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="article in data"
        :key="article.id"
        class="hover:bg-gray-200"
        @click="goDetail(article.id)"
    >
        <td>{{ article.id }}</td>
        <td>{{ article.title }}</td>
      </tr>
    </tbody>
  </table>
</template>
