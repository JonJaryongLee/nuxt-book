<template>
  <div>
    <MainCarousel />
    <div class="page cards">
      <MainLeftCard />
      <MainRightCard />
    </div>
  </div>
</template>

<style scoped>
.cards {
  height: 50rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media (max-width: 430px) {
  .cards {
    flex-direction: column;
  }
}
</style>
