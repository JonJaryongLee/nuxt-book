<template>
  <div>
    <el-carousel height="600px">
      <el-carousel-item class="item item1">
        <h3>금융상품 비교</h3>
        <p>각 은행별 예금 금리 조회</p>
      </el-carousel-item>
      <el-carousel-item class="item item2">
        <h3>환율 비교</h3>
        <p>다양한 국가의 원화 대비 환율 제공</p>
      </el-carousel-item>
      <el-carousel-item class="item item3">
        <h3>은행 지도</h3>
        <p>여러 은행의 지점 검색</p>
      </el-carousel-item>
      <el-carousel-item class="item item4">
        <h3>커뮤니티</h3>
        <p>각종 금융 정보 소통</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.item {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.item1 {
  background-image: url("~/assets/images/visual1.jpg");
}
.item2 {
  background-image: url("~/assets/images/visual2.jpg");
}
.item3 {
  background-image: url("~/assets/images/visual3.jpg");
}
.item4 {
  background-image: url("~/assets/images/visual4.jpg");
}
.item > h3,
.item > p {
  color: white;
  z-index: 1;
}
.item > h3 {
  font-size: 5rem;
  font-style: italic;
  margin-bottom: 0;
  
}
.item > p {
  font-size: 2rem;
  margin-top: 0;
}
.item::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 0;
}
</style>