<script setup>
const route = useRoute();
const title = ref("");
const content = ref("");
const loading = computed(() => (status.value === "pending" ? true : false));
const { data, status } = await useFetch(
  `/api/articles/${route.params.id}`
);

function goToBoard() {
  return navigateTo({
    path: "/board",
  });
}

async function onSubmit() {
  if (title.value.trim() === "" || content.value.trim() === "") {
    alert("빈 칸은 존재할 수 없습니다");
    return;
  }
  const result = await $fetch(`/api/articles/${route.params.id}`, {
    method: "put",
    body: {
      title: title.value,
      content: content.value,
    },
  });
  if (result.id) {
    return navigateTo({
      path: `/board/${result.id}`,
    });
  }
}

title.value = data.value.title;
content.value = data.value.content;
</script>

<template>
  <div class="page">
    <h2>{{ route.params.id }}번 글 수정</h2>
    <div v-loading="loading">
      <el-form label-width="auto">
        <el-form-item label="제목">
          <el-input v-model="title" />
        </el-form-item>
        <el-form-item label="내용">
          <el-input v-model="content" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">글 수정</el-button>
          <el-button @click="goToBoard">뒤로가기</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
