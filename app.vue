<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

onMounted(async () => {
  const token = localStorage.getItem('authToken');

  if (token && !authStore.isAuthenticated) {
    console.log('Found token, trying to restore session...');
    authStore.setToken(token);
  }
});
</script>