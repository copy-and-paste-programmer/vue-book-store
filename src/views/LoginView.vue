<template>
    <div class="flex items-center min-h-screen p-4 bg-primary lg:justify-center">
        <div
            class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div
                class="p-7 py-6 text-white bg-[#2B335B] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                <div class="my-3 text-4xl font-bold tracking-wider text-center">
                    <h1 href="#">Reader</h1>
                </div>
                <img
                    src="../../public/images/people-reading-book-in-library-7368453-6006217.png"
                    alt=""
                >
                <p class="mt-6 text-sm text-center text-gray-300">
                    Read our <a
                        href="#"
                        class="underline"
                    >terms</a> and
                    <a
                        href="#"
                        class="underline"
                    >conditions</a>
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
                            >Remember me</label>
                        </div>
                        <a
                            href="#"
                            class="item-end text-sm text-blue-600 hover:underline focus:text-blue-800"
                        >Forgot
                            Password?</a>
                    </div>
                    <div>
                        <button
                            :disabled="pending"
                            type="submit"
                            class=" disabled:bg-[#9098D8] w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#2B335B] rounded-md shadow hover:bg-[#9098D8] focus:outline-none focus:ring-[#9098D8] focus:ring-4"
                        >
                            Log in
                        </button>
                    </div>
                    <p class="flex flex-col items-center justify-center mt-10 text-center text-[#2B335B]">
                        <span>Don't have an account?</span>
                        <a
                            href="#"
                            class="underline"
                        >Get Started!</a>
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
const { pending, error } = storeToRefs(auth)

const onLogin = async () => {
    const payload = { email: emailRef.value, password: passwordRef.value }
    await auth.login(payload)
    if (!error.value) {
        toast.success('Login Successfully')
        router.push({ name: 'home' })
        return;
    }
}
</script>

<style lang="scss" scoped></style>