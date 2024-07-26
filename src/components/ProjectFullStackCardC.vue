<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { initFlowbite } from 'flowbite';

import IconLogoVueC from '../components/IconLogoVueC.vue';
import IconLogoLaravelC from '../components/IconLogoLaravelC.vue';

onMounted(() => {
    initFlowbite();
})
</script>

<template>


    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
            <section class="flex">
                <IconLogoVueC></IconLogoVueC>
                <IconLogoLaravelC></IconLogoLaravelC>
            </section>
            
        </div>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Car Rental</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">  What does the Application do? App Car Rental, is a fullstack Application built on <strong>VueJs 3, Laravel PHP Framework and Authentication done on JWT (Json Web Token)</strong> which is a car rental company, where you can enter records of car models and their brands. When you click the My Project link, you will be redirected to the project repository. To execute this project, it is very important that you carefully read the ReadMe.md file, in this file there is a step-by-step guide that you must follow to execute the project successfully.</p>
            <a href="https://github.com/fernandooliveiralima/FullStack_AppCarRental"
                target="_blank"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                My Project
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    </div>

</template>

<style scoped></style>