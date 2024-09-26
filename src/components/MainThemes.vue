<template>
    <div class="main__themes w-8/12 h-auto p-10 rounded-xl bg-white dark:bg-zinc-800 shadow-xl">
        <h2 class="main__themes-title text-red-400 font-bold text-2xl mb-5">Название категории</h2>
        <ul class="main__themes-list flex flex-col gap-5 text-lg pl-4 dark:text-white">
            <li><router-link to="/theme" href="#!" class="transition-all hover:text-red-400">Название темы</router-link></li>
            <li><a href="#!" class="transition-all hover:text-red-400">Название темы</a></li>
            <li><a href="#!" class="transition-all hover:text-red-400">Название темы</a></li>
            <li><a href="#!" class="transition-all hover:text-red-400">Название темы</a></li>
        </ul>
    </div>
</template>

<style scoped>
    .main__themes-list li:hover a {
        text-shadow: 2px 2px 2px rgb(0, 0, 0);
    }
</style>