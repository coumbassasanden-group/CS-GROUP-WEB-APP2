<template>
  <div>
    <NuxtPage />
    <!--
      Pop-up d'inscription ALT CONNECT, identique à celui de
      conseil.coumbassa-sanden.com et tech.coumbassa-sanden.com.
      Monté ici : ce site n'a pas de layouts/, app.vue tient ce rôle.
    -->
    <PopupRentree />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>
