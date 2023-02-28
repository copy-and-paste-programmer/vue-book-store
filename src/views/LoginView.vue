<template>
    <div
        class="flex items-center min-h-screen p-4 bg-primary lg:justify-center"
    >
        <div
            class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
        >
            <div
                class="p-7 py-6 text-white bg-[#2B335B] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
            >
                <div class="my-3 text-4xl font-bold tracking-wider text-center">
                    <h1 href="#">Reader</h1>
                </div>
                <img
                    src="../../public/images/people-reading-book-in-library-7368453-6006217.png"
                    alt=""
                />
                <p class="mt-6 text-sm text-center text-gray-300">
                    Read our <a href="#" class="underline">terms</a> and
                    <a href="#" class="underline">conditions</a>
                </p>
            </div>
            <div class="p-7 bg-white md:flex-1">
                <h3 class="my-4 text-2xl font-semibold text-[#2B335B]">
                    Account Login
                </h3>
                <form
                    method="POST"
                    class="flex flex-col space-y-5"
                    @submit.prevent="onLogin"
                >
                    <div class="flex flex-col space-y-1">
                        <input
                            :disabled="pending"
                            type="email"
                            id="email"
                            autofocus
                            placeholder="Email"
                            v-model="emailRef"
                            class="px-4 py-2 border border-gray-300 rounded focus:ring-blue-200"
                        />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input
                            :disabled="pending"
                            type="password"
                            id="password"
                            placeholder="Password"
                            v-model="passwordRef"
                            class="px-4 py-2 border border-gray-300 rounded focus:ring-blue-200"
                        />
                    </div>
                    <div class="flex items-center space-x-2 justify-between">
                        <div class="">
                            <input
                                type="checkbox"
                                id="remember"
                                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label
                                for="remember"
                                class="text-sm font-semibold text-gray-500"
                                >Remember me</label
                            >
                        </div>
                        <a
                            href="#"
                            class="item-end text-sm text-blue-600 hover:underline focus:text-blue-800"
                            >Forgot Password?</a
                        >
                    </div>
                    <div>
                        <button
                            v-if="!pending"
                            :disabled="pending"
                            type="submit"
                            class="disabled:bg-[#9098D8] w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#2B335B] rounded-md shadow hover:bg-[#9098D8] focus:outline-none focus:ring-[#9098D8] focus:ring-4"
                        >
                            Login
                        </button>
                        <button
                            v-if="pending"
                            :disabled="pending"
                            type="submit"
                            class="disabled:bg-[#9098D8] w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#2B335B] rounded-md shadow hover:bg-[#9098D8] focus:outline-none focus:ring-[#9098D8] focus:ring-4"
                        >
                            <svg
                                aria-hidden="true"
                                role="status"
                                class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="#1C64F2"
                                />
                            </svg>
                            Loading...
                        </button>
                    </div>
                    <p
                        class="flex flex-col items-center justify-center mt-10 text-center text-[#2B335B]"
                    >
                        <span>Don't have an account?</span>
                        <a href="#" class="underline">Get Started!</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import useAuthenticationStore from '../stores/useAuthenticationStore';

const emailRef = ref('');
const passwordRef = ref('');
const router = useRouter();
const auth = useAuthenticationStore();
const { pending, error } = storeToRefs(auth);

const onLogin = async () => {
    const payload = { email: emailRef.value, password: passwordRef.value };
    await auth.login(payload);
    if (!error.value) {
        toast.success('Login Successfully');
        router.push({ name: 'home' });
        return;
    }
};
</script>

<style lang="scss" scoped></style>
