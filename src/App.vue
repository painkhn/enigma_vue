<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue';
</script>

<template>
  <Header />

  <main class="main max-w-6xl w-full mx-auto my-0">

    <router-view></router-view>
  </main>

  <Footer />
</template>