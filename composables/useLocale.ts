export const useLocale = () => {
  const route = useRoute()
  const locale = computed(() => {
    const path = route.path
    if (path.startsWith('/en')) return 'en'
    return 'fr'
  })

  return { locale }
}
