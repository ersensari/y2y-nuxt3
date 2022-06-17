<template>
  <TransitionRoot appear>
    <TransitionChild
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-300 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <Suspense>
        <img :src="`../assets/icons/${icon}.svg?component`" v-bind="$attrs" />
      </Suspense>
    </TransitionChild>
  </TransitionRoot>
</template>
<script lang="ts" setup>
defineProps<{ icon: string }>()
</script>
