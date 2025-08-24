import { useAuthStore } from "~/store/auth";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    let baseURL = config.public.apiBaseUrl;
    if (!baseURL || baseURL.includes('localhost')) {
        baseURL = 'http://95.164.119.202:5000/api';
    }
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