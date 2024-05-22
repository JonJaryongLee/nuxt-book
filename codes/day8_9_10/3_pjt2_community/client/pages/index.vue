<template>
  <div class="page">
    <div class="main-img-container">
      <div class="main-text">
        <p>현직 교사들의</p>
        <p>정보 공유 커뮤니티</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  height: 100%;
}
.main-img-container {
  height: 90%;
  background-image: url("~/assets/img/main-img.jpg");
  background-size: cover;
}
.main-text {
  color: white;
  font-size: 2rem;
  padding: 8rem;
}

@media (max-width: 430px) {
  .main-text {
    padding: 2rem;
    text-align: center;
  }
}
</style>
