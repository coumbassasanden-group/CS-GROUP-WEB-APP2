<template>
  <Teleport to="body">
    <Transition name="popup-rentree">
      <div v-if="visible" class="popup-rentree-overlay" @click.self="close">
        <div class="popup-rentree-content">
          <button class="popup-rentree-close" @click="close" aria-label="Fermer">
            <span>✕</span>
          </button>
          <img
            src="/images/cs-rentree-portes-ouvertes.jpg"
            alt="Rentrée - Journées Portes Ouvertes"
            class="popup-rentree-img"
          />
          <a
            :href="formUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="popup-rentree-btn"
            @click="close"
          >
            Inscrivez-vous
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const formUrl = 'https://forms.gle/aD5qSBoM8ruLTA5n7'
const visible = ref(false)

const close = () => {
  visible.value = false
}

/**
 * Affiché à chaque visite, sur toutes les pages.
 *
 * Plus de garde « une fois par jour » : le pop-up reparaît à chaque arrivée
 * sur le site. Le déclenchement se fait au montage et non sur le changement
 * de route, pour qu'une navigation interne — accueil, services, retour à
 * l'accueil — ne le rejoue pas trois fois dans la même visite.
 *
 * onMounted ne s'exécute que dans le navigateur : il n'y a donc aucun accès
 * à localStorage à protéger du rendu serveur.
 */
onMounted(() => {
  visible.value = true
})
</script>

<style scoped>
.popup-rentree-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.popup-rentree-content {
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  max-width: 420px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: popup-rentree-slide-up 0.3s ease;
}

.popup-rentree-img {
  width: 100%;
  height: auto;
  display: block;
}

.popup-rentree-btn {
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

.popup-rentree-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 92, 46, 0.4);
  opacity: 0.9;
  color: white;
}

.popup-rentree-close {
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

.popup-rentree-close:hover {
  background: white;
}

@keyframes popup-rentree-slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.popup-rentree-enter-active,
.popup-rentree-leave-active {
  transition: opacity 0.3s ease;
}

.popup-rentree-enter-from,
.popup-rentree-leave-to {
  opacity: 0;
}
</style>
