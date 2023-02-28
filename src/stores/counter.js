import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "../http/axios";

export const useCounterStore = defineStore ({
    state: () => ({
        isLoading: true,
        error: null,
        data: null,
    }),
    getters : {
        user: state => {return state.data}
    },
    actions : {
        async login(url, payload, config = {}) {
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
                this.data = res.data
                localStorage.setItem('auth_user', JSON.stringify(res.data.user))
    
            } catch (error) {
                this.error = error.response;
            } finally {
                this.isLoading = false;
            }
        }
    }

})