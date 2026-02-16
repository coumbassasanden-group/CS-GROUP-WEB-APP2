<template>
  <footer class="cs-footer">
    <!-- Newsletter Section -->
    <div class="cs-newsletter-section">
      <div class="container">
        <div class="newsletter-wrapper">
          <div class="newsletter-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="newsletter-content">
            <h3 class="newsletter-title">{{ locale === 'fr' ? 'Restez informés de nos actualités' : 'Stay informed of our news' }}</h3>
            <p class="newsletter-desc">{{ locale === 'fr' ? 'Recevez nos dernières nouvelles et conseils directement dans votre boîte mail' : 'Receive our latest news and advice directly in your mailbox' }}</p>
          </div>
          <div class="newsletter-form">
            <form @submit.prevent="handleNewsletterSubmit">
              <div class="input-wrapper">
                <input
                  v-model="email"
                  type="email"
                  class="newsletter-input"
                  :placeholder="locale === 'fr' ? 'Votre adresse email' : 'Your email address'"
                  required
                >
                <button type="submit" class="newsletter-submit" :disabled="isSubmitting">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Logo & Address -->
          <div class="footer-col">
            <div class="footer-brand">
              <i class="fas fa-chevron-right brand-icon"></i>
              <img src="/images/Group_blanc.png" alt="CS Group" class="footer-logo">
            </div>
            <div class="footer-address">
              <i class="fas fa-map-marker-alt"></i>
              <span>Avenue Noël Nemin, Zone 4, Abidjan, CÔTE D'IVOIRE</span>
            </div>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h5 class="footer-title">{{ locale === 'fr' ? 'Nos contacts' : 'Our contacts' }}</h5>
            <ul class="footer-list">
              <li>
                <i class="fas fa-envelope"></i>
                <a href="mailto:contact@coumbassa-sanden.com">contact@coumbassa-sanden.com</a>
              </li>
              <li>
                <i class="fas fa-phone"></i>
                <a href="tel:+22507101029433">(+225) 07 10 10 29 43</a>
              </li>
            </ul>
          </div>

          <!-- Social Networks -->
          <div class="footer-col">
            <h5 class="footer-title">{{ locale === 'fr' ? 'Nos réseaux sociaux' : 'Our social networks' }}</h5>
            <ul class="footer-list social-list">
              <li>
                <i class="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/company/cabinet-coumbassa-sanden/" target="_blank" rel="noopener">
                  cabinet-coumbassa-sanden
                </a>
              </li>
              <li>
                <i class="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/company/coumbassa-sanden-tech/" target="_blank" rel="noopener">
                  COUMBASSA & SANDEN TECH
                </a>
              </li>
              <li>
                <i class="fab fa-youtube"></i>
                <a href="https://www.youtube.com/@CoumbassaSanden" target="_blank" rel="noopener">
                  @CoumbassaSanden
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- See Also Section - Moved inside footer-main -->
        <div class="footer-companies-inline">
          <h5 class="companies-title">{{ locale === 'fr' ? 'Voir aussi' : 'See also' }}</h5>
          <div class="companies-grid">
            <a href="https://conseil.coumbassa-sanden.com" target="_blank" rel="noopener noreferrer" class="company-card">
              <div class="company-logo">
                <img src="/images/logo-cs-conseil.png" alt="CS Conseil">
              </div>
              <p class="company-desc">{{ locale === 'fr' ? 'Conseil juridique et fiscal' : 'Legal and tax consulting' }}</p>
            </a>
            <a href="https://finance.coumbassa-sanden.com" target="_blank" rel="noopener noreferrer" class="company-card">
              <div class="company-logo">
                <img src="/images/logo-cs-finance.png" alt="CS Finance">
              </div>
              <p class="company-desc">{{ locale === 'fr' ? 'Finance et comptabilité' : 'Finance and accounting' }}</p>
            </a>
            <a href="https://tech.coumbassa-sanden.com" target="_blank" rel="noopener noreferrer" class="company-card">
              <div class="company-logo">
                <img src="/images/logo-cs-tech.png" alt="CS Tech">
              </div>
              <p class="company-desc">{{ locale === 'fr' ? 'Tech et Digital' : 'Tech and Digital' }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          © {{ currentYear }} <strong>COUMBASSA & SANDEN GROUP</strong>. {{ locale === 'fr' ? 'Tous droits réservés' : 'All rights reserved' }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { locale } = useLocale()

const email = ref('')
const isSubmitting = ref(false)
const currentYear = new Date().getFullYear()

const handleNewsletterSubmit = async () => {
  isSubmitting.value = true
  // Add newsletter submission logic here
  setTimeout(() => {
    isSubmitting.value = false
    email.value = ''
  }, 1000)
}
</script>
