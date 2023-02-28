import { defineStore } from 'pinia'
import { useLocalStorage } from '../hooks'
import axios from '../http/axios'
const store = useLocalStorage('auth_user');

const useAuthenticationStore = defineStore('auth_user', {
    state: () => ({
        user: store.data.value ? store.data.value : null,
        accessToken: null,
        pending: false,
        error: null
    }),
    getters: {
        isLogin(state) { 
            return state.user ? true : false 
        }
    },
    actions: {
        logout() {
            this.user = null
            this.accessToken = null
            this.error = null;
            $cookies.remove('access_token')
            store.removeItem('auth_user');
        },
        async login(payload) {
            this.pending = true
            this.error = null;
            try {
               const res = await axios({
                    url: 'login',
                    method: 'POST',
                    data: payload
                })
                
                const { user, access_token, token_type, expires_in } = res.data;
                
                this.user = user;

                const cookie = {
                    'name': 'access_token',
                    'value': `${token_type} ${access_token}`,
                    'expireTimes': `${expires_in / (3600 * 24)}d`,
                }
                this.accessToken = cookie.value
                $cookies.set(...Object.values(cookie));
                const store = useLocalStorage('auth_user');
                store.setItem(user)
                

            } catch (error) {
                this.error = error
            } finally {
                this.pending = false
            }
        }
    }
})

export default useAuthenticationStore