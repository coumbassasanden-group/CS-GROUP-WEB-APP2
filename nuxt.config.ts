export default defineNuxtConfig({
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'C&S Group',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'C&S Group est une holding regroupant des entreprises spécialisées dans la finance, la technologie et le conseil.' },
        { name: 'keywords', content: 'C&S Group, holding, finance, technologie, conseil, COUMABASSA, SANDEN, GROUP' },
        { property: 'og:title', content: 'C&S Group | La Holding du Succès' },
        { property: 'og:description', content: 'C&S Group est une holding regroupant des entreprises spécialisées dans la finance, la technologie et le conseil.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.7.1.min.js', defer: true },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', defer: true }
      ]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  modules: [],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'https://nextapi.coumbassa-sanden.com'
    }
  }
})
