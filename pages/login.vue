<!-- pages/login.vue -->
<template>
  <div class="login-container">
    <BaseCard class="login-card">
      <h1 class="title">Welcome!</h1>
      <p class="subtitle">Sign in or create an account using your Telegram.</p>
      <div id="telegram-login-widget"></div>
      <p v-if="error" class="error-message">{{ error }}</p>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const error = ref<string | null>(null);

const onTelegramAuth = async (user) => {
  try {

    const response = await $fetch('https://acdc2b196563.ngrok-free.app/api/auth/telegram', {
      method: 'POST',
      body: user
    });
    console.log(response)
    const { token, user: userData } = response;

    router.push('/');

  } catch (err: any) {
    error.value = err.data?.message || 'An error occurred during login. Please try again.';
  }
};

onMounted(() => {
  (window as any).onTelegramAuth = onTelegramAuth;

  const script = document.createElement('script');
  script.src = 'https://telegram.org/js/telegram-widget.js?22';
  script.async = true;

  script.setAttribute('data-telegram-login', 'wipto_bot');
  script.setAttribute('data-size', 'large');
  script.setAttribute('data-radius', '20');

  script.setAttribute('data-onauth', 'onTelegramAuth(user)');

  document.getElementById('telegram-login-widget')?.appendChild(script);
});

definePageMeta({
  layout: 'auth'
});
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: $background-light;
}

.login-card {
  max-width: 450px;
  width: 100%;
  text-align: center;
  padding: 3rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.error-message {
  color: #ff4d4d;
  margin-top: 1.5rem;
  font-weight: 500;
}
</style>