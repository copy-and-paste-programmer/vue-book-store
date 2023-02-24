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
                <form action="#" class="flex flex-col space-y-5">
                    <div class="flex flex-col space-y-1">
                        <input type="text" id="email" autofocus placeholder="Name"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input type="email" id="email" autofocus placeholder="Email"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input type="password" id="password" placeholder="Password"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input type="password" id="email" autofocus placeholder="Confirm Password"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <input type="email" id="email" autofocus placeholder="Phone"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <textarea type="email" id="email" autofocus placeholder="Address"
                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
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