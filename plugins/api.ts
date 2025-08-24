import { useAuthStore } from "~/store/auth";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();

    const api = $fetch.create({
        baseURL: config.public.apiBaseUrl,

        onRequest({ request, options }) {
            if (authStore.token) {
                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${authStore.token}`,
                };
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