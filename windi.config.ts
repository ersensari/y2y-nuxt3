import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// colors
import colors from 'windicss/colors'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'

const MyTheme = {
  colors: {
    green: {
      DEFAULT: '#3BA676',
      '50': '#B4E4CF',
      '100': '#A5DFC5',
      '200': '#87D4B2',
      '300': '#69CA9E',
      '400': '#4BBF8B',
      '500': '#3BA676',
      '600': '#2C7D59',
      '700': '#1E533B',
      '800': '#0F2A1E',
      '900': '#000000',
    },
  },
}

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
    ],
  },
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: colors.blue,
        green: MyTheme.colors.green,
      },
      fontFamily: {
        sans: ['GT Walsheim Pro'],
        serif: ['"Cooper Lt BT"'],
        display: ['"Cooper Lt BT"'],
        body: ['GT Walsheim Pro'],
      },
      fontSize: {
        hero: ['60px', '110%'],
        heading: ['40px', '120%'],
        header: ['18px', '100%'],
        body: ['18px', '145%'],
        body2: ['16px', '135%'],
        button: ['20px', '100%'],
        footnote: ['12px', '124%'],
        h1: ['48px', '124%'],
        h2: ['36px', '124%'],
        h3: ['24px', '124%'],
        h4: ['20px', '120%'],
      },
    },
  },
  shortcuts: {
    'light-img': 'block dark:hidden',
    'dark-img': 'hidden dark:block',
  },
  plugins: [
    // filters plugin require for navbar blur
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin,
  ] as Plugin[],
})
