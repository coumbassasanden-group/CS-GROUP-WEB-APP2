<template>
  <header id="header" class="header fixed-top" :class="{ scrolled: isScrolled }">
    <!-- Topbar -->
    <div class="topbar d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-none d-md-flex align-items-center">
          <i class="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@coumbassa-sanden.com">contact@coumbassa-sanden.com</a>
          </i>
          <i class="bi bi-phone d-flex align-items-center ms-4">
            <a href="tel:+2250710102943">
              <span>(+225) 07 10 10 29 43</span>
            </a>
          </i>
        </div>
        <div class="social-links d-none d-md-flex align-items-center">
          <a href="https://www.linkedin.com/company/cabinet-coumbassa-sanden/" class="linkedin">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@CoumbassaSanden" class="youtube">
            <i class="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Branding & Navigation -->
    <div class="branding d-flex align-items-center">
      <div class="container position-relative d-flex align-items-center justify-content-between">
        <NuxtLink :to="`/${locale}`" class="logo d-flex align-items-center">
          <img src="/images/logo-default.png" alt="C&S Group">
        </NuxtLink>

        <i class="mobile-nav-toggle mobile-nav-show d-lg-none bi bi-list" @click="toggleMobileNav"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-lg-none bi bi-x" :style="{ display: showMobileNav ? 'block' : 'none' }" @click="toggleMobileNav"></i>

        <nav id="navmenu" class="navmenu" :class="{ 'mobile-nav-active': showMobileNav }">
          <ul>
            <li><a href="#acceuil" :class="{ active: activeSection === 'acceuil' }">{{ locale === 'fr' ? 'Accueil' : 'Home' }}</a></li>
            <li><a href="#a-propos" :class="{ active: activeSection === 'a-propos' }">{{ locale === 'fr' ? 'À propos de nous' : 'About Us' }}</a></li>
            <li class="language-selector">
              <div 
                class="language-btn" 
                role="button"
                tabindex="0"
              >
                <span class="lang-flag">{{ languages.find(l => l.code === currentLanguage)?.flag || 'FR' }}</span>
                <span class="lang-code">{{ (languages.find(l => l.code === currentLanguage)?.code || 'fr').toUpperCase() }}</span>
                <i class="bi bi-chevron-down"></i>
              </div>
              <div class="language-dropdown">
                <div 
                  v-for="lang in languages" 
                  :key="lang.code"
                  :data-lang="lang.code"
                  :class="{ active: currentLanguage === lang.code }"
                  class="dropdown-item"
                  role="button"
                  tabindex="0"
                >
                  <span class="dropdown-flag">{{ lang.flag }}</span>
                  <span class="dropdown-name">{{ lang.name }}</span>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locale } = useLocale()

const isScrolled = ref(false)
const showMobileNav = ref(false)
const activeSection = ref('acceuil')

const languages = [
  { code: 'fr', name: 'Français', flag: 'FR' },
  { code: 'en', name: 'English', flag: 'GB' }
]

const currentLanguage = computed(() => locale.value)

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  const aproposSection = document.getElementById('a-propos')
  const accueilSection = document.getElementById('acceuil')
  
  if (!aproposSection || !accueilSection) return
  
  const scrollPosition = window.scrollY + window.innerHeight / 3
  const aproposTop = aproposSection.offsetTop
  const aproposBottom = aproposTop + aproposSection.offsetHeight
  
  if (scrollPosition >= aproposTop && scrollPosition < aproposBottom) {
    activeSection.value = 'a-propos'
  } else {
    activeSection.value = 'acceuil'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Pure vanilla JS for dropdown
  setTimeout(() => {
    const btn = document.querySelector('.language-btn')
    const dropdown = document.querySelector('.language-dropdown')
    
    console.log('Mounted - btn:', btn, 'dropdown:', dropdown)
    
    if (btn && dropdown) {
      console.log('Adding click listener to button')
      
      btn.addEventListener('click', function(e) {
        e.preventDefault()
        e.stopPropagation()
        console.log('BUTTON CLICKED!')
        dropdown.classList.toggle('show')
        console.log('Dropdown classes:', dropdown.className)
      })
      
      // Handle language change
      const items = dropdown.querySelectorAll('.dropdown-item')
      console.log('Found items:', items.length)
      items.forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault()
          e.stopPropagation()
          const lang = item.getAttribute('data-lang')
          console.log('Language clicked:', lang)
          if (lang) {
            window.location.href = `/${lang}`
          }
        })
      })
      
      // Close on outside click
      document.addEventListener('click', function(e) {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.remove('show')
        }
      })
    }
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
