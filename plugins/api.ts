import { useAuthStore } from "~/store/auth";

export default defineNuxtPlugin((nuxtApp) => {
    const baseURL = process.env.NUXT_PUBLIC_API_BASE_URL;

    const authStore = useAuthStore();

    const api = $fetch.create({
        baseURL: baseURL,

        onRequest({ request, options }) {
            if (authStore.token) {
                const headers = options.headers as HeadersInit;
                headers['Authorization'] = `Bearer ${authStore.token}`;
                options.headers = headers;
            }
        },

        onResponseError({ response }) {
            if (response.status === 401) {
                authStore.logout();
            }
        },
    });

    return {
        provide: {
            api,
        },
    };
});