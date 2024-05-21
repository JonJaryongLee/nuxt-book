<script setup>
const props = defineProps({
  name: String,
  age: Number,
});

const emit = defineEmits(["changeName", "changeAge"]);

function changeName(newName) {
  emit("changeName", newName);
}

function changeAge(newAge) {
  emit("changeAge", newAge);
}

console.log(props.name);
</script>

<template>
  <div>
    <h2>BaseChild</h2>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <button @click="changeName('tom')">이름 변경</button>
    <BaseGrandChild :name="name" @changeAge="changeAge" />
  </div>
</template>
