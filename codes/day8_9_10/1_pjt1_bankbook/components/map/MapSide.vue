<script setup>
function searchHandler() {
  console.log("개발중");
}
</script>

<template>
  <div class="map-side">
    <p class="text1">은행 찾기</p>
    <p class="text2">검색 조건을 입력하세요</p>
    <p class="caption">광역시 / 도</p>
    <el-select placeholder="광역시/도를 선택하세요">
    </el-select>
    <p class="caption">시 / 군 / 구</p>
    <el-select placeholder="시군구를 선택하세요">
    </el-select>
    <p class="caption">은행</p>
    <el-select placeholder="국민은행">
    </el-select>

    <el-button class="confirm-btn" color="#e47643" @click="searchHandler"
      >확인</el-button
    >
  </div>
</template>

<style scoped>
.map-side {
  border-right: 1px solid rgb(224, 224, 224);
  padding-right: 10px;
}
.text1,
.text2 {
  color: #e47643;
}
.text1 {
  font-weight: bold;
}
.text2 {
  border-bottom: 1px solid #e47643;
  padding-bottom: 10px;
}
.confirm-btn {
  margin-top: 20px;
  width: 100%;
  color: white;
}

@media (max-width: 430px) {
  .map-side {
    border-right: 1px solid white;
  }
}
</style>
