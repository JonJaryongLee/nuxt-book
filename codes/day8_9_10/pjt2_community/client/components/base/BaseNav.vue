<script setup>
function handleSelect(key, keyPath) {
  return navigateTo({
    path: keyPath[0],
  });
}
</script>

<template>
  <div>
    <el-menu mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">홈</el-menu-item>
      <el-menu-item index="/board">게시판</el-menu-item>
      <el-menu-item index="/about">회사소개</el-menu-item>
    </el-menu>
  </div>
</template>
