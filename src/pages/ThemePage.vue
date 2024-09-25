<script setup>
    import ThemeCommentForm from '../components/ThemeCommentForm.vue';
    import ThemeContent from '../components/ThemeContent.vue'
</script>

<template>
   <div class="theme bg-zinc-800 max-w-6xl w-full p-5 mt-10 rounded-md">
        <div class="p-5 border border-red-400 rounded-md">
            
            <ThemeContent />

            <ThemeCommentForm />
            
        </div>

   </div>
</template>

<style scoped>
    .theme__back:hover,
    .theme__username:hover {
        text-shadow: 2px 2px 2px rgb(0, 0, 0);
    }
</style>