export default defineNuxtRouteMiddleware((to) => {
  // Si on est sur la racine, rediriger vers /fr
  if (to.path === '/') {
    return navigateTo('/fr')
  }
})
