<script setup>
const userInfo = useUserInfoStore();
</script>

<template>
  <div>
    <h2>BaseChild</h2>
    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>
    <button @click="userInfo.changeName('tom')">이름 변경</button>
    <BaseGrandChild />
  </div>
</template>
