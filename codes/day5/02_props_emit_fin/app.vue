<script setup>
const name = ref("david");
const age = ref(10);

function changeAge(newAge) {
  age.value = newAge;
}

function changeName(newName) {
  name.value = newName;
}
</script>

<template>
  <div>
    <h1>app</h1>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <button @click="changeAge(age - 1)">나이를 줄이자</button>
    <BaseChild
      :name="name"
      :age="age"
      @changeName="changeName"
      @changeAge="changeAge"
    />
  </div>
</template>
