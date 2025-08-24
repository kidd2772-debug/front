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
    console.log('[app.vue] Нашел токен, пытаюсь восстановить сессию...');
    authStore.setToken(token);

    try {
      const user = await $api('/users/me');
      console.log('[app.vue] ПОЛУЧИЛ ДАННЫЕ С БЭКЕНДА:', user);

      authStore.setUser(user);

      console.log('[app.vue] ПОЛОЖИЛ В PINIA:', authStore.user);

    } catch (error) {
      console.error('[app.vue] Ошибка при восстановлении сессии:', error);
    }
  }
});
</script>