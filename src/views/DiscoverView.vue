<template>
    <div class="flex">
        <SideBar />
        <div class="px-10 flex-1 mt-5">
            <div
                class="
                    flex
                    justify-center
                    items-center
                    text-white
                    bg-gray-soft
                    p-2
                    w-[60%]
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                <input
                    type="text"
                    class="
                        text-sm
                        placeholder:text-white
                        w-full
                        ml-2
                        p-0
                        border-0
                        focus:border-0
                        bg-transparent
                        focus:ring-0 focus:outline-none
                    "
                    placeholder="Search your favourite books"
                />
            </div>
            <button class="flex text-white my-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
                <Text text="Back" />
            </button>
            <div class="flex">
                <div class="w-[35%] flex justify-center items-center">
                    <img :src="SampleBook" alt="image" class="w-[75%]">
                </div>
                <div class="w-[55%]">
                    <div class="border-gray-soft border">
                        <div class="pt-8 px-8">
                            <Typography
                                tag="h2"
                                content="Bald Bearded Boss"
                                class="text-xl text-white"
                            />
                            <Text
                                text="By Elliott Holt 1 Feb 2020"
                                class="mt-2 text-gray-500 text-xs"
                            />
                            <div class="flex items-center mt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 text-yellow-400 fill-yellow-400"
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
                                    class="w-6 h-6 text-yellow-400 fill-yellow-400"
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
                                    class="w-6 h-6 text-yellow-400 fill-yellow-400"
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
                                    class="w-6 h-6 text-yellow-400 fill-yellow-400"
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
                                    class="w-6 h-6 text-yellow-400 fill-yellow-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                                <Text
                                    text="(27)"
                                    class="text-white text-sm ml-2"
                                />
                            </div>
                            <div class="flex -mx-2 mt-5">
                                <button
                                    type="button"
                                    class="
                                        text-xs
                                        mx-2
                                        text-white
                                        bg-gradient-to-br
                                        from-purple-600
                                        to-blue-500
                                        hover:bg-gradient-to-bl
                                        focus:ring-4
                                        focus:outline-none
                                        focus:ring-blue-300
                                        dark:focus:ring-blue-800
                                        font-medium
                                        rounded-3xl
                                        px-5
                                        py-2.5
                                        text-center
                                        mr-2
                                        mb-2
                                    "
                                >
                                    Time Traveled
                                </button>
                                <button
                                    type="button"
                                    class="
                                        mx-2
                                        text-white
                                        bg-gradient-to-br
                                        from-purple-600
                                        to-blue-500
                                        hover:bg-gradient-to-bl
                                        focus:ring-4
                                        focus:outline-none
                                        focus:ring-blue-300
                                        dark:focus:ring-blue-800
                                        font-medium
                                        rounded-3xl
                                        text-xs
                                        px-5
                                        py-2.5
                                        text-center
                                        mr-2
                                        mb-2
                                    "
                                >
                                    First Placed
                                </button>
                            </div>
                            <p class="mt-3 leading-8 text-white">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ullam aperiam odio libero
                                assumenda minus blanditiis voluptates nam, fugit
                                iste amet ducimus sequi dignissimos laboriosam
                                maxime numquam impedit itaque eos consequuntur?
                            </p>
                            <Text
                                class="mt-5 text-white"
                                text="-Joey Bate"
                            />
                            <div
                                class="
                                    mt-5
                                    flex
                                    justify-end
                                    items-center
                                    text-white
                                "
                            >
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="flex mt-5">
                            <button
                                class="
                                    flex-1
                                    py-5
                                    flex
                                    justify-center
                                    border border-gray-soft
                                    text-gray-400
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                    />
                                </svg>
                                <Text text="save" class="ml-1" />
                            </button>
                            <button
                                class="
                                    flex-1
                                    py-5
                                    flex
                                    justify-center
                                    items-center
                                    border border-gray-soft
                                    text-gray-400
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                                <Text text="Hide" class="ml-1" />
                            </button>
                            <button
                                class="
                                    flex-1
                                    py-5
                                    flex
                                    justify-center
                                    items-center
                                    border border-gray-soft
                                    text-gray-400
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                    />
                                </svg>
                                <Text text="Read" class="ml-1" />
                            </button>
                            <button
                                class="
                                    flex-1
                                    py-5
                                    flex
                                    justify-center
                                    items-center
                                    border border-gray-soft
                                    text-gray-400
                                "
                                :class="{ 'bg-yellow-400 !text-white': true }"
                            >
                                <Text text="Buy" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="w-[35%]">
                    <div class="p-5 text-white mt-10">
                        <Typography tag="h2" content="About the author"/>
                        <div class="flex items-center mt-3">
                            <img class="w-10 h-10 rounded-full" :src="ProfileImage" alt="Rounded avatar">
                            <Text text="Elliott" class="ml-3"/>
                        </div>
                        <p class="leading-7 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil voluptatibus dignissimos. Perspiciatis, eligendi hic omnis consectetur, voluptas consequatur veritatis quis sit voluptate incidunt optio error nihil quod esse nulla.
                        </p>
                    </div>
                </div>
                <div class="w-[55%]">
                    <div class="p-5">
                        <p class="leading-8 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Iusto ea natus illo saepe error sequi rem
                            ipsum eum deserunt eligendi provident repellendus
                            neque explicabo et possimus, tempora, recusandae
                            incidunt harum. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Corporis quaerat
                            magnam ipsum numquam, iure exercitationem beatae
                            fugit quos qui consectetur mollitia, quod optio
                            placeat harum alias architecto eius quibusdam iste.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae totam alias consequatur velit dicta ex harum laborum, atque sed molestias enim voluptatibus perferendis nostrum pariatur iusto nulla labore eius?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>;
import SideBar from '../components/partials/SideBar.vue';
import ProfileImage from '../assets/image/profile-picture.jpg'
import SampleBook from '../assets/image/samle-book.png'
import Text from '../atoms/Text.vue';
import Typography from '../atoms/Typography.vue';
</script>
