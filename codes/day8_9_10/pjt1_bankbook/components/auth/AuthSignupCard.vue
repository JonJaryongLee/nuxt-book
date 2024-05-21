<script setup>
const username = ref("");
const password1 = ref("");
const password2 = ref("");
const email = ref("");
const nickname = ref("");

function goToMain() {
  return navigateTo({
    path: "/",
  });
}

async function signupHandler() {
  if (username.value.trim() === "") {
    alert("아이디가 입력되지 않았습니다.");
    return;
  } else if (password1.value.trim() === "") {
    alert("패스워드가 입력되지 않았습니다.");
    return;
  } else if (password2.value.trim() === "") {
    alert("패스워드 확인이 입력되지 않았습니다.");
    return;
  } else if (password1.value !== password2.value) {
    alert("두 비밀번호가 일치하지 않습니다.");
    return;
  }
  console.log(`id: ${username.value}`);
  console.log(`password1: ${password1.value}`);
  console.log(`password2: ${password2.value}`);
  console.log(`email: ${email.value}`);
  console.log(`nickname: ${nickname.value}`);
  console.log("회원가입 기능 개발중");
}
</script>

<template>
  <div class="signup">
    <BaseCard class="card">
      <h2 class="title">회원가입</h2>
      <div class="username-input-container">
        <p>Username</p>
        <el-input v-model="username" />
        <p class="caption">(필수) 유저이름을 입력해주세요.</p>
      </div>
      <div class="password-input-container">
        <p>Password</p>
        <el-input v-model="password1" type="password" />
        <p class="caption">(필수) 비밀번호를 입력해주세요.</p>
      </div>
      <div class="password-confirm-container">
        <p>Password Confirm</p>
        <el-input v-model="password2" type="password" />
        <p class="caption">(필수) 동일한 비밀번호를 입력해주세요.</p>
      </div>
      <div class="email-container">
        <p>email</p>
        <el-input v-model="email" type="email" />
        <p class="caption">(옵션) 이메일을 입력해주세요.</p>
      </div>
      <div class="nickname-container">
        <p>nickname</p>
        <el-input v-model="nickname" />
        <p class="caption">(옵션) 닉네임을 입력해주세요.</p>
      </div>
      <div class="btns-container">
        <el-button type="primary" size="large" @click="signupHandler"
          >회원가입</el-button
        >
        <el-button type="danger" size="large" @click="goToMain">취소</el-button>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
.signup {
  width: 500px;
}
.title {
  text-align: center;
}
.username-input-container,
.password-input-container,
.password-confirm-container,
.email-container,
.nickname-container {
  margin-bottom: 50px;
}
.btns-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 430px) {
  .signup {
    width: 350px;
  }
}
</style>
