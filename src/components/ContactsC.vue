<script setup lang="ts">
import IconLinkedinC from '../components/IconLinkedinC.vue';
import IconWhatsappC from '../components/IconWhatsappC.vue';
import IconEmailC from '../components/IconEmailC.vue';
import IconGithubC from '../components/IconGithubC.vue';
</script>

<template>
    <div class="dark:bg-slate-800 h-screen xl:flex items-center justify-center">

        <div
            class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white relative top-[30%]">
                My Contacts
            </h5>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">These are my professional contact links.
                Call me now!.</p>
            <ul class="my-4 space-y-3">
                <li>
                    <a href="#"
                        class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <IconLinkedinC></IconLinkedinC>
                        <span class="flex-1 ms-3 whitespace-nowrap">My Linkedin</span>
                        <span
                            class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <IconWhatsappC></IconWhatsappC>
                        <span class="flex-1 ms-3 whitespace-nowrap">My Whatsapp</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <IconEmailC></IconEmailC>
                        <span class="flex-1 ms-3 whitespace-nowrap">My Email</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <IconGithubC></IconGithubC>
                        <span class="flex-1 ms-3 whitespace-nowrap">My Github</span>
                    </a>
                </li>

            </ul>

        </div>

    </div>
</template>

<style scoped>

</style>