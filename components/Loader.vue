<script setup lang="ts">
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="text-center">
    <ArrowPathIcon class="animate-spin h-6 w-6 text-primary" />
    <p class="text" v-if="props.isText">
      {{ $t("loading") }}
    </p>
  </div>
</template>
