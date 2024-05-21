<script setup>
const emit = defineEmits(["cancelModalWindow", "deleteArticle"]);

function handleCancel() {
  emit("cancelModalWindow");
}

function handleDelete() {
  emit("deleteArticle");
}
</script>

<template>
  <div>
    <p>정말 삭제하시겠습니까?</p>
    <el-button @click="handleCancel">취소</el-button>
    <el-button type="danger" @click="handleDelete">삭제</el-button>
  </div>
</template>
