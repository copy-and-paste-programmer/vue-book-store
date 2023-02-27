import { reactive, toRefs } from "vue"
import axios from "../http/axios"

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

            const cookie = {
                'name': 'access_token',
                'value': `${res.data.token_type} ${res.data.access_token}`,
                'expireTimes': `${res.data.expires_in / (3600 * 24)}d`,
            }

            $cookies.set(...Object.values(cookie));
            localStorage.setItem('auth_user', JSON.stringify(res.data.user))
            state.data = res.data

        } catch (error) {
            state.error = error.response;
            console.log(state.error);
        } finally {
            state.isLoading = false;
        }
    }

    await login();
    return toRefs(state);
}