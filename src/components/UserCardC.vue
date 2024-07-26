<script setup lang="ts">
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

import ResumeDownloadC from '../components/ResumeDownloadC.vue';

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <div
    class="user-card-container bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">

    <div
      class="user-card-content bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">
      
      <div class="user-info-container flex items-center justify-evenly pb-10 mt-5">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="../assets/img/foto do perfil oficial.jpg"
          alt="Bonnie image" />
        <div class="user-info">
          <section class="section-row section-name">
            <strong>Name:</strong>
            <span>Fernando Oliveira</span>
          </section>

          <section class="section-row section-name">
            <strong>Profile:</strong>
            <span>Full Stack Developer</span>
          </section>

          <section class="section-row section-name">
            <strong>Email:</strong>
            <span>oliveirafernando.contato@gmail.com</span>
          </section>

          <section class="section-row section-name">
            <strong>Phone:</strong>
            <span>+55 (61) 9 9414-0967</span>
          </section>
        </div>
      </div>
    </div>

    <div class="skills-section">
      <span> <strong>My Hard Skills</strong> </span>

      <section class="hard-skills-container">
        <div class="order-element typescript-soft-skill">
          <span>Typescript 87%</span>
          <div class="typescript-bar"></div>
        </div>

        <div class="order-element angular-soft-skill">
          <span>Angular 92%</span>
          <div class="angular-bar"></div>
        </div>

        <div class="order-element vuejs-soft-skill">
          <span>Vue Js 96%</span>
          <div class="vuejs-bar"></div>
        </div>

        <div class="order-element nuxt-soft-skill">
          <span>Nuxt Js 96%</span>
          <div class="nuxt-bar"></div>
        </div>
        <div class="order-element laravel-soft-skill">
          <span>Laravel 88%</span>
          <div class="laravel-bar"></div>
        </div>
        <div class="order-element mysql-soft-skill">
          <span>mysql 86%</span>
          <div class="mysql-bar"></div>
        </div>
      </section>
    </div>

  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {

  .user-card-container {
    @apply h-[30rem] text-white;
  }

  .user-card-content {
    @apply h-40 w-[30rem] sm:w-[20rem];
  }

  .user-info {
    @apply flex flex-col;
  }

  .section-row {
    @apply flex;
  }

  .user-info-container img {
    @apply sm:h-[15%] sm:w-[15%];
  }

  .section-row strong {
    @apply sm:text-xs;
  }

  .section-row span {
    @apply ml-1 sm:text-xs;
  }

  .hard-skills-container {
    @apply h-[17.9rem] flex flex-col justify-evenly;
  }

  .order-element {
    @apply flex flex-col;
  }

  .typescript-bar {
    @apply bg-[#2f76c4] h-3 w-[65%] rounded-sm;
  }

  .angular-bar {
    @apply bg-[#fc4236] h-3 w-[75%] rounded-sm;
  }

  .vuejs-bar {
    @apply bg-[#40b582] h-3 w-[79%] rounded-sm;
  }

  .nuxt-bar {
    @apply bg-[#00db81] h-3 w-[79%] rounded-sm;
  }

  .laravel-bar {
    @apply bg-[#ec5a49] h-3 w-[71%] rounded-sm;
  }

  .mysql-bar {
    @apply bg-[#e68b03] h-3 w-[67%] rounded-sm;
  }

  .skills-section {
    @apply mt-1 p-1;
  }

}
</style>