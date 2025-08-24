import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-fonts',
  ],

  piniaPluginPersistedstate: {
    storage: 'localStorage',
    mode: 'client'
  },

  typescript: {
    strict: true,
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api',
    }
  },

  app: {
    head: {
      title: 'Grass Dashboard',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Your personal Grass dashboard.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  css: [
    '~/assets/scss/main.scss',
  ],

  googleFonts: {
    families: {
      Karla: {
        wght: [200, 300, 400, 500, 600, 700, 800]
      },
    },
    display: 'swap',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
});