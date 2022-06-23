import { FunctionalComponent } from 'vue'
import { ICurrency } from '~/types/ICurrency'

export const icons: { [key: string]: FunctionalComponent } = {
  TRY: defineAsyncComponent(
    () => import('../assets/icons/currency-try.svg?component')
  ),
  USD: defineAsyncComponent(
    () => import('../assets/icons/currency-usd.svg?component')
  ),
  EUR: defineAsyncComponent(
    () => import('../assets/icons/currency-eur.svg?component')
  ),
}

export const availableCurrencies: ICurrency = {
  USD: {
    name: 'currency.us_dollar',
    iso: 'USD',
    flag: '🇺🇸',
    icon: icons.USD,
  },
  EUR: {
    name: 'currency.euro',
    iso: 'EUR',
    flag: '🇪🇺',
    icon: icons.EUR,
  },
  TRY: {
    name: 'currency.turkish_lira',
    iso: 'TRY',
    flag: '🇪🇺',
    icon: icons.TRY,
  },
}

export const DEFAULT_CURRENCY: string = 'USD'

export function CurrencyManager() {
  // composable
  const currency = useCurrency(DEFAULT_CURRENCY)
  const currencyUserSetting = useCookie('currency')

  const getUserCurrency = (): string =>
    currencyUserSetting.value || DEFAULT_CURRENCY

  // state
  const currencySetting = useState<string>('currency.setting', () =>
    getUserCurrency()
  )

  // watchers
  watch(currencySetting, (currencySetting) => {
    currencyUserSetting.value = currencySetting
    currency.value = currencySetting
  })

  // init currency
  const init = () => {
    currencySetting.value = getUserCurrency()
  }
  currency.value = currencySetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    currencySetting,
    init,
  }
}
