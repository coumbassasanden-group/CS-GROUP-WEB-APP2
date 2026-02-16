<template>
  <section id="a-propos" class="about section">
    <div class="about-top-bar"></div>
    
    <div class="container section-title" data-aos="fade-up" data-aos-once="true">
      <h2>{{ locale === 'fr' ? 'À propos de nous' : 'About Us' }}</h2>
      <div class="title-decoration"></div>
      <p class="section-description">{{ locale === 'fr' ? 'Coumbassa & Sanden Group est un groupe pluridisciplinaire réunissant des expertises en conseil juridique, fiscal, comptable, finance, tech et digital.' : 'Coumbassa & Sanden Group is a multidisciplinary group bringing together expertise in legal, tax, accounting, finance, tech and digital consulting.' }}</p>
    </div>

    <div class="container">
      <h3 class="cs-fs-22">
        {{ locale === 'fr' ? 'Nous croyons que l\'expertise, l\'écoute et l\'innovation sont les clés d\'une performance durable.' : 'We believe that expertise, listening and innovation are the keys to sustainable performance.' }}
      </h3>

      <div class="about-grid" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
        <div class="about-image-wrapper">
          <img src="/images/group.png" class="img-fluid about-image" alt="COUMBASSA & SANDEN GROUP">
        </div>
        
        <div class="about-video-section">
          <h3 class="video-section-title">{{ locale === 'fr' ? 'Nous découvrir en vidéo' : 'Discover us in video' }}</h3>
          <div class="about-video-wrapper">
            <div class="video-container">
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
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-row" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
        <div class="stats-container-black">
          <div class="stat-box">
            <div class="stat-number">15+</div>
            <div class="stat-title">{{ locale === 'fr' ? 'Années d\'expérience' : 'Years of experience' }}</div>
          </div>
          <div class="stat-divider-gold"></div>
          <div class="stat-box">
            <div class="stat-number">250+</div>
            <div class="stat-title">{{ locale === 'fr' ? 'Dossiers, travaux et projets' : 'Files, works and projects' }}</div>
          </div>
          <div class="stat-divider-gold"></div>
          <div class="stat-box">
            <div class="stat-number">20+</div>
            <div class="stat-title">{{ locale === 'fr' ? 'Collaborateurs, consultants et partenaires' : 'Collaborators, consultants and partners' }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useLocale()
</script>
