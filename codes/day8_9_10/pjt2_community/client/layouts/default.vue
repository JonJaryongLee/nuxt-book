<template>
  <div class="default-template">
    <header>
      <BaseHeader />
    </header>
    <nav>
      <BaseNav />
    </nav>
    <main>
      <slot />
    </main>
    <footer>
      <BaseFooter />
    </footer>
  </div>
</template>

<style scoped>
.default-template {
  display: grid;
  grid-template-rows: 100px 50px 8fr 1fr;
}
</style>
