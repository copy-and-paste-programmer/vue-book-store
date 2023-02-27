<template>
    <div class="flex items-center min-h-screen p-4 bg-primary lg:justify-center">
        <div
            class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div
                class="p-7 py-6 text-white bg-[#2B335B] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                <div class="my-3 text-4xl font-bold tracking-wider text-center">
                    <h1 href="#">Reader</h1>
                </div>
                <img src="../../public/images/register-img1.png" alt="" class="h-4/5 w-80">
                <p class="mt-6 text-sm text-center text-gray-300">
                    Read our <a href="#" class="underline">terms</a> and
                    <a href="#" class="underline">conditions</a>
                </p>
            </div>
            <div class="p-7 bg-white md:flex-1">
                <h3 class="my-4 text-2xl font-semibold text-[#2B335B]">
                    Register
                </h3>
                <form class="flex flex-col space-y-5" method="POST" @submit.prevent="register">
                    <div class="flex flex-col space-y-1">
                        <input type="text" name="name" autofocus placeholder="Name" v-model="name"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        <span v-if="errMsg.name" class="text-[#FD0000]">{{ errMsg.name[0] }}</span>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input type="text" name="email" autofocus placeholder="Email" v-model="email"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        <span v-if="errMsg.email" class="text-[#FD0000]">{{ errMsg.email[0] }}</span>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input type="password" name="password" placeholder="Password" v-model="password"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        <span v-if="errMsg.password" class="text-[#FD0000]">{{ errMsg.password[0] }}</span>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input type="password" name="confirm_password" autofocus placeholder="Confirm Password" v-model="confirm_password"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        <span v-if="errMsg.confirm_password" class="text-[#FD0000]">{{ errMsg.confirm_password[0] }}</span>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input type="number" name="phone" autofocus placeholder="Phone" v-model="phone"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        <span v-if="errMsg.phone_no" class="text-[#FD0000]">{{ errMsg.phone_no[0] }}</span>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <textarea type="text" name="address" autofocus placeholder="Address" v-model="address"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        <span v-if="errMsg.address" class="text-[#FD0000]">{{ errMsg.address[0] }}</span>
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full px-4 py-2 text-md font-semibold text-white transition-colors duration-300 bg-[#2B335B] rounded-md shadow hover:bg-[#9098D8] focus:outline-none focus:ring-[#9098D8] focus:ring-4">
                            Sign Up
                        </button>
                    </div>
                    <p class="flex flex-col items-center justify-center mt-10 text-center text-[#2B335B]">
                        <span>Already have an account?</span>
                        <a href="#" class="underline">Get Started!</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "../http/axios";
import {ref} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const confirm_password = ref('');
const phone = ref('');
const address = ref('');
const errMsg = ref([]);

const register = async() => {
    let formData = new FormData();
    formData.append('name' , name.value);
    formData.append('email' , email.value);
    formData.append('password' , password.value);
    formData.append('confirm_password' , confirm_password.value);
    formData.append('phone_no' , phone.value);
    formData.append('address' , address.value);
    console.log(formData);
    await axios.post('/register' , formData).then((response)=>{
        router.push('/login');
    }).catch((error)=>{
        errMsg.value = error.response.data.errors;
    })
}
</script>