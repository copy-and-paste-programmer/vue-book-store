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
            state.error = error.response.data
        }
    }

    await fetch();

    return toRefs(state);
}