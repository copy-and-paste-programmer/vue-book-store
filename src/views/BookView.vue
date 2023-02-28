<template>
    <div class="flex">
        <SideBar />
        <div class="p-[60px]">
            <div v-if="Object.keys(book.data).length">
                <div class="grid grid-cols-3 gap-8 pb-[50px]">
                    <div
                        v-for="book in book.data.data" :key="book.id"
                        class="rounded overflow-hidden shadow-lg  cursor-pointer"
                    >
                        <div class="flex justify-center items-center py-12 self-start bg-primary">
                            <img
                                class="w-[50%]"
                                :src="book.image.url"
                                :alt="book.name"
                            />
                        </div>
                        <div class="px-6 py-4 bg-secondary flex justify-between items-center">
                            <div class="font-bold text-xl mb-2">
                                <h2
                                    class="text-white my-2"
                                    :title="book.name"
                                >
                                    {{ book.name.length > 13 ? book.name.substr(0, 14) + ' ...' : book.name }}
                                </h2>
                                <span class="text-yellow-500 my-2"> ${{ book.price }}</span>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    class="text-slate-50 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                        <div class="px-6 pb-5 bg-secondary">
                            <p class="text-gray-500 text- py-3 text-sm break-words">
                                {{ book.description }}
                            </p>
                            <a
                                href=""
                                class="text-slate-50 underline"
                            >View Details</a>
                        </div>
                    </div>
                    <!-- <div class="max-w-sm rounded overflow-hidden shadow-lg bg-primary mr-[60px]">
                    <img
                        class="w-full h-[300px]"
                        src="/public/images/book1.svg"
                        alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4 bg-secondary flex justify-between items-center">
                        <div class="font-bold text-xl mb-2">
                            <h2 class="text-white my-2">HardBack</h2>
                            <span class="text-yellow-500 my-2"> $96.55</span>
                        </div>
                        <div>
                            <button
                                type="button"
                                class="text-slate-50 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                    <div class="px-6 pb-5 bg-secondary">
                        <p class="text-gray-500 text- py-3 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <a
                            href=""
                            class="text-slate-50 underline"
                        >View Details</a>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-primary mr-[60px]">
                    <img
                        class="w-full h-[300px]"
                        src="/public/images/book1.svg"
                        alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4 bg-secondary flex justify-between items-center">
                        <div class="font-bold text-xl mb-2">
                            <h2 class="text-white my-2">HardBack</h2>
                            <span class="text-yellow-500 my-2"> $96.55</span>
                        </div>
                        <div>
                            <button
                                type="button"
                                class="text-slate-50 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                    <div class="px-6 pb-5 bg-secondary">
                        <p class="text-gray-500 text- py-3 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <a
                            href=""
                            class="text-slate-50 underline"
                        >View Details</a>
                    </div>
                </div> -->
                </div>
                <div class="flex justify-end">
                    <!-- Previous Button -->
                    <button
                        :disabled="true"
                        to=""
                        class="mx-1 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary border border-gray-300 rounded-lg"
                    >
                        Previous
                    </button>

                    <!-- Next Button -->
                    <button
                        :disabled="true"
                        :class="{ 'disabled': !book.data.links.next }"
                        class="mx-1 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary border border-gray-300 rounded-lg"
                    >
                        Next
                    </button>
                </div>
            </div>
            <div>
                <h4 class="text-slate-50 mt-2 mb-3 font-bold">Similar Books</h4>
                <div
                    v-if="Object.keys(book.data).length"
                    class="grid grid-cols-3 gap-4"
                >
                    <div
                        v-for="book in book.data.data"
                        class="flex items-center mr-[50px] mt-4"
                        :key="book.id"
                    >
                        <img
                            :src="book.image.url"
                            :alt="book.name"
                            class="w-[40%]"
                        />
                        <div class="ml-4">
                            <h4 class="text-slate-50">{{ book.name }}</h4>
                            <span class="text-gray-400 text-sm">By Mena Mum | Feb 2020</span>
                            <div class="flex py-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 fill-yellow-400 text-yellow-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 fill-yellow-400 text-yellow-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 fill-yellow-400 text-yellow-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 fill-yellow-400 text-yellow-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 fill-yellow-400 text-yellow-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import SideBar from '../components/partials/SideBar.vue';
import axios from '../http/axios';

const book = reactive({
    data: {},
    error: null,
    isLoading: false,
})

const fetch = async () => {
    const { data, error, isLoading } = await axios('books', {
        headers : {
            'Authorization' : $cookies.get('access_token')
        }
    })
    book.data = data;
    book.error = error
    book.isLoading = isLoading
}

onBeforeMount(async () => {
    fetch();
});

onBeforeRouteUpdate(async (to, from) => {
    if (to.query.page !== from.query.page) {

    }
})


</script>
