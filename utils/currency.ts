import { ICurrency } from '~/types/ICurrency'

export const availableCurrencies: ICurrency = {
  usd: {
    name: 'currency.us_dollar',
    iso: 'USD',
    flag: '🇺🇸',
    icon: 'currencyUsd',
  },
  eur: {
    name: 'currency.euro',
    iso: 'EUR',
    flag: '🇪🇺',
    icon: 'currencyEur',
  },
  trl: {
    name: 'currency.turkish_lira',
    iso: 'TRL',
    flag: '🇪🇺',
    icon: 'currencyTry',
  },
}

export const DEFAULT_CURRENCY: string = 'usd'

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
