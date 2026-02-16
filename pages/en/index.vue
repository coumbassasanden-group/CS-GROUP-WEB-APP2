<template>
  <div class="index-page">
    <Header />
    <main class="main">
      <Hero />
      <DigitalServices />
      <About />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>
