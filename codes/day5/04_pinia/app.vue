<script setup>
const userInfo = useUserInfoStore();
</script>

<template>
  <div>
    <h1>app</h1>
    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>
    <p>{{ userInfo.introduce }}</p>
    <button @click="userInfo.changeAge(userInfo.age - 1)">나이를 줄이자</button>
    <BaseChild />
  </div>
</template>
