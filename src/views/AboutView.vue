<script setup lang="ts">
import NavBarC from '../components/NavBarC.vue';
import AboutMeC from '../components/AboutMeC.vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <main class="main-container">
    <NavBarC></NavBarC>
    
    <div class="about">
      <AboutMeC></AboutMeC>
    </div>
    
  </main>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components{

  .main-container{
    @apply
    dark:bg-slate-800;
  }

  .about{
    @apply
    h-[93vh]
    flex
    items-center
    justify-center;
  }

  
}
</style>