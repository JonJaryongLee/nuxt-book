<script setup>
const hideCompleted = ref(false);
const todos = [
  { id: 1, text: "HTML 배우기", done: true },
  { id: 2, text: "JavaScript 배우기", done: true },
  { id: 3, text: "Vue 배우기", done: false },
];
const filteredTodos = computed(() =>
  hideCompleted.value ? todos.filter((todo) => !todo.done) : todos
);
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">토글</button>
  </div>
</template>
