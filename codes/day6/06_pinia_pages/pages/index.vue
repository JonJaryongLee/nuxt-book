<script setup>
const userInfo = useUserInfoStore();
</script>

<template>
  <div>
    <h2>첫 페이지</h2>
    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>
    <button @click="userInfo.changeName('데이비드')">이름 한글로 바꾸기</button>
  </div>
</template>