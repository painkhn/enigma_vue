<script setup>
    import ThemeCommentForm from '../components/ThemeCommentForm.vue';
    import ThemeContent from '../components/ThemeContent.vue'
</script>

<template>
   <div class="theme bg-white dark:bg-zinc-800 max-w-6xl w-full p-5 mt-10 rounded-md mb-10">
        <div class="p-5 border border-red-400 rounded-md">
            
            <ThemeContent />

            <ThemeCommentForm />

            <div class="theme__comment-item p-2 my-5 flex flex-col gap-1 border border-red-400 dark:border-gray-200 rounded-md">
                <h3 class="theme__comment-item--username text-lg text-red-400 font-bold border-b border-red-400 dark:border-gray-200 pb-2">Username</h3>
                <p class="theme_comment-item--desc text-gray-800 dark:text-gray-200 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus expedita perspiciatis officia quis nobis fuga, ducimus suscipit vitae! Harum quam deleniti pariatur provident exercitationem aut, molestiae corporis quos at cumque.</p>
                <div class="flex gap-2">
                    <a href="!#" class="p-2 bg-red-400 dark:bg-gray-200 text-white dark:text-gray-800 font-bold rounded-md transition-all hover:tracking-wider">Редактировать</a>
                    <a href="!#" class="p-2 bg-red-400 dark:bg-gray-200 text-white dark:text-gray-800 font-bold rounded-md transition-all hover:tracking-wider">Удалить</a>
                </div>
            </div>
            
        </div>

   </div>
</template>

<style scoped>
    .theme__back:hover,
    .theme__username:hover {
        text-shadow: 2px 2px 2px rgb(0, 0, 0);
    }
</style>