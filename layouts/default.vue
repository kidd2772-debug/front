<template>
  <div class="app-layout">
    <sidebar />
    <main class="main-content">
      <headers :title="pageTitle" />
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Sidebar from "~/components/features/layout/sidebar.vue";
import Headers from "~/components/features/layout/headers.vue";

const route = useRoute();

const pageTitle = computed(() => {
  return (route.meta.title as string) || 'Grass';
});
</script>

<style lang="scss">
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: $background-light;
}

.main-content {
  flex-grow: 1;
  padding: 2rem;
}
</style>