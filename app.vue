<script setup lang="ts">
import EnvChecker from "~/components/layout/EnvChecker.vue";
import { useUser } from "~/composables/useAuth";

const { locale } = useI18n();

useHead({
  title: useAppConfig().appTitle,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: useAppConfig().appDescription },
    { name: "keywords", content: "Home" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
await useUser();
</script>

<template>
  <Html>
    <Body class="bg-primary m-0 p-0 text-primary">
      <EnvChecker />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
