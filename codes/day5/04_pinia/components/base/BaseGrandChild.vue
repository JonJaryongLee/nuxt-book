<script setup>
const userInfo = useUserInfoStore();
</script>

<template>
  <div>
    <h3>BaseGrandChild</h3>
    <p>{{ userInfo.name }}</p>
    <button @click="userInfo.changeAge(1)">나이를 1로 변경</button>
  </div>
</template>
