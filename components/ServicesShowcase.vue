<template>
  <section class="services-showcase">
    <div class="showcase-background"></div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4" v-for="service in showcaseServices" :key="service.name">
          <div class="showcase-card" :class="service.cardClass">
            <div class="showcase-card-inner">
              <div class="showcase-logo-container">
                <img :src="service.logo" :alt="service.name" class="showcase-logo">
              </div>
              <h3 class="showcase-title" :class="service.titleClass">{{ service.name }}</h3>
              <p class="showcase-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const showcaseServices = computed(() => [
  {
    name: t('services.conseil.name'),
    cardClass: 'conseil-showcase',
    titleClass: 'conseil-title',
    logo: '/images/logo-cs-conseil.png',
    description: t('services.conseil.description')
  },
  {
    name: t('services.finance.name'),
    cardClass: 'finance-showcase',
    titleClass: 'finance-title',
    logo: '/images/logo-cs-finance.png',
    description: t('services.finance.description')
  },
  {
    name: t('services.tech.name'),
    cardClass: 'tech-showcase',
    titleClass: 'tech-title',
    logo: '/images/logo-cs-tech.png',
    description: t('services.tech.description')
  }
])
</script>

<style scoped>
/* Force responsive behavior on mobile */
@media (max-width: 767px) {
  .services-showcase :deep(.row) {
    display: block !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  
  .services-showcase :deep(.col-12),
  .services-showcase :deep(.col-lg-4),
  .services-showcase :deep(.col-md-6) {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-bottom: 20px !important;
  }
  
  .showcase-card {
    width: 100% !important;
  }
}
</style>
