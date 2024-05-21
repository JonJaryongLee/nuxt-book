<script setup>
const navEls = [
  {
    id: 1,
    title: "홈",
    path: "/",
  },
  {
    id: 2,
    title: "게시판",
    path: "/board",
  },
  {
    id: 3,
    title: "회사 소개",
    path: "/about",
  },
];
</script>

<template>
  <div>
    <ul>
      <li v-for="el in navEls" :key="el.id">
        <RouterLink :to="{ path: el.path }">{{ el.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
