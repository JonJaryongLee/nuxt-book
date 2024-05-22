<script setup>
const { data, status, error } = await useFetch("/api/articles");
const loading = computed(() => (status.value === "pending" ? true : false));

function createHandler() {
  return navigateTo({
    path: "/board/create",
  });
}

function rowClickHandler(event) {
  return navigateTo({
    path: `/board/${event.id}`,
  });
}
</script>

<template>
  <div class="page">
    <h2>게시판</h2>
    <div v-loading="loading">
      <div v-if="status === 'error'">
        <p>{{ error.data.data.errorMessage }}</p>
      </div>
      <el-table
        v-else-if="status === 'success'"
        :data="data"
        @row-click="rowClickHandler"
      >
        <el-table-column prop="id" label="ID" width="50" />
        <el-table-column prop="title" label="제목" />
      </el-table>
      <el-button class="createBtn" type="primary" @click="createHandler"
        >글 작성</el-button
      >
    </div>
  </div>
</template>

<style scoped>
.createBtn {
  margin-top: 1rem;
}
</style>
