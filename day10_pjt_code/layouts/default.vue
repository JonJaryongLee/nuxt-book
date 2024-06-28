<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <NuxtLink :to="{ path: '/' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">홈으로</NuxtLink>
        <NuxtLink :to="{ path: '/articles' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">게시판</NuxtLink>
        <NuxtLink :to="{ path: '/articles/create' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">게시글 생성</NuxtLink>
      </div>
    </div>
  </nav>
  <slot />
</template>
