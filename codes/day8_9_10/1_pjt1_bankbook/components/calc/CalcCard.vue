<script setup>
const userInputNumber = ref(0);
const selectedCurrency = ref("미국 달러");
const result = ref(0);
</script>

<template>
  <div>
    <BaseCard>
      <el-input
        class="input-wrapper"
        v-model="userInputNumber"
        type="number"
        placeholder="금액을 입력하세요"
      >
        <template #prepend>
          <el-select v-model="selectedCurrency" style="width: 115px">
            <el-option label="미국 달러" value="미국 달러" />
            <el-option label="유로" value="유로" />
            <el-option label="일본 옌" value="일본 옌" />
            <el-option label="위안화" value="위안화" />
            <el-option label="영국 파운드" value="영국 파운드" />
          </el-select>
        </template>
      </el-input>
      <el-input class="result-wrapper" type="number" v-model="result" />
    </BaseCard>
  </div>
</template>

<style scoped>
.input-wrapper {
  margin-bottom: 20px;
}
</style>
