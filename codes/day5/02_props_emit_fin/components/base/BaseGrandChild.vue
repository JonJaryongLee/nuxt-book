<script setup>
const props = defineProps({
  name: String,
});

const emit = defineEmits(["changeAge"]);

function changeAge(newAge) {
  emit("changeAge", newAge);
}
</script>

<template>
  <div>
    <h3>BaseGrandChild</h3>
    <p>{{ name }}</p>
    <button @click="changeAge(1)">나이를 1로 변경</button>
  </div>
</template>
