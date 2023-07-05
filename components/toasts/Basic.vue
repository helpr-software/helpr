<script setup lang="ts">
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon, ShieldExclamationIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { PropType } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String as PropType<"success" | "error" | "warning" | "info">,
    default: "success",
  },
  duration: {
    type: Number,
    default: 2000,
  },
});

const emit = defineEmits(["close"]);
</script>

<template>
  <div aria-live="assertive" class="pointer-events-none z-[9999] fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="show" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-secondary shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" v-if="type === 'success'" />
                <XCircleIcon class="h-6 w-6 text-red-400" aria-hidden="true" v-if="type === 'error'" />
                <InformationCircleIcon class="h-6 w-6 text-yellow-400" aria-hidden="true" v-if="type === 'warning'" />
                <ShieldExclamationIcon class="h-6 w-6 text-blue-400" aria-hidden="true" v-if="type === 'info'" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-primary">
                  {{ title }}
                </p>
                <p class="mt-1 text-sm text-muted" v-if="description">
                  {{ description }}
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button type="button" @click="emit('close')" class="inline-flex rounded-md bg-secondary text-gray-400 hover:text-gray-500 focus:outline-none">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
