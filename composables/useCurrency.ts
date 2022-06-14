import { WritableComputedRef } from '@vue/runtime-dom'

export const useCurrency = (cur: string): WritableComputedRef<string> => {
  const currency = ref<string>(cur)
  return computed({
    get() {
      return currency.value
    },
    set(value) {
      currency.value = value
    },
  })
}
