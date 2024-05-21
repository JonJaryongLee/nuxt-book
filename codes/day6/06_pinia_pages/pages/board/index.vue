<script setup>
const userInfo = useUserInfoStore();
</script>

<template>
  <div>
    <h2>게시판</h2>
    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>
    <button @click="userInfo.changeAge(5)">나이 바꾸기</button>
  </div>
</template>
