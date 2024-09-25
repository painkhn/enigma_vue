<template>
    <div class="profile__comments-item border border-red-400 p-2 rounded-md">
        <h3 class="profile__comments-username text-red-400 text-lg font-medium mb-1">Username</h3>
        <hr class="border-b-1 border-red-400 mb-2">
        <p class="profile__comments-text text-gray-200 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quas eveniet vel esse fugiat, consequuntur nobis laudantium unde earum.</p>
        <div class="flex gap-2 pt-2">
            <button class="profile__comments-button p-2 bg-red-400 font-bold rounded-md transition-all hover:tracking-wider">Редактировать</button>
            <button class="profile__comments-button p-2 bg-red-400 font-bold rounded-md transition-all hover:tracking-wider ">Удалить</button>
        </div>
    </div>
</template>