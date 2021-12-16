import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login.vue"
import CreateAccount from "@/views/CreateAccount.vue"
import UserProfile from "@/views/Profile/User.vue"
import BankProfile from "@/views/Profile/Bank.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/create',
    name: 'Create-Account',
    component: CreateAccount
  },
  {
    path: '/user',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: "/bank",
    name: "BankProfile",
    component: BankProfile
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
