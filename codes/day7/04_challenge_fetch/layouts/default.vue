<template>
  <h1>Fetch</h1>
  <ul>
    <li>
      <RouterLink :to="{ path: '/posts' }">
        posts 전체 목록
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ path: '/posts/lazy' }">
        (lazy) posts 전체 목록
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ path: '/posts/create' }">
        post 생성
      </RouterLink>
    </li>
  </ul>
  <slot />
</template>
