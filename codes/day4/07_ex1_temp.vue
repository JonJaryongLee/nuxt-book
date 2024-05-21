<script setup>
const c = ref(0);
const f = computed(() => c.value * 1.8 + 32);
</script>

<template>
  <div>
    <h1>섭씨</h1>
    <div>
      <input type="number" v-model="c" />
    </div>
    <h1>화씨</h1>
    <p>{{ f }}</p>
  </div>
</template>
