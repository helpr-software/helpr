<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  name: "App",
  title: "App",
  description: "App",
});
const resetError = (error: any) => {
  error.value = null;
  useRouter().back();
};
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <NuxtErrorBoundary>
      <NuxtPage class="m-4" />
      <template #error="{ error }">
        <div class="p-8 bg-secondary rounded-md">
          <h2 class="text-4xl font-bold text-center">Error !</h2>
          <p class="text-center text-muted mt-4">{{ error }}</p>
          <div class="flex justify-center mt-4">
            <button class="btn-primary" @click="resetError(error)">Go back</button>
          </div>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
