import { defineStore } from 'pinia';

interface User {
    _id: string;
    nickname: string;
    balance: number;
    dailyProfit: number;
    totalProfit: number;
    referralCount: number;
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

            if (process.client) {
                localStorage.setItem('authToken', data.token);
            }
        },

        logout() {
            this.token = null;
            this.user = null;
            if (process.client) {
                localStorage.removeItem('authToken');
            }
            const router = useRouter();
            router.push('/login');
        },

        setUser(user: User) {
            this.user = user;
        },

        setToken(token: string) {
            this.token = token;
        }
    },
});