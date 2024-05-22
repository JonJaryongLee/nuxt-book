<template>
  <div>
    <BaseBanner bannerText="은행 지도" backgroundColor="#e47643" />
    <div class="page">
      <MapSide />
      <div class="img-wrapper">
        <img src="~/assets/images/fake-map.png" alt="fake-map" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.img-wrapper {
  margin: 50px;
}

@media (max-width: 430px) {
  .page {
    display: block;
  }
  .img-wrapper {
    margin-left: 0;
  }
  .img-wrapper > img {
    height: 300px;

  }
}
</style>
