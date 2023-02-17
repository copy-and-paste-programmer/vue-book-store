<template>
    <div class="flex">
        <SideBar />
        <div class="mx-auto justify-center w-8/12 mt-10">
			<!-- search -->
            <div class="relative">
                <div
                    class="
                        absolute
                        inset-y-0
                        left-0
                        flex
                        items-center
                        pl-3
                        pointer-events-none
                    "
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-[#fff] dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    type="text"
                    id="input-group-1"
                    class="
                        bg-[#2B335B]
                        text-[#fff] text-sm
                        rounded-lg
                        w-full
                        pl-10
                        p-2.5
						dark:placeholder-[#fff]
                    "
                    placeholder="Search your favourite books"
                />
            </div>
			<!-- hi lara -->
            <div class="lara w-full bg-[#2B335B] mt-10 rounded-lg h-44">
                <div class="mx-auto w-11/12 grid grid-cols-2">
                    <div class="left w-8/12 mt-5">
                        <h2
                            class="
                                text-[#fff] text-xl
                                font-bold
                                dark:text-white
                            "
                        >
                            Hi Lara!
                        </h2>
                        <p class="text-[#fff] my-3">
                            Here is a customised world of books for you.
                        </p>
                        <button
                            type="button"
                            class="
                                text-white
                                bg-[#1C213E]
                                focus:outline-none
                                focus:ring-4
                                focus:ring-gray-300
                                font-small
                                rounded-full
                                text-sm
                                px-6
                                py-1
                                mr-2
                                mb-2
                                dark:bg-[#1C213E] dark:border-[#1C213E]
                            "
                        >
                            Browse Latest
                        </button>
                    </div>
                    <div class="right w-6/12 absolute -right-[25px] top-[54px]">
                        <img
                            src="../../public/images/home-img.svg"
                            class="max-w-sm h-80"
                        />
                    </div>
                </div>
            </div>
			<!-- recommended -->
			<div class="mt-5">
				<h3 class="text-[#5D6495] font-bold">Recommended For You</h3>
				<div>
				</div>
			</div>
        </div>
    </div>
</template>

<script setup>
import SideBar from '../components/partials/SideBar.vue';
</script>
