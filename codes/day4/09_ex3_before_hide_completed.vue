<script setup>
const todos = [
  { id: 1, text: "HTML 배우기", done: true },
  { id: 2, text: "JavaScript 배우기", done: true },
  { id: 3, text: "Vue 배우기", done: false },
];
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
    <button>토글</button>
  </div>
</template>
