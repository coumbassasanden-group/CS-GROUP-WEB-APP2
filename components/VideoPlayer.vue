<template>
  <div class="video-wrapper">
    <div class="video-header">
      <h2 class="video-title">{{ t('about.video.title') }}</h2>
    </div>
    <div class="video-container" style="margin-top: -5%;">
      <iframe
        src="https://www.youtube.com/embed/vdvGBJW7VFs?si=OwNjpQbabklUCD-h&rel=0&autoplay=1&mute=1&loop=1&playlist=vdvGBJW7VFs"
        title="Nous découvrir en vidéo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
