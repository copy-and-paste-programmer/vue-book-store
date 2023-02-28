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

// export const useLogin = async (url, payload, config = {}) => {

//     const state = reactive({
//         isLoading: true,
//         error: null,
//         data: null,
//     })

//     const login = async () => {
//         try {
//             const res = await axios({
//                 url,
//                 data: payload,
//                 method: 'POST',
//                 ...config
//             })

//             const auth = useAuthenticationStore();
//             auth.login(res.data)
            
//             state.data = res.data

//         } catch (error) {
//             state.error = error.response;
//             console.log(error)
//         } finally {
//             state.isLoading = false;
//         }
//     }

//     await login();
//     return toRefs(state);
// }