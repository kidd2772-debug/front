import { defineStore } from 'pinia';

interface User {
    _id: string;
    nickname: string;
    balance: number;
    dailyProfit: number;
    totalProfit: number;
    referralCount?: number;
    role: 'user' | 'admin';
    createdAt: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        user: null as User | null,
    }),

    getters: {
        isAuthenticated: (state) => !!state.token && !!state.user,
        isAdmin: (state) => state.user?.role === 'admin',
    },

    actions: {
        loginSuccess(data: { token: string; user: User }) {
            this.token = data.token;
            this.user = data.user;
        },
        async refreshUser() {
            try {
                const { $api } = useNuxtApp();
                const updatedUser = await $api('/users/me');
                this.user = updatedUser;
            } catch (error) {
                console.error("Failed to refresh user data", error);
            }
        },

        logout() {
            this.$reset();

            return navigateTo('/login');
        },
    },

    persist: true,
});