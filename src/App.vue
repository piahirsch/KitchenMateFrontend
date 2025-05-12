<template>
  <div class="layout">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
main {
  flex-grow: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>