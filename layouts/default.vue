<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/Footer.vue";
import CommandConsole from "~/components/layout/CommandConsole.vue";
</script>

<template>
  <div>
    <CommandConsole />
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
