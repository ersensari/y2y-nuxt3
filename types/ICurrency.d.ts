import { FunctionalComponent } from 'vue'
export interface ICurrency {
  [key: string]: {
    name: string
    iso: string
    flag: string
    icon: FunctionalComponent
  }
}
