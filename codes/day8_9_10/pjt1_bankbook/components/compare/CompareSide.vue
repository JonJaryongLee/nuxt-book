<script setup>
const selectedBank = ref(0);
const selectedCycle = ref("total");
const bankStore = useBankStore();

function searchHandler() {
  console.log("개발중");
}
</script>

<template>
  <div class="compare-side">
    <p class="text1">정기예금</p>
    <p class="text2">검색 조건을 입력하세요</p>
    <p class="caption">은행을 선택하세요</p>
    <el-select v-model="selectedBank">
      <el-option
        v-for="bank in bankStore.banks"
        :key="bank.id"
        :label="bank.name"
        :value="bank.id"
      />
    </el-select>
    <p class="caption">예치기간</p>
    <el-select v-model="selectedCycle">
      <el-option label="전체기간" value="total" />
      <el-option label="6개월" value="6" />
      <el-option label="12개월" value="12" />
      <el-option label="24개월" value="24" />
      <el-option label="36개월" value="36" />
    </el-select>
    <el-button class="confirm-btn" color="#688bb3" @click="searchHandler">확인</el-button>
  </div>
</template>

<style scoped>
.compare-side {
  border-right: 1px solid rgb(224, 224, 224);
  padding-right: 10px;
}
.text1,
.text2 {
  color: #7d9bbd;
}
.text1 {
  font-weight: bold;
}
.text2 {
  border-bottom: 1px solid #7d9bbd;
  padding-bottom: 10px;
}
.confirm-btn {
  margin-top: 20px;
  width: 100%;
  color: white;
}

@media (max-width: 430px) {
  .compare-side {
    border-right: 1px solid white;
  }
}
</style>
