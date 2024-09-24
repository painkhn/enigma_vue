<script setup>
    import MainCategories from './MainCategories.vue';
    import MainThemes from './MainThemes.vue';
</script>

<template>
    <h1 class="text-2xl form-bold text-white text-center py-10">FORUM</h1>
    <div class="max-w-6xl w-full flex">
        <MainCategories />
        <div class="flex-1"></div>
        <MainThemes />
    </div>
</template>