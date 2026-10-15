<template>
  <Teleport to="body">
    <Transition name="site-popup">
      <div
        v-if="popup && visible"
        class="site-popup-overlay"
        role="dialog"
        aria-modal="true"
        :aria-label="popup.title"
        @click.self="close"
      >
        <div class="site-popup-content">
          <button type="button" class="site-popup-close" :aria-label="isEnglish ? 'Close' : 'Fermer'" @click="close">
            <span aria-hidden="true">✕</span>
          </button>
          <a
            v-if="popup.link_url"
            :href="popup.link_url"
            :target="linkTarget"
            :rel="linkTarget === '_blank' ? 'noopener noreferrer' : undefined"
            @click="close"
          >
            <img :src="popup.image_url" :alt="popup.title" class="site-popup-img" />
          </a>
          <img v-else :src="popup.image_url" :alt="popup.title" class="site-popup-img" />
          <a
            v-if="popup.link_url"
            :href="popup.link_url"
            :target="linkTarget"
            :rel="linkTarget === '_blank' ? 'noopener noreferrer' : undefined"
            class="site-popup-btn"
            @click="close"
          >
            {{ popup.button_label || (isEnglish ? 'Learn more' : 'En savoir plus') }}
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
/**
 * Pop-up d'accueil piloté depuis adminall (CS Dashboard › Pop-ups des sites).
 *
 * Le contenu vient de nextapi : GET /api/popups/active?site=<site>. Sans
 * pop-up actif pour ce site (204), ou en cas d'erreur, rien ne s'affiche.
 * Une fois fermé, le pop-up n'est plus montré pendant la visite (sessionStorage,
 * clé = id + updated_at : une modification dans adminall le fait réapparaître).
 * Tout se passe dans le navigateur (onMounted) : aucun appel au rendu serveur.
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type Site = 'group' | 'conseil' | 'finance' | 'tech'

interface ActivePopup {
  id: number
  title: string
  image_url: string
  link_url: string | null
  button_label: string | null
  updated_at: string | null
}

const props = defineProps<{ site: Site }>()

const STORAGE_KEY = 'cs-site-popup-dismissed'

const config = useRuntimeConfig()
const route = useRoute()

const popup = ref<ActivePopup | null>(null)
const visible = ref(false)

const isEnglish = computed(() => route.path === '/en' || route.path.startsWith('/en/'))

const popupKey = (p: ActivePopup) => `${props.site}:${p.id}:${p.updated_at || ''}`

/** Lien externe → nouvel onglet ; lien du même site → même onglet. */
const linkTarget = computed(() => {
  const url = popup.value?.link_url
  if (!url) return undefined
  try {
    return new URL(url, window.location.href).origin === window.location.origin ? undefined : '_blank'
  } catch {
    return '_blank'
  }
})

const wasDismissed = (p: ActivePopup): boolean => {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === popupKey(p)
  } catch {
    return false
  }
}

const close = () => {
  visible.value = false
  if (!popup.value) return
  try {
    window.sessionStorage.setItem(STORAGE_KEY, popupKey(popup.value))
  } catch {
    // Stockage indisponible (navigation privée, cookies bloqués) : sans effet.
  }
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && visible.value) close()
}

onMounted(async () => {
  const base = String(config.public.apiBaseUrl || 'https://nextapi.coumbassa-sanden.com').replace(/\/+$/, '')
  try {
    const res = await fetch(`${base}/api/popups/active?site=${encodeURIComponent(props.site)}`, {
      headers: { Accept: 'application/json' },
    })
    if (res.status !== 200) return
    const data = (await res.json()) as ActivePopup
    if (!data?.id || !data.image_url || wasDismissed(data)) return

    // N'ouvre la fenêtre qu'une fois l'image chargée : pas de cadre vide,
    // et rien du tout si l'image est introuvable.
    const img = new Image()
    img.onload = () => {
      popup.value = data
      visible.value = true
      window.addEventListener('keydown', onKeydown)
    }
    img.src = data.image_url
  } catch {
    // API injoignable : pas de pop-up.
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.site-popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.site-popup-content {
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  max-width: 420px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  animation: site-popup-slide-up 0.3s ease;
}

.site-popup-img {
  width: 100%;
  height: auto;
  display: block;
}

.site-popup-btn {
  display: block;
  text-align: center;
  margin: 1rem;
  padding: 0.85rem 1.5rem;
  border-radius: 10px;
  background: var(--cs-brown-color, #8b5c2e);
  color: white;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(139, 92, 46, 0.3);
  transition: all 0.3s ease;
}

.site-popup-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 92, 46, 0.4);
  opacity: 0.9;
  color: white;
}

.site-popup-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #1f2937;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 1;
}

.site-popup-close:hover {
  background: white;
}

@keyframes site-popup-slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.site-popup-enter-active,
.site-popup-leave-active {
  transition: opacity 0.3s ease;
}

.site-popup-enter-from,
.site-popup-leave-to {
  opacity: 0;
}
</style>
