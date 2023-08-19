import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/movie/:id',
    name: 'movie.view',
    component: () => import(/* webpackChunkName: "movie.view" */ '../views/movie/View.vue')
  },
  {
    path: '/movie',
    name: 'movie.create',
    component: () => import(/* webpackChunkName: "movie.create" */ '../views/movie/Create.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
