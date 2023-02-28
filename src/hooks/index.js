import { ref } from 'vue';

export const useLocalStorage = (key) => {

    const getItem = (key) => {
        try {
            return JSON.parse(window.localStorage.getItem(key))
        } catch (error) {
            console.log(error);
        }
    }
    const data = ref(getItem(key))

    const setItem = (value) => {
        data.value = value;
        localStorage.setItem(key, JSON.stringify(value))
    }
    
    const removeItem = () => {
        data.value = null;
        localStorage.removeItem(key);
    }

    return { data, setItem , removeItem}

}