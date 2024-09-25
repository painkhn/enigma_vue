<script setup>
    import ProfileCommentsForm from '../components/ProfileCommentsForm.vue';
    import ProfileCommentItem from '../components/ProfileCommentItem.vue';
</script>

<template>
   <div class="theme bg-zinc-800 max-w-6xl w-full p-10 mt-10 rounded-md">
    <h1 class="theme__title text-red-400 text-xl font-bold mb-5">Название темы</h1>
    <p class="theme__desc text-gray-200 text-lg mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nemo laudantium, a corrupti tenetur quibusdam consequatur asperiores labore iure impedit, eveniet quisquam veritatis at autem quasi! Minus distinctio tenetur quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex praesentium ab, maxime quos quisquam, est dolore rem soluta, deserunt debitis omnis. Dicta rem modi unde commodi corrupti explicabo nisi?</p>
    <hr class="border-b-1 border-gray-200 mb-5">

    <ProfileCommentsForm />

    <ProfileCommentItem />

   </div>
</template>