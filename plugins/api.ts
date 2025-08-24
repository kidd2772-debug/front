import { useAuthStore } from "~/store/auth";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();

    const api = $fetch.create({
        baseURL: config.public.apiBaseUrl,
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