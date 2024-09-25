import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'
import RegisterPage from './pages/RegisterPage.vue'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import UnregisteredUser from './pages/UnregisteredUser.vue'
import ProfilePage from './pages/ProfilePage.vue'
import ThemePage from './pages/ThemePage.vue'

const app = createApp(App)

const routes = [
    { path: '/', name: 'Unregistered', component: UnregisteredUser },
    { path: '/home', name: 'Home', component: HomePage },
    { path: '/register', name: 'Register', component: RegisterPage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/profile', name: 'Profile', component: ProfilePage },
    { path: '/theme', name: 'Theme', component: ThemePage },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)

app.mount('#app')
