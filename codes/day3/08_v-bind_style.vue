<script setup>
const selectedColor = ref("");
function setSelectedColor(newColor) {
  selectedColor.value = newColor;
}
</script>

<template>
  <div>
    <h1 :style="{ color: selectedColor }">color</h1>
    <button @click="setSelectedColor('red')">빨강</button>
    <button @click="setSelectedColor('blue')">파랑</button>
  </div>
</template>
