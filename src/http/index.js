import { reactive, toRefs } from "vue"
import axios from "./axios.js"

export const useFetch = async (url, config = {}) => {

    const state = reactive({
        isLoading: true,
        error: null,
        data: null,
    })

    const fetch = async () => {
        try {
            const res = await axios({
                url,
                method: 'GET',
                ...config
            })
            state.isLoading = false;
            state.data = res.data
        } catch (error) {
            state.isLoading = false;
            state.error = error.response
        }
    }

    await fetch();

    return toRefs(state);
}

export const useLogin = async (url, payload, config = {}) => {

    const state = reactive({
        isLoading: true,
        error: null,
        data: null,
    })

    const login = async () => {
        try {
            const res = await axios({
                url,
                data: payload,
                method: 'POST',
                ...config
            })

            const config = {
                'name': 'access_token',
                'value': `${data.token_type} ${data.access_token}`,
                'expireTimes': `${data.expires_in / (3600 * 24)}d`,
            }

            $cookies.set(...Object.values(config));
            localStorage.setItem('auth_user', JSON.stringify(data.user))
            state.data = res.data

        } catch (error) {
            state.error = error.response;
        } finally {
            data.isLoading = false;
        }
    }

    await login();

    return toRefs(state);
}