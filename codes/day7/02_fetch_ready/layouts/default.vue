<template>
  <h1>Fetch</h1>
  <ul>
    <li>
      <RouterLink :to="{ path: '/todos' }">
        todos 전체 목록
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ path: '/todos/lazy' }">
        (lazy) todos 전체 목록
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ path: '/todos/create' }">
        todo 생성
      </RouterLink>
    </li>
  </ul>
  <slot />
</template>
