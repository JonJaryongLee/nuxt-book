<template>
  <div>
    <header>
      <div class="auth-link-container">
        <RouterLink class="login-link" :to="{ path: '/login' }"
          >로그인</RouterLink
        >
        |
        <RouterLink class="signup-link" :to="{ path: '/signup' }"
          >회원가입</RouterLink
        >
      </div>
      <el-divider />
      <div class="menu-header">
        <div class="logo-svg-wrapper">
          <RouterLink :to="{ path: '/' }">
            <img src="~/assets/images/logo.svg" alt="로고" />
          </RouterLink>
        </div>
        <nav class="menu-nav">
          <ul>
            <li>
              <RouterLink :to="{ path: '/compare' }">예금비교</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ path: '/calc' }">환율계산기</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ path: '/map' }">은행 지도</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ path: '/articles' }">게시판</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.auth-link-container {
  margin-top: 1.5rem;
  display: flex;
  justify-content: end;
}
.login-link,
.signup-link {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.menu-header {
  display: flex;
  justify-content: space-between;
}
.logo-svg-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-svg-wrapper img {
  height: 50px;
}
.menu-nav > ul {
  display: flex;
  justify-content: space-between;
  width: 500px;
  color: gray;
  font-weight: bold;
  font-size: 1.5rem;
}
.main {
  margin-top: 10px;
}

@media (max-width: 430px) {
  .logo-svg-wrapper img {
    height: 20px;
  }
  .menu-nav > ul {
    font-size: 0.6rem;
    width: 180px;
  }
}
</style>
