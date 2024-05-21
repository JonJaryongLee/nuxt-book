<script setup>
const menus = [
  { id: 1, name: "짜장면", price: 6000, isPossible: true },
  { id: 2, name: "짬뽕", price: 7000, isPossible: true },
  { id: 3, name: "탕수육", price: 18000, isPossible: false },
  { id: 4, name: "군만두", price: 5000, isPossible: true },
];
</script>

<template>
  <div>
    <ul>
      <li v-for="menu in menus" :key="menu.id" v-if="menu.isPossible">
        {{ menu.name }}
      </li>
    </ul>
  </div>
</template>
