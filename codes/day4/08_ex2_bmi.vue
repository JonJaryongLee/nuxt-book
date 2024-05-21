<script setup>
const height = ref(0);
const weight = ref(0);
const bmiResult = computed(() => {
  const heightMeter = height.value / 100;
  const bmi = weight.value / (heightMeter * heightMeter);
  if (bmi < 18.5) return "저체중";
  else if (bmi < 23) return "정상";
  else if (bmi < 25) return "과체중";
  else if (bmi >= 25) return "비만";
  else return "계산불가";
});
</script>

<template>
  <div>
    <h1>BMI 계산기</h1>
    <div>
      신장:
      <input type="number" v-model="height" />
    </div>
    <div>
      체중:
      <input type="number" v-model="weight" />
    </div>
    <div>{{ bmiResult }}</div>
  </div>
</template>
