<script setup>
function goHome() {
  return navigateTo({
    path: "/",
  });
}
</script>

<template>
  <div>
    <h2>게시판</h2>
    <button @click="goHome">홈으로</button>
  </div>
</template>
