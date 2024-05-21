<script setup>
const text = ref("???");
function changeText1() {
  text.value = "짜잔";
}
function changeText2(newText) {
  text.value = newText;
}
</script>

<template>
  <div>
    <p>{{ text }}</p>
    <button @click="changeText1">함수 분리</button>
    <button @click="changeText2('하이')">인자 설정</button>
  </div>
</template>
