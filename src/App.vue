<script setup>
  import Header from './components/Header.vue'
  import MainCategories from './components/MainCategories.vue';
  import MainThemes from './components/MainThemes.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <Header />

  <h1 class="text-2xl form-bold text-white text-center py-10">FORUM</h1>

  <main class="main max-w-6xl w-full mx-auto my-0 flex justify-between">
    <MainCategories />

    <MainThemes />
  </main>

  <Footer />
</template>