<script setup lang="ts">
import NavBarC from '../components/NavBarC.vue';
import ProjectVueCardC from '../components/ProjectVueCardC.vue';

</script>

<template>
    <main>
        <NavBarC></NavBarC>

        <section class="frontend-view">
            <ProjectVueCardC></ProjectVueCardC>

        </section>
    </main>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {

    main {
        @apply dark:bg-slate-700 h-screen;
    }

    .frontend-view {
        @apply flex mt-5 ml-5;
    }
}
</style>