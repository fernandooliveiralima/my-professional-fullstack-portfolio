<script setup lang="ts">
import NavBarC from '../components/NavBarC.vue';
import ContactsC from '../components/ContactsC.vue';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <main>
    <NavBarC></NavBarC>
    <div class="contacts-container">
      <ContactsC></ContactsC>
    </div>
  </main>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {

  

  .contacts-container{
    
  }
}
</style>