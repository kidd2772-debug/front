<template>
  <aside class="sidebar">
    <div class="sidebar__logo">

    </div>
    <nav class="sidebar__nav">
      <ul>
        <li v-for="item in navItems" :key="item.path">
          <div class="design" :class="{ active: route.path === item.path }"></div>
          <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/referral-program', label: 'Referral Program' },
  { path: '/rewards', label: 'Rewards' },
  { path: '/store', label: 'Store' }
];
</script>

<style lang="scss" scoped>
.sidebar {
  width: 240px;
  flex-shrink: 0;
  background-color: #F3F3F3;
  border-right: 1px solid $border-color;
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
  padding-right: 0.75rem;
}

.sidebar__logo {
  margin-bottom: 2rem;
  text-align: center;
}

.sidebar__nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar__nav li {
  position: relative;
  margin-bottom: 0.5rem;
}

.sidebar__nav a {
  position: relative;
  z-index: 2;

  display: block;
  text-decoration: none;
  color: #000000;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 1rem 2rem;
  transition: transform 150ms cubic-bezier(0, 0, 0.2, 1);

  &:hover {
    transform: translateX(5px);
  }
}

.design {
  opacity: 0;
  transition: opacity 150ms ease-in-out;

  &.active {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #F2FED1;
    box-shadow: 0 5px 0 0 #191A23;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #000;
  }
}
</style>