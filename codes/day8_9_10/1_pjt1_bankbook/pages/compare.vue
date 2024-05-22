<script setup>
const bankStore = useBankStore();
</script>

<template>
  <div>
    <BaseBanner bannerText="예금비교" backgroundColor="#75a2d3" />
    <div class="page">
      <CompareSide />
      <el-table class="table" :data="bankStore.depositRates">
        <el-table-column prop="date" label="공시제출월" />
        <el-table-column prop="bankName" label="금융회사명" />
        <el-table-column prop="productName" label="상품명" />
        <el-table-column prop="rate6" label="6개월" />
        <el-table-column prop="rate12" label="12개월" />
        <el-table-column prop="rate24" label="24개월" />
        <el-table-column prop="rate36" label="36개월" />
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.table {
  margin: 20px;
}

@media (max-width: 430px) {
  .page {
    display: block;
  }
  .table {
    margin: 0px;
  }
}
</style>
