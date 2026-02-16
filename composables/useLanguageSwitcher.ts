export const useLanguageSwitcher = () => {
  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const router = useRouter()

  const availableLocales = [
    { code: 'fr', name: 'Français', flag: 'FR' },
    { code: 'en', name: 'English', flag: 'GB' }
  ]

  const currentLocale = computed(() => {
    return availableLocales.find(l => l.code === locale.value) || availableLocales[0]
  })

  const switchLanguage = async (newLocale: string) => {
    if (newLocale === locale.value) return

    try {
      const path = switchLocalePath(newLocale)
      await router.push(path)
    } catch (error) {
      console.error('Error switching language:', error)
    }
  }

  return {
    locale,
    availableLocales,
    currentLocale,
    switchLanguage
  }
}
