<template>
  <div class="flex flex-1"></div>
    <footer class="footer w-full min-h-20 bg-white dark:bg-zinc-800 p-10">
        <div class="footer__container max-w-6xl w-full mx-auto my-0">
          <router-link to="/home" class="header__logo">
            <img :src="isDarkMode ? '/img/logo.svg' : '/img/logo_dark.svg'" alt="Logo" />
          </router-link>
        </div>
      </footer>
</template>