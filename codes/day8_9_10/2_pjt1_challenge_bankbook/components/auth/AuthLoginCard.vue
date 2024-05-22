<script setup>
const username = ref("");
const password = ref("");

function goToMain() {
  return navigateTo({
    path: "/",
  });
}

async function loginHandler() {
  if (username.value.trim() === "") {
    alert("아이디가 입력되지 않았습니다.");
    return;
  } else if (password.value.trim() === "") {
    alert("패스워드가 입력되지 않았습니다.");
    return;
  }
  console.log(`id: ${username.value}`);
  console.log(`password: ${password.value}`);
  console.log("로그인 기능 개발중");
}
</script>

<template>
  <div class="login">
    <BaseCard class="card">
      <h2 class="title">로그인</h2>
      <div class="username-input-container">
        <p>Username</p>
        <el-input v-model="username" />
        <p class="caption">(필수) 유저이름을 입력해주세요.</p>
      </div>
      <div class="password-input-container">
        <p>Password</p>
        <el-input v-model="password" type="password" />
        <p class="caption">(필수) 비밀번호를 입력해주세요.</p>
      </div>
      <div class="btns-container">
        <el-button type="primary" size="large" @click="loginHandler"
          >로그인</el-button
        >
        <el-button type="danger" size="large" @click="goToMain">취소</el-button>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
.login {
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  width: 40%;
}
.title {
  text-align: center;
}
.username-input-container,
.password-input-container {
  margin-bottom: 50px;
}
.btns-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 430px) {
  .card {
    width: 80%;
  }
}
</style>
