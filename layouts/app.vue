<script setup lang="ts"></script>

<template>
  <div class="h-screen flex flex-col md:flex-row bg-app-primary">
    <LayoutCommandConsole />
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
