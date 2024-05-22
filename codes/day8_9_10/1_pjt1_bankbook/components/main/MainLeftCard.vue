<template>
  <div>
    <BaseCard class="card">
      <div class="img-wrapper">
        <img
          class="card-img"
          src="~/assets/images/main-image-compare.png"
          alt="메인 왼쪽카드 그림"
          height="400"
        />
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
.card {
  height: 450px;
  width: 450px;
}
.card-img {
  height: 400px;
}

@media (max-width: 430px) {
  .card {
    height: 300px;
    width: 300px;
  }
  .card-img {
    height: 250px;
  }
}
</style>
