<template>
    <div class="max-w-3xl w-full min-h-40 mx-auto my-0 bg-zinc-800 mt-20 rounded-lg py-5 px-10">
        <h1 class="unred__title text-center text-xl text-red-400 mb-3">Авторизируйтесь, чтобы пользоваться нашим форумом</h1>
        <p class="unred__desc text-center text-md text-white mb-3">К сожалению, вы не авторизированы на нашем форуме. Вы можете сделать это, используя кнопку ниже, иначе вам придётся покинуть наш форум.</p>
        <router-link to="/login" class="flex justify-center max-w-52 w-full mx-auto my-0 bg-red-400 py-2 rounded-md font-bold transition-all hover:tracking-wide">
            Авторизироваться
        </router-link>
    </div>
</template>