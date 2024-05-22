<template>
  <div>
    <BaseBanner bannerText="회원가입" backgroundColor="#36b395" />
    <div class="signup-wrapper">
      <AuthSignupCard />
    </div>
  </div>
</template>

<style scoped>
.signup-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;
}
</style>