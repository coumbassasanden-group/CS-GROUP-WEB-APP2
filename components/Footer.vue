<script setup>
const { locale } = useLocale()

const email = ref('')
const isSubmitting = ref(false)
const currentYear = new Date().getFullYear()

const handleNewsletterSubmit = async () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    email.value = ''
  }, 1000)
}
</script>

<template>
    <footer class="cs-footer" data-theme="group">
        <!-- Newsletter Section -->
        <div class="cs-newsletter-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <div class="cs-newsletter-content">
                            <div class="cs-newsletter-icon">
                                <i class="fas fa-envelope-open"></i>
                            </div>
                            <div class="cs-newsletter-text">
                                <h3 class="cs-newsletter-title">{{ locale === 'fr' ? 'Restez informés de nos actualités' : 'Stay informed of our news' }}</h3>
                                <p class="cs-newsletter-desc">{{ locale === 'fr' ? 'Recevez nos dernières nouvelles et conseils directement dans votre boîte mail' : 'Receive our latest news and advice directly in your mailbox' }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cs-newsletter-form">
                            <form @submit.prevent="handleNewsletterSubmit">
                                <div class="cs-input-group">
                                    <input 
                                        type="email" 
                                        v-model="email"
                                        class="cs-newsletter-input"
                                        :placeholder="locale === 'fr' ? 'Votre adresse email' : 'Your email address'"
                                        :disabled="isSubmitting"
                                        required
                                    >
                                    <button 
                                        type="submit" 
                                        class="cs-newsletter-btn"
                                        :disabled="isSubmitting"
                                    >
                                        <i class="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Footer Content -->
        <div class="cs-footer-main">
            <div class="container">
                <div class="cs-footer-grid-horizontal">
                    <!-- Company Info -->
                    <div class="cs-footer-col">
                        <div class="cs-footer-brand">
                            <div class="cs-brand-icon">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                            <div class="cs-brand-logo">
                                <img src="/images/Group_blanc.png" alt="CS Group" class="cs-logo">
                            </div>
                        </div>
                        <p class="cs-footer-desc">
                            {{ locale === 'fr' ? 'Conseil juridique et fiscal' : 'Legal and tax consulting' }}
                        </p>
                        <div class="cs-footer-address">
                            <div class="cs-address-item">
                                <i class="fas fa-map-marker-alt cs-accent-color"></i>
                                <span>{{ locale === 'fr' ? 'Avenue Noël NEMIN, Zone 4 - Marcory ABIDJAN - Côte d\'ivoire' : 'Avenue Noël NEMIN, Zone 4 - Marcory ABIDJAN - Ivory Coast' }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="cs-footer-col">
                        <h5 class="cs-footer-title">{{ locale === 'fr' ? 'Liens utiles' : 'Useful links' }}</h5>
                        <ul class="cs-footer-menu">
                            <li><a href="#about">{{ locale === 'fr' ? 'Contactez-nous' : 'Contact us' }}</a></li>
                            <li><a href="#services">{{ locale === 'fr' ? 'Nos services' : 'Our services' }}</a></li>
                            <li><a href="https://conseil.coumbassa-sanden.com/stationery" target="_blank">{{ locale === 'fr' ? 'Papeterie' : 'Stationery' }}</a></li>
                            <li><a href="https://conseil.coumbassa-sanden.com/news" target="_blank">{{ locale === 'fr' ? 'Actualités' : 'News' }}</a></li>
                            <li><a href="https://conseil.coumbassa-sanden.com/alt-news" target="_blank">ALT News</a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div class="cs-footer-col">
                        <h5 class="cs-footer-title">{{ locale === 'fr' ? 'Nos contacts' : 'Our contacts' }}</h5>
                        <ul class="cs-footer-contact">
                            <li>
                                <i class="fas fa-envelope cs-accent-color"></i>
                                <a href="mailto:contact@coumbassa-sanden.com">contact@coumbassa-sanden.com</a>
                            </li>
                            <li>
                                <i class="fas fa-phone cs-accent-color"></i>
                                <a href="tel:+22507101029433">(+225) 07 10 10 29 43</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Social Media -->
                    <div class="cs-footer-col">
                        <h5 class="cs-footer-title">{{ locale === 'fr' ? 'Nos réseaux sociaux' : 'Our social networks' }}</h5>
                        <div class="cs-social-links">
                            <a href="https://www.linkedin.com/company/cabinet-coumbassa-sanden/" target="_blank" rel="noopener" class="cs-social-link">
                                <i class="fab fa-linkedin"></i>
                                <span>cabinet-coumbassa-sanden</span>
                            </a>
                            <a href="https://www.youtube.com/@CoumbassaSanden" target="_blank" rel="noopener" class="cs-social-link">
                                <i class="fab fa-youtube"></i>
                                <span>@CoumbassaSanden</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Companies Section -->
        <div class="cs-companies-section">
            <div class="container">
                <h5 class="cs-companies-title">{{ locale === 'fr' ? 'Voir aussi' : 'See also' }}</h5>
                <div class="cs-companies-grid">
                    <a href="https://conseil.coumbassa-sanden.com" target="_blank" rel="noopener noreferrer">
                        <div class="cs-company-card">
                            <div class="cs-company-logo">
                                <img src="/images/logo-cs-conseil.png" alt="CS Conseil">
                            </div>
                            <p class="cs-company-desc">{{ locale === 'fr' ? 'Conseil juridique et fiscal' : 'Legal and tax consulting' }}</p>
                        </div>
                    </a>
                    <a href="https://finance.coumbassa-sanden.com" target="_blank" rel="noopener noreferrer">
                        <div class="cs-company-card">
                            <div class="cs-company-logo">
                                <img src="/images/logo-cs-finance.png" alt="CS Finance">
                            </div>
                            <p class="cs-company-desc">{{ locale === 'fr' ? 'Finance et comptabilité' : 'Finance and accounting' }}</p>
                        </div>
                    </a>
                    <a href="https://tech.coumbassa-sanden.com" target="_blank" rel="noopener noreferrer">
                        <div class="cs-company-card">
                            <div class="cs-company-logo">
                                <img src="/images/logo-cs-tech.png" alt="CS Tech">
                            </div>
                            <p class="cs-company-desc">{{ locale === 'fr' ? 'Tech et Digital' : 'Tech and Digital' }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="cs-footer-bottom">
            <div class="container">
                <div class="cs-footer-bottom-content">
                    <p class="cs-copyright">
                        © {{ currentYear }} <strong>COUMBASSA & SANDEN GROUP</strong>. {{ locale === 'fr' ? 'Tous droits réservés' : 'All rights reserved' }}
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
