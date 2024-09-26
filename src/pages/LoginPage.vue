<template>
    <div class="max-w-md w-full h-auto mx-auto my-0 py-20">
        <h1 class="register__title text-center text-2xl text-red-400 font-bold mb-10">Вход</h1>
        <form class="register__form text-center flex flex-col gap-10">
            <div class="register__form-item flex flex-col">
                <label for="" class="register__form-label text-white mb-2">Электронная почта</label>
                <input type="text" class="register__form-input bg-transparent border-b-2 border-red-400 outline-none text-gray-300 px-2 py-1" required>
            </div>
            <div class="register__form-item flex flex-col">
                <label for="" class="register__form-label text-white mb-2">Пароль</label>
                <input type="password" class="register__form-input bg-transparent border-b-2 border-red-400 outline-none text-gray-300 px-2 py-1" required>
            </div>
            <router-link to="/register" class="text-red-400 font-medium hover:text-red-300 transition-all">
                У меня нет аккаунта
            </router-link>
            <input type="submit" value="Войти" class="w-full bg-red-400 py-2 rounded-md font-bold cursor-pointer transition-all hover:tracking-wide active:tracking-tighter">
        </form>
    </div>
</template>