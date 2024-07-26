<script setup lang="ts">
    import NavBarC from '../components/NavBarC.vue';
    
    import ProjectFullStackCardC from '../components/ProjectFullStackCardC.vue';
</script>

<template>
    <main>
        <NavBarC></NavBarC>
        
        <section class="fullstack-view">
            <ProjectFullStackCardC></ProjectFullStackCardC>
        </section>
    </main>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components{

    main {
        @apply dark:bg-slate-700 h-screen;
    }

    .fullstack-view{
        @apply
        flex
        mt-5
        ml-5;
    }
}
</style>