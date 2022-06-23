<template>
  <transition name="fade" mode="out-in">
    <iconComponent v-bind.sync="$attrs" />
  </transition>
</template>
<script lang="ts" setup>
const props = defineProps<{ icon: string }>()
const iconComponent = defineAsyncComponent(
  () => import(`../assets/icons/${props.icon}.svg?component`)
)
</script>
