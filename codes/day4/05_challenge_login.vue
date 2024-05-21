<script setup>
const isUserLoggedIn = ref(false);
const userName = "david";
const buttonText = computed(() =>
  isUserLoggedIn.value ? "로그아웃" : "로그인"
);
</script>

<template>
  <div>
    <div v-if="isUserLoggedIn">
      <p>환영합니다, {{ userName }}님!</p>
    </div>
    <div v-else>
      <p>로그인이 필요합니다</p>
    </div>
    <button @click="isUserLoggedIn = !isUserLoggedIn">{{ buttonText }}</button>
  </div>
</template>
