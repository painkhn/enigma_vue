import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'
import RegisterPage from './pages/RegisterPage.vue'
import HomePage from './pages/HomePage.vue'

const app = createApp(App)

const routes = [
    { path: '/home', name: 'Home', component: HomePage },
    { path: '/register', name: 'Register', component: RegisterPage },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)

app.mount('#app')
