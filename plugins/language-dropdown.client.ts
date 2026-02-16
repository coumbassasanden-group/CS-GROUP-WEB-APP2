export default defineNuxtPlugin(() => {
  if (process.client) {
    // Wait for DOM to be ready
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const btn = document.querySelector('.language-btn')
        const dropdown = document.querySelector('.language-dropdown')
        
        if (btn && dropdown) {
          console.log('Language dropdown initialized')
          
          btn.addEventListener('click', (e) => {
            e.stopPropagation()
            console.log('Button clicked!')
            dropdown.classList.toggle('show')
          })
          
          // Close on click outside
          document.addEventListener('click', (e) => {
            if (!btn.contains(e.target as Node) && !dropdown.contains(e.target as Node)) {
              dropdown.classList.remove('show')
            }
          })
          
          // Handle language change
          const items = dropdown.querySelectorAll('.dropdown-item')
          items.forEach(item => {
            item.addEventListener('click', (e) => {
              e.stopPropagation()
              const lang = item.getAttribute('data-lang')
              if (lang) {
                window.location.href = `/${lang}`
              }
            })
          })
        }
      }, 1000)
    })
  }
})
