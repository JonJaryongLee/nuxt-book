<template>
  <div>
    <el-carousel height="600px">
      <el-carousel-item class="item item1">
        <h3>Bankbook</h3>
        <p>금융상품 비교</p>
      </el-carousel-item>
      <el-carousel-item class="item item2">
        <h3>Bankbook</h3>
        <p>환율 비교</p>
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