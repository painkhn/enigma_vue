<template>
    <div class="w-full bg-zinc-800 p-10">
        <h1 class="admin__title text-center text-2xl font-bold text-red-400 mb-10">Панель администратора</h1>
        <div class="flex gap-5">
            <div class="admin__stats w-1/2">
                <div class="admin__stats-block w-full bg-zinc-600 h-40 rounded-xl p-5">
                    <h2 class="text-center text-white font-bold">Статистика форума</h2>
                </div>
            </div>
            <div class="admin__search flex flex-col w-1/2">
                <label for="" class="admin__search-label text-red-400 font-bold mb-2">Имя пользователя</label>
                <input type="text" class="admin__search-input w-full h-10 border border-red-400 rounded-md outline-none transition-all px-2 bg-zinc-700 focus:bg-zinc-900 text-white">
            </div>
        </div>
    </div>
</template>