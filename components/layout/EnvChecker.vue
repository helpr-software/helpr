<script setup lang="ts">
const env = process.env.NODE_ENV;
</script>

<template>
  <div class="env-checker fixed bottom-0 z-10 p-1 text-center" v-bind:class="env" v-if="env !== 'production'">
    {{ env }}
  </div>
</template>

<style lang="scss" scoped>
.env-checker {
  &.development {
    background-color: darkgreen;
  }
  &.staging {
    background-color: yellow;
  }
}
</style>
