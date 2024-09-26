<script setup>
  import { ref } from 'vue';

  const isDarkMode = ref(false);

  const hanldedarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.body.classList.toggle('dark', isDarkMode.value);
  }
</script>

<template>
  <div class="flex flex-1"></div>
    <footer class="footer w-full min-h-20 bg-white dark:bg-zinc-800 p-10">
      <div class="footer__container max-w-6xl w-full mx-auto my-0 flex justify-between">
        <router-link to="/home" class="header__logo">
          <img :src="isDarkMode ? '/img/logo.svg' : '/img/logo_dark.svg'" alt="Logo" />
        </router-link>
        <button @click="hanldedarkMode" class="mt-2">
          <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nightModeIconTitle" stroke="rgb(248 113 113)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="nightModeIconTitle">Night Mode</title> <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path> <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z"></path> <path d="M12 5V3M12 21v-2"></path> <path d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z"></path> </g></svg>
        </button>
      </div>
  </footer> 
</template>