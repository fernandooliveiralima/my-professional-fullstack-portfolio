<script setup lang="ts">
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

import NavBarC from '../components/NavBarC.vue';
import HomeDescriptionC from '../components/HomeDescriptionC.vue';
import UserCardC from '../components/UserCardC.vue';


onMounted(() => {
  initFlowbite();
})
</script>

<template>

  <main>
    <NavBarC></NavBarC>

    <div class="home-description">
      <UserCardC></UserCardC>
      <HomeDescriptionC></HomeDescriptionC>
    </div>
  </main>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {

  main{
    @apply
    dark:bg-slate-700
    h-screen;
  }

  .home-description{
    @apply
    h-[30rem]
    
    mt-[calc(60%-100vh)]
    flex
    items-center
    justify-center
    
    sm:flex-col
    sm:mt-[20rem]
    md:mt-[5rem]
    lg:mt-[5rem];
  }

  
}
</style>