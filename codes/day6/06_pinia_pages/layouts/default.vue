<template>
  <div>
    <h1>주식회사 Nuxt</h1>
    <ul>
      <li>
        <RouterLink :to="{ path: '/' }">홈</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ path: '/board' }">게시판</RouterLink>
      </li>
    </ul>
    <slot />
  </div>
</template>
