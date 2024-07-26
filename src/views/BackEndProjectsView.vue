<script setup lang="ts">
import NavBarC from '../components/NavBarC.vue';
import ProjectLaravelCardC from '../components/ProjectLaravelCardC.vue';

</script>

<template>
    <main>
        <NavBarC></NavBarC>

        <section class="backend-view">
            <ProjectLaravelCardC></ProjectLaravelCardC>

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

    .backend-view {
        @apply flex mt-5 ml-5;
    }
}
</style>