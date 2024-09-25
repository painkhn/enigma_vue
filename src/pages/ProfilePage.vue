<script setup>
    import ProfileUserInfo from '../components/ProfileUserInfo.vue'
    import ProfileCommentsForm from '../components/ProfileCommentsForm.vue'
</script>

<template>
    <div class="max-w-6xl h-auto p-10 bg-zinc-800 rounded-md mx-auto my-0 mt-10">
        <div class="flex gap-5 mb-5">
            <img src="/img/avatar_default.jpg" alt="" class="profile__avatar w-48 h-48 rounded-md">
            <ProfileUserInfo />
        </div>

        <div class="profile__buttons flex items-center gap-5">
            <a href="#!" class="p-2 bg-red-400 rounded-md font-bold transition-all hover:tracking-wide">Темы от Username</a>
            <a href="#!" class="p-2 bg-red-400 rounded-md font-bold transition-all hover:tracking-wide">Комментарии Username</a>
        </div>

        <hr class="border-b-1 border-black w-full mt-5 mb-5">

        <div class="profile__comments">
            <h1 class="profile__title text-red-400 text-xl font-bold mb-5">Комментарии Username</h1>
            <ProfileCommentsForm />
        </div>

    </div>
</template>