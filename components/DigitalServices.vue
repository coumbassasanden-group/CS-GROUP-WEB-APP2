<template>
  <div class="services-container">
    <div class="container section-title" data-aos="fade-up" data-aos-once="true">
      <h2>{{ locale === 'fr' ? 'Nos services digitaux' : 'Our Digital Services' }}</h2>
      <div class="title-decoration"></div>
    </div>

    <div class="services-grid">
      <div 
        v-for="service in digitalServices" 
        :key="service.name"
        class="service-card"
        :class="service.cardClass"
        data-aos="fade-up"
        :data-aos-delay="service.delay"
        data-aos-once="true"
      >
        <div class="card-logo">
          <img :src="service.logo" :alt="service.name" :style="service.logoStyle">
        </div>
        <div class="card-description">{{ service.description }}</div>
        <div class="card-footer">
          <a 
            v-if="service.url" 
            :href="service.url" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="learn-more"
            :class="service.btnClass"
          >
            {{ locale === 'fr' ? 'En savoir plus' : 'Learn more' }}
          </a>
          <button v-else class="learn-more" :class="service.btnClass">
            {{ locale === 'fr' ? 'En savoir plus' : 'Learn more' }}
          </button>
        </div>
        <div class="card-accent" :class="service.accentClass"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useLocale()

const digitalServices = computed(() => {
  const isFr = locale.value === 'fr'
  return [
    {
      name: 'Alt Connect',
      cardClass: 'connect-card',
      btnClass: 'connect-btn',
      accentClass: 'connect-accent',
      logo: '/images/connect.png',
      logoStyle: 'height: 100%;',
      description: isFr ? 'Plateforme de mise en relation entre professionnels du monde juridique en Afrique, facilitant la collaboration et l\'accès aux compétences' : 'Platform connecting legal professionals in Africa, facilitating collaboration and access to skills',
      url: 'https://altconnect.africa/login-user/',
      delay: '500'
    },
    {
      name: 'Alt Digit',
      cardClass: 'digit-card',
      btnClass: 'digit-btn',
      accentClass: 'digit-accent',
      logo: '/images/alt-digit.png',
      logoStyle: '',
      description: isFr ? 'Plateforme pour la gestion intelligente et automatisée de vos contrats (en cours de développement)' : 'Platform for intelligent and automated contract management (under development)',
      url: null,
      delay: '400'
    },
    {
      name: 'Alt News',
      cardClass: 'news-card',
      btnClass: 'news-btn',
      accentClass: 'news-accent',
      logo: '/images/alt-news.png',
      logoStyle: '',
      description: isFr ? 'Service d\'informations et d\'actualités juridiques et fiscales en Afrique' : 'Legal and tax news and information service in Africa',
      url: 'https://conseil.coumbassa-sanden.com/alt-news/',
      delay: '300'
    }
  ]
})
</script>
