import { useI18n } from 'vue-i18n'
import { ILocales } from '~/types/ILocales'

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: '🇺🇸',
  },
  tr: {
    name: 'Tükçe',
    iso: 'tr',
    flag: '🇹🇷',
  },
}

export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      return window ? window.navigator.language.substring(0, 2) : 'en'
    } catch (error) {
      return 'en'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
