<script setup lang="ts">
const applicationName = useAppConfig().appName;
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 6,
  },
});
</script>

<template>
  <div>
    <NuxtLink to="/" class="flex flex-shrink-0 items-center" id="logo">
      <nuxt-img class="block w-auto lg:hidden" :class="size ? 'h-' + size : 'h-6'" src="assets/helpr-logo-light.svg" alt="Helpr Logo" />
      <nuxt-img class="hidden w-auto lg:block" :class="size ? 'h-' + size : 'h-6'" src="assets/helpr-logo-light.svg" alt="Helpr Logo" />
      <span class="text-md font-bold text-primary ml-2" v-if="isText">
        {{ applicationName }}
      </span>
    </NuxtLink>
  </div>
</template>
