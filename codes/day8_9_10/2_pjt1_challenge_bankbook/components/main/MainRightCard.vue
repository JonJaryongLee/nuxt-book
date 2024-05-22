<script setup>
function goToCompare() {
  return navigateTo({
    path: "/compare",
  });
}
</script>

<template>
  <div>
    <BaseCard class="card">
      <div class="card-content">
        <p class="content1">예금금리비교</p>
        <p class="content2">은행별 상품들을 한 눈에!</p>
        <div class="content3">
          <p>각 은행별 사람들이 추천하는</p>
          <p>정기 예금, 적금 상품들을 한 눈에 파악하기</p>
        </div>
        <el-button class="btn" size="large" color="#30364e" @click="goToCompare"
          >Bankbook 예금금리비교</el-button
        >
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
.card {
  height: 450px;
  width: 450px;
}
.card-content {
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content1 {
  font-weight: bold;
  font-size: 2rem;
  color: #211c1c;
  margin: 0;
}
.content2 {
  font-weight: bold;
  color: #848799;
  font-size: 2rem;
}
.content3 > p {
  text-align: center;
  color: #b4b6b6;
}
.btn {
  margin-top: 20px;
}

@media (max-width: 430px) {
  .card {
    height: 300px;
    width: 300px;
  }
  .card-content {
    height: 250px;
  }
  .content1 {
    font-size: 1rem;
  }
  .content2 {
    font-size: 1rem;
  }
}
</style>
