import { ThemeManager } from './theme'
import { LanguageManager } from './lang'
import { CurrencyManager } from './currency'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Y2Y NUXT3',
    author: {
      name: 'ersensari',
      link: 'https://github.com/ersensari',
    },
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  // use currency manager
  const currencyManager = CurrencyManager()

  return {
    app,
    themeManager,
    languageManager,
    currencyManager,
  }
}
