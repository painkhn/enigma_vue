<template>
    <div class="max-w-6xl h-auto p-10 bg-zinc-800 rounded-md mx-auto my-0 mt-10">
        <div class="flex gap-5 mb-5">
            <img src="/img/avatar_default.jpg" alt="" class="profile__avatar w-48 h-48 rounded-md">
            <div class="profile__userinfo">
                <h2 class="profile__userinfo-username text-red-400 text-lg font-bold">Username</h2>
                <p class="profile__userinfo-userdesc text-gray-200 mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit voluptatum, vel laudantium modi perferendis magni doloremque natus enim deleniti voluptatibus, nam ipsa. Facere cumque minima sapiente ratione, odit earum.</p>
                <hr class="border-b-1 border-black w-full mb-2">
                <p class="profile__userinfo-email text-red-400">email@gmail.com</p>
                <p class="profile__userinfo-age text-gray-200">18 years</p>
                <p class="profile__userinfo-sex text-gray-200">Man</p>
            </div>
        </div>

        <div class="profile__buttons flex items-center gap-5">
            <a href="#!" class="p-2 bg-red-400 rounded-md font-bold transition-all hover:tracking-wide">Темы от Username</a>
            <a href="#!" class="p-2 bg-red-400 rounded-md font-bold transition-all hover:tracking-wide">Комментарии Username</a>
        </div>

        <hr class="border-b-1 border-black w-full mt-5 mb-5">

        <div class="profile__comments">
            <h1 class="profile__title text-red-400 text-xl font-bold mb-5">Комментарии Username</h1>
            <form action="" class="profile__comments-form flex flex-col">
                <label for="" class="profile__comments-form--label text-red-400 mb-2">Оставьте ваш комментарий</label>
                <input type="text" class="profile__comments-form--input bg-transparent border-b-2 border-red-400 px-2 py-1 text-gray-200 outline-none" required>
                <input type="submit" value="Отправить" class="profile__comments-form--submit p-2 my-5 cursor-pointer bg-red-400 text-md font-medium transition-all hover:tracking-wide active:tracking-tight">
            </form>
        </div>

    </div>
</template>