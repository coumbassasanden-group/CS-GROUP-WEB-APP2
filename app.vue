<template>
  <div>
    <NuxtPage />
    <!-- Pop-up d'accueil géré dans adminall (CS Dashboard › Pop-ups des sites) -->
    <SitePopup site="group" />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>
