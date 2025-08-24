<template>
  <header class="app-header">
    <div class="header-left">
      <h1 class="page-title">{{ title }}</h1>
      <div class="share-block">
        <span class="grow-tag">
          Grow your earnings
        </span>
        <button class="share-button">SHARE WITH FRIENDS</button>
      </div>
    </div>

    <div class="header-right">
      <div class="user-profile">
        <span>Hello, {{ user?.nickname }}!</span>
        <button @click="handleLogout" class="logout-btn">Logout</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

const { user } = storeToRefs(authStore);

defineProps({
  title: {
    type: String,
    required: true,
    default: 'Dashboard'
  }
});

const handleLogout = () => {
  authStore.logout();
};
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  background-color: #F2FED1;
  padding: 0 4px;
  border-radius: 0.75rem;
  margin: 0;
}

.share-block {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  border: 1px solid #191A23;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  box-shadow: 0 5px 0 0 #191A23;
}

.grow-tag {
  background-color: #F2FED1;
  padding: 0 4px ;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
}

.share-button {
  background-color: $primary-green;
  color: #000;
  border: 1px solid #191A23;
  border-radius: 999px;
  padding: 0.25rem 1.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 3px 0 0 #191A23;
  transition: transform 0.1s ease;


  &:active {
    transform: translateY(3px);
    box-shadow: 0 2px 0 0 #191A23;
  }
}

.header-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}


.user-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 1.25rem;
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #191A23;
}
</style>