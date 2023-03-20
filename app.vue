<script setup lang="ts">
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

onMounted(() => {
  const userLocale = useLocalStorage("helpr_locale", "en");
  const userTheme = useLocalStorage("helpr_theme", "cosmos");

  locale.value = userLocale.value;
});
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
