<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

import { availableCurrencies } from '~/utils/currency'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const currentStyle = toRef(props, 'type')
const currencySetting = useState<string>('currency.setting')
</script>

<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="currencySetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">{{
        $t('components.change_currency')
      }}</ListboxLabel>
      <ListboxButton
        type="button"
        :title="$t('components.change_currency')"
        class="transition-colors duration-300"
      >
        <span class="justify-center items-center flex">
          <IconMdi :icon="availableCurrencies[currencySetting].icon" />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
      >
        <ListboxOption
          v-for="curr in availableCurrencies"
          :key="curr.iso"
          :value="curr.iso"
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
              currencySetting === curr.iso,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30':
              currencySetting !== curr.iso,
          }"
        >
          <span class="text-sm mr-2">
            <component :is="`IconMdi:${curr.icon}`" />
          </span>
          <span class="flex-1 truncate">
            {{ $t(curr.name) }}
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="currencySetting"
      class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <option
        v-for="curr in availableCurrencies"
        :key="curr.iso"
        :value="curr.iso"
        class="flex items-center space-x-2"
      >
        {{ curr.flag }} {{ curr.name }} ({{ curr.iso }})
      </option>
    </select>
  </div>
</template>
