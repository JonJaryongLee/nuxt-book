<template>
  <div>
    <h1>라이브러리 소개</h1>
    <ul>
      <li>
        <RouterLink :to="{ path: '/' }">다국어 테스트</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ path: '/google-font' }">폰트 비교</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ path: '/image-test' }">이미지 모듈 사용하기</RouterLink>
      </li>
    </ul>
    <hr>
    <slot/>

  </div>
</template>