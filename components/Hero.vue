<!-- <template>
  <section id="acceuil" class="hero section">
    <div class="hero-background"></div>
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-5 justify-content-between align-items-center">
        <div class="col-lg-7 order-2 order-lg-1 d-flex flex-column text-center text-lg-start">
          <h2 class="company-title">COUMBASSA & SANDEN GROUP</h2>
          <p class="hero-description">
            {{ t('hero.description') }}
          </p>
          <div class="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
            <a href="#a-propos" class="btn-get-started">{{ t('hero.cta') }}</a>
          </div>
        </div>
        <div class="col-lg-4 order-1 order-lg-2">
          <div class="hero-image-container">
            <img src="/images/ds-nimba.png" class="img-fluid hero-image" alt="Coumbassa & Sanden Group">
          </div>
        </div>
      </div>
    </div>

    
    <div class="services-horizontal" data-aos="fade-up" data-aos-delay="200">
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.name">
            <div class="service-horizontal-card" :class="service.cardClass">
              <div class="service-horizontal-inner">
                <div class="service-horizontal-logo">
                  <img :src="service.image" :alt="service.name">
                </div>
                <div class="service-horizontal-content">
                  <h3 class="service-horizontal-title" :class="service.titleClass">{{ service.name }}</h3>
                  <p class="service-horizontal-description">{{ service.description }}</p>
                  <a :href="service.url" target="_blank" rel="noopener noreferrer" class="service-horizontal-btn">
                    {{ t('common.discover') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const services = computed(() => [
  {
    name: t('services.conseil.name'),
    cardClass: 'conseil-card',
    titleClass: 'conseil-title',
    image: '/images/logo-cs-conseil.png',
    description: t('services.conseil.description'),
    url: 'https://conseil.coumbassa-sanden.com'
  },
  {
    name: t('services.finance.name'),
    cardClass: 'finance-card',
    titleClass: 'finance-title',
    image: '/images/logo-cs-finance.png',
    description: t('services.finance.description'),
    url: 'https://finance.coumbassa-sanden.com'
  },
  {
    name: t('services.tech.name'),
    cardClass: 'tech-card',
    titleClass: 'tech-title',
    image: '/images/logo-cs-tech.png',
    description: t('services.tech.description'),
    url: 'https://tech.coumbassa-sanden.com'
  }
])
</script> -->


<template>
  <section id="acceuil" class="hero section">
    <div class="hero-background"></div>
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="hero-grid">
        <div class="hero-text-content">
          <h2 class="company-title">COUMBASSA & SANDEN GROUP</h2>
          <p class="hero-description">
            {{ locale === 'fr' ? 'Votre partenaire de confiance pour le conseil, la finance et la technologie. Nous vous accompagnons dans chaque étape de votre croissance.' : 'Your trusted partner for consulting, finance and technology. We support you at every stage of your growth.' }}
          </p>
          <div class="hero-cta">
            <a href="#a-propos" class="btn-get-started">{{ locale === 'fr' ? 'À propos de nous' : 'About Us' }}</a>
          </div>
        </div>
        <div class="hero-image-container">
          <img src="/images/ds-nimba.png" class="img-fluid hero-image" alt="Coumbassa & Sanden Group">
        </div>
      </div>
    </div>
  </section>

  <!-- Services Cards Horizontal - Outside Hero -->
  <section class="services-horizontal-section">
    <div class="services-horizontal" data-aos="fade-up" data-aos-delay="200">
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.name">
            <div class="service-horizontal-card" :class="service.cardClass">
              <div class="service-horizontal-inner">
                <div class="service-horizontal-logo">
                  <img :src="service.image" :alt="service.name">
                </div>
                <div class="service-horizontal-content">
                  <h3 class="service-horizontal-title" :class="service.titleClass">{{ service.name }}</h3>
                  <p class="service-horizontal-description">{{ service.description }}</p>
                  <a :href="service.url" target="_blank" rel="noopener noreferrer" class="service-horizontal-btn">
                    {{ locale === 'fr' ? 'Découvrir' : 'Discover' }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useLocale()

const services = computed(() => {
  const isFr = locale.value === 'fr'
  return [
    {
      name: 'COUMBASSA & SANDEN CONSEIL',
      cardClass: 'conseil-card',
      titleClass: 'conseil-title',
      image: '/images/logo-cs-conseil.png',
      description: isFr ? 'Solutions juridiques et fiscales pour votre entreprise' : 'Legal and tax solutions for your business',
      url: 'https://conseil.coumbassa-sanden.com'
    },
    {
      name: 'COUMBASSA & SANDEN FINANCE',
      cardClass: 'finance-card',
      titleClass: 'finance-title',
      image: '/images/logo-cs-finance.png',
      description: isFr ? 'Optimisez vos investissements et votre croissance' : 'Optimize your investments and growth',
      url: 'https://finance.coumbassa-sanden.com'
    },
    {
      name: 'COUMBASSA & SANDEN TECH',
      cardClass: 'tech-card',
      titleClass: 'tech-title',
      image: '/images/logo-cs-tech.png',
      description: isFr ? 'Solutions numériques pour vos transformations technologiques et digitales' : 'Digital solutions for your technological and digital transformations',
      url: 'https://tech.coumbassa-sanden.com'
    }
  ]
})
</script>