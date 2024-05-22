<script setup>
const title = ref("");
const content = ref("");

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
  const result = await $fetch("/api/articles", {
    method: "post",
    body: {
      title: title.value,
      content: content.value,
    },
  });

  if (result.id) {
    return navigateTo({
      path: "/board",
    });
  }
}
</script>

<template>
  <div class="page">
    <h2>게시글 생성</h2>
    <el-form label-width="auto">
      <el-form-item label="제목">
        <el-input v-model="title" />
      </el-form-item>
      <el-form-item label="내용">
        <el-input v-model="content" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">글 생성</el-button>
        <el-button @click="goToBoard">뒤로가기</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
