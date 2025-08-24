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
const { $api } = useNuxtApp();
onMounted(async () => {
  const token = localStorage.getItem('authToken');

  if (token && !authStore.isAuthenticated) {
    console.log('Found token in localStorage, trying to restore session...');
    authStore.setToken(token);
    try {
      const user = await $api('/users/me');
      authStore.setUser(user);
      console.log('Session restored successfully for:', user.nickname);
    } catch (error) {
      console.error('Failed to restore session:', error);
    }
  }
});
</script>