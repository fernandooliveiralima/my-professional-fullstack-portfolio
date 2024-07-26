<template>
    <div class="body-home-description">

        <div
            class="home-description-content block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Welcome To My Professional Portfólio
            </h1>
            <p class="
                font-normal 
                text-gray-700 
                dark:text-gray-400">
                This portfolio was built with the aim of showcasing my skills over time, through some applications built
                by me. This is a FullStack portfolio, and in it you will find
                
                <span>
                    Front-End, Back-End, and FullStack applications
                    Through the navigation bar you can access all my most important information, such as my professional
                    contacts, more about my history, and especially my personal projects.
                </span>
                <br>
                <strong>Angular, Vuejs3, Nuxt3, PHP/Laravel and MySQL.</strong>
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {

    .body-home-description {
        @apply flex items-center justify-center
        sm:w-[20rem];
    }

    .home-description-content {
        @apply h-[30rem] w-full;
    }

    .home-description-content h1 {
        @apply text-2xl
        sm:text-lg
        md:text-base;
    }

    .home-description-content p {
        @apply text-lg
        sm:text-base
        md:text-base;
    }

    .home-description-content strong {
        @apply text-purple-600
        sm:text-lg;
    }

    .home-description-content span {
        @apply italic;
    }

}
</style>