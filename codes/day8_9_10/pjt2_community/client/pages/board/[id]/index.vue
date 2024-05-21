<script setup>
const route = useRoute();
const deleteModalOpen = ref(false);
const loading = computed(() => (status.value === "pending" ? true : false));

const { data, status, error } = await useFetch(
  `/api/articles/${route.params.id}`
);

function updateHandler() {
  return navigateTo({
    path: `/board/${route.params.id}/update`,
  });
}

function deleteHandler() {
  deleteModalOpen.value = true;
}

async function deleteArticle() {
  deleteModalOpen.value = false;
  const result = await $fetch(`/api/articles/${route.params.id}`, {
    method: "delete",
  });
  if (result.id === route.params.id) {
    return navigateTo({
      path: `/board`,
    });
  }
}
</script>

<template>
  <div class="page">
    <div v-loading="loading">
      <h2>{{ data?.title }}</h2>
      <p v-if="status === 'error'">
        {{ error.data.data.errorMessage }}
      </p>
      <div v-else-if="status === 'success'">
        <p>글번호: {{ data.id }}</p>
        <p>{{ data.content }}</p>
        <el-button type="primary" @click="updateHandler">수정</el-button>
        <el-button type="danger" @click="deleteHandler">삭제</el-button>
        <el-dialog v-model="deleteModalOpen" title="삭제" width="300">
          <ModalDelete
            @cancelModalWindow="deleteModalOpen = false"
            @deleteArticle="deleteArticle"
          />
        </el-dialog>
      </div>
    </div>
  </div>
</template>
