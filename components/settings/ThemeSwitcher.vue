<script setup lang="ts">
import { MoonIcon } from "@heroicons/vue/24/outline";
import { useLocalStorage } from "@vueuse/core";
import ThemeCard from "~/components/settings/ThemeCard.vue";

defineProps({
  isText: {
    type: Boolean,
    default: true,
  },
  isCard: {
    type: Boolean,
    default: false,
  },
});

const premium = {
  name: "Premium",
  value: "premium",
  icon: MoonIcon,
};

const themes = [
  {
    name: "Lime",
    value: "lime",
    icon: MoonIcon,
  },
  {
    name: "Cosmos",
    value: "cosmos",
    icon: MoonIcon,
  },
  {
    name: "Ardent",
    value: "ardent",
    icon: MoonIcon,
  },
  {
    name: "Nebula",
    value: "nebula",
    icon: MoonIcon,
  },
];
</script>

<template>
  <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
    <ThemeCard
      v-for="theme in themes"
      :key="theme.name"
      :data-theme="theme.value"
      :name="theme.name"
      :icon="theme.icon"
      :is-active="$colorMode.preference === theme.value"
      :available-themes="themes"
      @click="$colorMode.preference = theme.value"
    />
  </div>
</template>
